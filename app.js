/**
 * Digital Business Vocabulary Game Application Logic
 */

class VocabGameApp {
  constructor() {
    this.userXP = parseInt(localStorage.getItem('db_vocab_xp') || '0', 10);
    this.currentGameMode = null;

    // Quiz State
    this.quizQuestions = [];
    this.quizCurrentIndex = 0;
    this.quizScore = 0;
    this.quizStreak = 0;
    this.quizMaxStreak = 0;
    this.quizTimer = null;
    this.quizTimeLeft = 15;
    this.quizAnswered = false;
    this.lifeline5050Used = false;
    this.lifelineTimeUsed = false;

    // Memory Game State
    this.memoryCards = [];
    this.memoryFlippedCards = [];
    this.memoryMatchedCount = 0;
    this.memoryMoves = 0;
    this.memoryTimerInterval = null;
    this.memorySeconds = 0;

    // Scramble Game State
    this.scrambleQuestions = [];
    this.scrambleIndex = 0;
    this.scrambleCurrentWord = "";
    this.scrambleUserInput = [];
    this.scramblePoolLetters = [];

    // Flashcard State
    this.flashcardsList = [];
    this.flashcardIndex = 0;
    this.flashcardIsFlipped = false;

    this.init();
  }

  init() {
    this.updateUserStatsDisplay();
    this.renderHomeCategories();
    this.renderGlossary();
    this.filterFlashcards();
  }

  // --- XP & Level System ---
  addXP(amount) {
    this.userXP += amount;
    localStorage.setItem('db_vocab_xp', this.userXP);
    this.updateUserStatsDisplay();
  }

  getUserLevel() {
    if (this.userXP < 200) return { title: "Novice 🌱", level: 1 };
    if (this.userXP < 600) return { title: "Digital Pro ⚡", level: 2 };
    if (this.userXP < 1200) return { title: "Tech Strategist 🚀", level: 3 };
    if (this.userXP < 2500) return { title: "FinTech Guru 💳", level: 4 };
    return { title: "Unicorn Founder 🦄", level: 5 };
  }

  updateUserStatsDisplay() {
    const xpEl = document.getElementById('header-xp');
    const levelEl = document.getElementById('header-level');
    if (xpEl) xpEl.textContent = this.userXP.toLocaleString();
    if (levelEl) levelEl.textContent = this.getUserLevel().title;
  }

  toggleSound() {
    const isEnabled = Sound.toggleSound();
    const btn = document.getElementById('sound-toggle-btn');
    if (btn) {
      btn.textContent = isEnabled ? '🔊' : '🔇';
    }
  }

  // --- View Controller ---
  showView(viewName) {
    Sound.playClick();
    const panels = document.querySelectorAll('.view-panel');
    panels.forEach(p => p.classList.remove('active'));

    const targetPanel = document.getElementById(`view-${viewName}`);
    if (targetPanel) targetPanel.classList.add('active');

    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(t => t.classList.remove('active'));
    const targetTab = document.getElementById(`tab-${viewName}`);
    if (targetTab) targetTab.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  renderHomeCategories() {
    const container = document.getElementById('home-categories-list');
    if (!container) return;

    container.innerHTML = Object.values(VOCAB_CATEGORIES).map(cat => {
      const count = VOCAB_DATABASE.filter(item => item.category === cat.id).length;
      return `
        <div class="category-card" onclick="App.showGlossaryWithCategory('${cat.id}')">
          <div class="category-icon">${cat.icon}</div>
          <div class="category-info">
            <h4>${cat.name}</h4>
            <span>${cat.nameTh} • ${count} คำ</span>
          </div>
        </div>
      `;
    }).join('');
  }

  // --- MODE 1: SPEED QUIZ ---
  startQuiz() {
    this.currentGameMode = 'quiz';
    this.showView('quiz');
    this.quizQuestions = this.shuffleArray([...VOCAB_DATABASE]).slice(0, 10);
    this.quizCurrentIndex = 0;
    this.quizScore = 0;
    this.quizStreak = 0;
    this.quizMaxStreak = 0;
    this.lifeline5050Used = false;
    this.lifelineTimeUsed = false;

    const btn5050 = document.getElementById('btn-lifeline-5050');
    const btnTime = document.getElementById('btn-lifeline-time');
    if (btn5050) btn5050.disabled = false;
    if (btnTime) btnTime.disabled = false;

    this.renderQuizQuestion();
  }

  renderQuizQuestion() {
    clearInterval(this.quizTimer);
    this.quizAnswered = false;
    const currentQ = this.quizQuestions[this.quizCurrentIndex];
    if (!currentQ) {
      this.finishQuiz();
      return;
    }

    const cat = VOCAB_CATEGORIES[currentQ.category];
    const currentNumEl = document.getElementById('quiz-current-num');
    const totalNumEl = document.getElementById('quiz-total-num');
    const fillEl = document.getElementById('quiz-progress-fill');
    const catTagEl = document.getElementById('quiz-category-tag');
    const termEl = document.getElementById('quiz-term-text');
    const phoneticEl = document.getElementById('quiz-phonetic-text');
    const streakEl = document.getElementById('quiz-streak');
    const nextBtn = document.getElementById('quiz-next-btn');
    const expBox = document.getElementById('quiz-explanation-box');

    if (currentNumEl) currentNumEl.textContent = this.quizCurrentIndex + 1;
    if (totalNumEl) totalNumEl.textContent = this.quizQuestions.length;
    if (fillEl) fillEl.style.width = `${((this.quizCurrentIndex) / this.quizQuestions.length) * 100}%`;
    if (catTagEl) catTagEl.innerHTML = `${cat.icon} ${cat.name}`;
    if (termEl) termEl.textContent = currentQ.term;
    if (phoneticEl) phoneticEl.textContent = currentQ.phonetic || '';
    if (streakEl) streakEl.textContent = this.quizStreak;
    if (nextBtn) nextBtn.style.display = 'none';
    if (expBox) expBox.classList.remove('show');

    // Speech button
    const speakBtn = document.getElementById('quiz-speak-btn');
    if (speakBtn) {
      speakBtn.onclick = () => Sound.speak(currentQ.term);
    }

    // Generate 4 Options (1 Correct + 3 Wrong)
    const wrongOptions = this.shuffleArray(
      VOCAB_DATABASE.filter(item => item.id !== currentQ.id)
    ).slice(0, 3).map(item => item.definitionTh);

    const allOptions = this.shuffleArray([
      { text: currentQ.definitionTh, isCorrect: true },
      ...wrongOptions.map(t => ({ text: t, isCorrect: false }))
    ]);

    const optionsContainer = document.getElementById('quiz-options-container');
    if (optionsContainer) {
      optionsContainer.innerHTML = allOptions.map((opt, i) => `
        <button class="quiz-opt-btn" data-correct="${opt.isCorrect}" onclick="App.handleQuizAnswer(this, ${opt.isCorrect})">
          <span>${opt.text}</span>
          <span class="opt-feedback-icon"></span>
        </button>
      `).join('');
    }

    this.startQuizTimer();
  }

  startQuizTimer() {
    this.quizTimeLeft = 15;
    const timerEl = document.getElementById('quiz-timer');
    if (timerEl) {
      timerEl.textContent = this.quizTimeLeft;
      timerEl.className = 'timer-circle';
    }

    this.quizTimer = setInterval(() => {
      this.quizTimeLeft--;
      if (timerEl) {
        timerEl.textContent = this.quizTimeLeft;
        if (this.quizTimeLeft <= 5) {
          timerEl.className = 'timer-circle danger';
        } else if (this.quizTimeLeft <= 8) {
          timerEl.className = 'timer-circle warning';
        }
      }

      if (this.quizTimeLeft <= 0) {
        clearInterval(this.quizTimer);
        this.handleQuizTimeout();
      }
    }, 1000);
  }

  handleQuizAnswer(btnElement, isCorrect) {
    if (this.quizAnswered) return;
    this.quizAnswered = true;
    clearInterval(this.quizTimer);

    const buttons = document.querySelectorAll('.quiz-opt-btn');
    buttons.forEach(btn => {
      btn.disabled = true;
      if (btn.getAttribute('data-correct') === 'true') {
        btn.classList.add('correct');
        const icon = btn.querySelector('.opt-feedback-icon');
        if (icon) icon.textContent = '✓';
      }
    });

    const currentQ = this.quizQuestions[this.quizCurrentIndex];

    if (isCorrect) {
      Sound.playCorrect();
      btnElement.classList.add('correct');
      this.quizStreak++;
      if (this.quizStreak > this.quizMaxStreak) this.quizMaxStreak = this.quizStreak;

      const streakMultiplier = Math.min(1 + (this.quizStreak * 0.2), 2.5);
      const points = Math.round((100 + (this.quizTimeLeft * 10)) * streakMultiplier);
      this.quizScore += points;
      this.addXP(20);
    } else {
      Sound.playWrong();
      btnElement.classList.add('wrong');
      const icon = btnElement.querySelector('.opt-feedback-icon');
      if (icon) icon.textContent = '✗';
      this.quizStreak = 0;
    }

    const streakEl = document.getElementById('quiz-streak');
    if (streakEl) streakEl.textContent = this.quizStreak;

    // Show Explanation
    const expBox = document.getElementById('quiz-explanation-box');
    const expText = document.getElementById('quiz-explanation-text');
    const expExample = document.getElementById('quiz-example-text');
    if (expBox && expText && expExample) {
      expText.textContent = `${currentQ.term}: ${currentQ.definitionEn}`;
      expExample.textContent = `ตัวอย่าง: "${currentQ.example}"`;
      expBox.classList.add('show');
    }

    const nextBtn = document.getElementById('quiz-next-btn');
    if (nextBtn) nextBtn.style.display = 'inline-flex';
  }

  handleQuizTimeout() {
    if (this.quizAnswered) return;
    this.quizAnswered = true;
    Sound.playWrong();

    const buttons = document.querySelectorAll('.quiz-opt-btn');
    buttons.forEach(btn => {
      btn.disabled = true;
      if (btn.getAttribute('data-correct') === 'true') {
        btn.classList.add('correct');
      }
    });

    this.quizStreak = 0;
    const streakEl = document.getElementById('quiz-streak');
    if (streakEl) streakEl.textContent = '0';

    const currentQ = this.quizQuestions[this.quizCurrentIndex];
    const expBox = document.getElementById('quiz-explanation-box');
    const expText = document.getElementById('quiz-explanation-text');
    const expExample = document.getElementById('quiz-example-text');
    if (expBox && expText && expExample) {
      expText.textContent = `หมดเวลา! ${currentQ.term}: ${currentQ.definitionEn}`;
      expExample.textContent = `ตัวอย่าง: "${currentQ.example}"`;
      expBox.classList.add('show');
    }

    const nextBtn = document.getElementById('quiz-next-btn');
    if (nextBtn) nextBtn.style.display = 'inline-flex';
  }

  useLifeline5050() {
    if (this.lifeline5050Used || this.quizAnswered) return;
    this.lifeline5050Used = true;
    Sound.playClick();
    const btn5050 = document.getElementById('btn-lifeline-5050');
    if (btn5050) btn5050.disabled = true;

    const wrongButtons = Array.from(document.querySelectorAll('.quiz-opt-btn'))
      .filter(btn => btn.getAttribute('data-correct') !== 'true');

    this.shuffleArray(wrongButtons).slice(0, 2).forEach(btn => {
      btn.classList.add('faded');
      btn.disabled = true;
    });
  }

  useLifelineTime() {
    if (this.lifelineTimeUsed || this.quizAnswered) return;
    this.lifelineTimeUsed = true;
    Sound.playClick();
    const btnTime = document.getElementById('btn-lifeline-time');
    if (btnTime) btnTime.disabled = true;

    this.quizTimeLeft += 10;
    const timerEl = document.getElementById('quiz-timer');
    if (timerEl) timerEl.textContent = this.quizTimeLeft;
  }

  nextQuizQuestion() {
    Sound.playClick();
    this.quizCurrentIndex++;
    if (this.quizCurrentIndex < this.quizQuestions.length) {
      this.renderQuizQuestion();
    } else {
      this.finishQuiz();
    }
  }

  finishQuiz() {
    clearInterval(this.quizTimer);
    const correctCount = Math.round(this.quizScore / 100);
    const accuracy = Math.min(Math.round((correctCount / this.quizQuestions.length) * 100), 100);
    this.showResultsScreen({
      title: accuracy >= 80 ? "ยอดเยี่ยมระดับเทพ! 🏆" : "ทำได้ดีมาก! 🎉",
      subtitle: `คุณตอบถูกไปแล้ว ${accuracy}% ของควิซ`,
      score: this.quizScore,
      accuracy: `${accuracy}%`,
      maxStreak: `${this.quizMaxStreak} 🔥`,
      earnedXP: `+${Math.round(this.quizScore / 5)} ⭐`
    });
  }

  // --- MODE 2: MEMORY MATCH ---
  startMemory() {
    this.currentGameMode = 'memory';
    this.showView('memory');
    clearInterval(this.memoryTimerInterval);

    this.memoryMatchedCount = 0;
    this.memoryMoves = 0;
    this.memorySeconds = 0;
    this.memoryFlippedCards = [];

    const movesEl = document.getElementById('memory-moves');
    const timerEl = document.getElementById('memory-timer');
    const matchesEl = document.getElementById('memory-matches');
    if (movesEl) movesEl.textContent = '0';
    if (timerEl) timerEl.textContent = '00:00';
    if (matchesEl) matchesEl.textContent = '0';

    // Pick 6 random vocab items
    const selectedVocab = this.shuffleArray([...VOCAB_DATABASE]).slice(0, 6);
    
    // Create card pairs (English Term + Thai Definition)
    const cards = [];
    selectedVocab.forEach(item => {
      cards.push({
        id: item.id,
        type: 'term',
        content: item.term,
        sub: item.phonetic || '',
        matched: false
      });
      cards.push({
        id: item.id,
        type: 'def',
        content: item.definitionTh,
        sub: 'ความหมาย',
        matched: false
      });
    });

    this.memoryCards = this.shuffleArray(cards);
    this.renderMemoryGrid();
    this.startMemoryTimer();
  }

  startMemoryTimer() {
    this.memoryTimerInterval = setInterval(() => {
      this.memorySeconds++;
      const mins = String(Math.floor(this.memorySeconds / 60)).padStart(2, '0');
      const secs = String(this.memorySeconds % 60).padStart(2, '0');
      const timerEl = document.getElementById('memory-timer');
      if (timerEl) timerEl.textContent = `${mins}:${secs}`;
    }, 1000);
  }

  renderMemoryGrid() {
    const grid = document.getElementById('memory-grid-container');
    if (!grid) return;

    grid.innerHTML = this.memoryCards.map((card, idx) => `
      <div class="memory-card" id="mem-card-${idx}" onclick="App.handleMemoryCardClick(${idx})">
        <div class="memory-card-face memory-card-front">
          <span>⚡</span>
        </div>
        <div class="memory-card-face memory-card-back">
          <span style="font-size: ${card.type === 'term' ? '1.1rem' : '0.85rem'}; font-weight: 700;">
            ${card.content}
          </span>
          <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 500;">
            ${card.sub}
          </span>
        </div>
      </div>
    `).join('');
  }

  handleMemoryCardClick(idx) {
    const card = this.memoryCards[idx];
    const cardEl = document.getElementById(`mem-card-${idx}`);

    if (card.matched || this.memoryFlippedCards.length >= 2 || this.memoryFlippedCards.some(c => c.idx === idx)) {
      return;
    }

    Sound.playFlip();
    cardEl.classList.add('flipped');
    this.memoryFlippedCards.push({ idx, card });

    if (this.memoryFlippedCards.length === 2) {
      this.memoryMoves++;
      const movesEl = document.getElementById('memory-moves');
      if (movesEl) movesEl.textContent = this.memoryMoves;

      const [first, second] = this.memoryFlippedCards;

      if (first.card.id === second.card.id && first.card.type !== second.card.type) {
        // Matched!
        setTimeout(() => {
          Sound.playMatch();
          document.getElementById(`mem-card-${first.idx}`).classList.add('matched');
          document.getElementById(`mem-card-${second.idx}`).classList.add('matched');
          first.card.matched = true;
          second.card.matched = true;
          this.memoryMatchedCount++;
          const matchesEl = document.getElementById('memory-matches');
          if (matchesEl) matchesEl.textContent = this.memoryMatchedCount;

          this.memoryFlippedCards = [];

          if (this.memoryMatchedCount === 6) {
            this.finishMemory();
          }
        }, 500);
      } else {
        // Not matched
        setTimeout(() => {
          document.getElementById(`mem-card-${first.idx}`).classList.remove('flipped');
          document.getElementById(`mem-card-${second.idx}`).classList.remove('flipped');
          this.memoryFlippedCards = [];
        }, 1100);
      }
    }
  }

  finishMemory() {
    clearInterval(this.memoryTimerInterval);
    const score = Math.max(1000 - (this.memoryMoves * 20) - (this.memorySeconds * 5), 200);
    this.addXP(100);
    this.showResultsScreen({
      title: "ความจำยอดเยี่ยม! 🎴",
      subtitle: `จับคู่สำเร็จครบ 6 คู่ ในเวลา ${this.memorySeconds} วินาที`,
      score: score,
      accuracy: `${Math.round((6 / this.memoryMoves) * 100)}%`,
      maxStreak: "6 คู่",
      earnedXP: "+100 ⭐"
    });
  }

  // --- MODE 3: WORD SCRAMBLE ---
  startScramble() {
    this.currentGameMode = 'scramble';
    this.showView('scramble');
    // Filter words with 4 to 12 alphanumeric characters
    this.scrambleQuestions = this.shuffleArray(
      VOCAB_DATABASE.filter(item => item.term.length <= 14 && !item.term.includes('/'))
    ).slice(0, 5);
    this.scrambleIndex = 0;
    this.renderScrambleQuestion();
  }

  renderScrambleQuestion() {
    const currentQ = this.scrambleQuestions[this.scrambleIndex];
    if (!currentQ) {
      this.showResultsScreen({
        title: "สะกดคำศัพท์ครบแล้ว! 🧩",
        subtitle: "ทักษะการสะกดศัพท์ธุรกิจดิจิทัลยอดเยี่ยมมาก",
        score: 500,
        accuracy: "100%",
        maxStreak: "5 ข้อ",
        earnedXP: "+80 ⭐"
      });
      return;
    }

    const cat = VOCAB_CATEGORIES[currentQ.category];
    const catTag = document.getElementById('scramble-category-tag');
    const defTh = document.getElementById('scramble-definition-th');
    const nextBtn = document.getElementById('scramble-next-btn');

    if (catTag) catTag.textContent = `${cat.icon} ${cat.nameTh}`;
    if (defTh) defTh.textContent = currentQ.definitionTh;
    if (nextBtn) nextBtn.style.display = 'none';

    this.scrambleCurrentWord = currentQ.term.toUpperCase().replace(/[^A-Z0-9]/g, '');
    this.scrambleUserInput = [];

    // Create scrambled letters
    const letters = this.scrambleCurrentWord.split('');
    this.scramblePoolLetters = this.shuffleArray(letters.map((char, id) => ({ id, char, used: false })));

    this.renderScrambleUI();
  }

  renderScrambleUI() {
    // Render answer slots
    const slotsContainer = document.getElementById('scramble-slots-container');
    if (slotsContainer) {
      slotsContainer.innerHTML = Array.from({ length: this.scrambleCurrentWord.length }).map((_, i) => {
        const val = this.scrambleUserInput[i] ? this.scrambleUserInput[i].char : '';
        return `<div class="scramble-slot">${val}</div>`;
      }).join('');
    }

    // Render letter pool
    const lettersContainer = document.getElementById('scramble-letters-container');
    if (lettersContainer) {
      lettersContainer.innerHTML = this.scramblePoolLetters.map(item => `
        <button class="letter-btn" ${item.used ? 'disabled' : ''} onclick="App.pickScrambleLetter(${item.id})">
          ${item.char}
        </button>
      `).join('');
    }
  }

  pickScrambleLetter(id) {
    const item = this.scramblePoolLetters.find(l => l.id === id);
    if (!item || item.used) return;

    Sound.playClick();
    item.used = true;
    this.scrambleUserInput.push(item);
    this.renderScrambleUI();

    // Check if word completed
    if (this.scrambleUserInput.length === this.scrambleCurrentWord.length) {
      const formedWord = this.scrambleUserInput.map(i => i.char).join('');
      if (formedWord === this.scrambleCurrentWord) {
        Sound.playCorrect();
        this.addXP(25);
        const nextBtn = document.getElementById('scramble-next-btn');
        if (nextBtn) nextBtn.style.display = 'inline-flex';
      } else {
        Sound.playWrong();
      }
    }
  }

  resetScrambleCurrent() {
    Sound.playClick();
    this.scrambleUserInput = [];
    this.scramblePoolLetters.forEach(l => l.used = false);
    this.renderScrambleUI();
  }

  scrambleGiveHint() {
    const nextSlotIdx = this.scrambleUserInput.length;
    if (nextSlotIdx >= this.scrambleCurrentWord.length) return;

    const targetChar = this.scrambleCurrentWord[nextSlotIdx];
    const availableItem = this.scramblePoolLetters.find(l => !l.used && l.char === targetChar);
    if (availableItem) {
      this.pickScrambleLetter(availableItem.id);
    }
  }

  nextScramble() {
    Sound.playClick();
    this.scrambleIndex++;
    this.renderScrambleQuestion();
  }

  // --- MODE 4: FLASHCARDS ---
  startFlashcards() {
    this.currentGameMode = 'flashcards';
    this.showView('flashcards');
    this.flashcardIndex = 0;
    this.filterFlashcards();
  }

  filterFlashcards() {
    const select = document.getElementById('flashcard-category-select');
    const selectedCat = select ? select.value : 'all';

    if (selectedCat === 'all') {
      this.flashcardsList = [...VOCAB_DATABASE];
    } else {
      this.flashcardsList = VOCAB_DATABASE.filter(item => item.category === selectedCat);
    }

    this.flashcardIndex = 0;
    this.renderCurrentFlashcard();
  }

  renderCurrentFlashcard() {
    this.flashcardIsFlipped = false;
    const cardEl = document.getElementById('main-flashcard');
    if (cardEl) cardEl.classList.remove('is-flipped');

    const currentItem = this.flashcardsList[this.flashcardIndex];
    if (!currentItem) return;

    const cat = VOCAB_CATEGORIES[currentItem.category];
    const currentIdxEl = document.getElementById('fc-current-idx');
    const totalCountEl = document.getElementById('fc-total-count');
    const catBadgeEl = document.getElementById('fc-category-badge');
    const termEl = document.getElementById('fc-term');
    const phoneticEl = document.getElementById('fc-phonetic');
    const defThEl = document.getElementById('fc-def-th');
    const defEnEl = document.getElementById('fc-def-en');
    const exampleEl = document.getElementById('fc-example');

    if (currentIdxEl) currentIdxEl.textContent = this.flashcardIndex + 1;
    if (totalCountEl) totalCountEl.textContent = this.flashcardsList.length;
    if (catBadgeEl) catBadgeEl.innerHTML = `${cat.icon} ${cat.nameTh}`;
    if (termEl) termEl.textContent = currentItem.term;
    if (phoneticEl) phoneticEl.textContent = currentItem.phonetic || '';
    if (defThEl) defThEl.textContent = currentItem.definitionTh;
    if (defEnEl) defEnEl.textContent = currentItem.definitionEn;
    if (exampleEl) exampleEl.textContent = `Example: "${currentItem.example}"`;
  }

  flipFlashcard() {
    Sound.playFlip();
    this.flashcardIsFlipped = !this.flashcardIsFlipped;
    const cardEl = document.getElementById('main-flashcard');
    if (cardEl) {
      cardEl.classList.toggle('is-flipped', this.flashcardIsFlipped);
    }
  }

  nextFlashcard() {
    Sound.playClick();
    if (this.flashcardIndex < this.flashcardsList.length - 1) {
      this.flashcardIndex++;
      this.renderCurrentFlashcard();
      this.addXP(5);
    }
  }

  prevFlashcard() {
    Sound.playClick();
    if (this.flashcardIndex > 0) {
      this.flashcardIndex--;
      this.renderCurrentFlashcard();
    }
  }

  speakCurrentFlashcard() {
    const currentItem = this.flashcardsList[this.flashcardIndex];
    if (currentItem) {
      Sound.speak(currentItem.term);
    }
  }

  // --- MODE 5: GLOSSARY ---
  showGlossary() {
    this.showView('glossary');
    this.renderGlossary();
  }

  showGlossaryWithCategory(catId) {
    this.showView('glossary');
    const filter = document.getElementById('glossary-category-filter');
    if (filter) filter.value = catId;
    this.renderGlossary();
  }

  renderGlossary() {
    const searchInput = document.getElementById('glossary-search');
    const catFilter = document.getElementById('glossary-category-filter');
    const container = document.getElementById('glossary-cards-container');
    if (!container) return;

    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const cat = catFilter ? catFilter.value : 'all';

    const filtered = VOCAB_DATABASE.filter(item => {
      const matchCat = cat === 'all' || item.category === cat;
      const matchQuery = !query || 
        item.term.toLowerCase().includes(query) ||
        (item.fullTerm && item.fullTerm.toLowerCase().includes(query)) ||
        item.definitionTh.toLowerCase().includes(query) ||
        item.definitionEn.toLowerCase().includes(query);
      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 3rem; color: var(--text-dim);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
          <p>ไม่พบคำศัพท์ที่ตรงกับการค้นหา</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(item => {
      const c = VOCAB_CATEGORIES[item.category];
      return `
        <div class="vocab-card">
          <div class="vocab-header">
            <div class="vocab-term-group">
              <span class="vocab-term">${item.term}</span>
              ${item.fullTerm ? `<span style="font-size: 0.85rem; color: var(--text-muted);">(${item.fullTerm})</span>` : ''}
              <button class="speak-btn" style="width: 28px; height: 28px; font-size: 0.8rem;" onclick="Sound.speak('${item.term}')" title="ออกเสียง">
                🔊
              </button>
            </div>
            <span class="badge-tag" style="margin-bottom: 0;">${c.icon} ${c.nameTh}</span>
          </div>
          <div class="quiz-phonetic" style="margin-bottom: 0.5rem;">${item.phonetic || ''}</div>
          <div class="vocab-def-th">${item.definitionTh}</div>
          <div class="vocab-def-en">${item.definitionEn}</div>
          <div class="vocab-example">📝 ตัวอย่าง: "${item.example}"</div>
        </div>
      `;
    }).join('');
  }

  // --- RESULTS SCREEN ---
  showResultsScreen({ title, subtitle, score, accuracy, maxStreak, earnedXP }) {
    Sound.playVictory();
    this.triggerConfetti();

    const titleEl = document.getElementById('results-title');
    const subtitleEl = document.getElementById('results-subtitle');
    const scoreEl = document.getElementById('results-score');
    const accEl = document.getElementById('results-accuracy');
    const streakEl = document.getElementById('results-max-streak');
    const xpEl = document.getElementById('results-earned-xp');

    if (titleEl) titleEl.textContent = title;
    if (subtitleEl) subtitleEl.textContent = subtitle;
    if (scoreEl) scoreEl.textContent = score.toLocaleString();
    if (accEl) accEl.textContent = accuracy;
    if (streakEl) streakEl.textContent = maxStreak;
    if (xpEl) xpEl.textContent = earnedXP;

    this.showView('results');
  }

  replayCurrentGame() {
    if (this.currentGameMode === 'quiz') this.startQuiz();
    else if (this.currentGameMode === 'memory') this.startMemory();
    else if (this.currentGameMode === 'scramble') this.startScramble();
    else this.showView('home');
  }

  triggerConfetti() {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }

  // Helper
  shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}

// Global App Instance
const App = new VocabGameApp();
