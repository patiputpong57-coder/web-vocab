// Web Audio API Sound Synthesizer for high-fidelity interactive sound effects
class SoundController {
  constructor() {
    this.audioCtx = null;
    this.enabled = true;
    this.initContext = this.initContext.bind(this);
  }

  initContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  toggleSound() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.1, delay = 0) {
    if (!this.enabled) return;
    this.initContext();
    if (!this.audioCtx) return;

    setTimeout(() => {
      try {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

        gain.gain.setValueAtTime(gainVal, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start();
        osc.stop(this.audioCtx.currentTime + duration);
      } catch (e) {
        console.warn("Audio playback error:", e);
      }
    }, delay * 1000);
  }

  playClick() {
    this.playTone(800, 'sine', 0.05, 0.05);
  }

  playCorrect() {
    if (!this.enabled) return;
    this.playTone(523.25, 'sine', 0.12, 0.15, 0);       // C5
    this.playTone(659.25, 'sine', 0.12, 0.15, 0.08);    // E5
    this.playTone(783.99, 'triangle', 0.25, 0.2, 0.16); // G5
    this.playTone(1046.50, 'triangle', 0.35, 0.25, 0.24); // C6
  }

  playWrong() {
    if (!this.enabled) return;
    this.playTone(220, 'sawtooth', 0.18, 0.12, 0);     // A3
    this.playTone(196, 'sawtooth', 0.3, 0.15, 0.12);   // G3
  }

  playFlip() {
    this.playTone(440, 'sine', 0.08, 0.06);
  }

  playMatch() {
    if (!this.enabled) return;
    this.playTone(587.33, 'triangle', 0.15, 0.15, 0);     // D5
    this.playTone(880.00, 'triangle', 0.25, 0.2, 0.1);    // A5
  }

  playVictory() {
    if (!this.enabled) return;
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    notes.forEach((freq, idx) => {
      this.playTone(freq, 'triangle', 0.3, 0.2, idx * 0.12);
    });
  }

  speak(text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  }
}

const Sound = new SoundController();
document.addEventListener('click', () => Sound.initContext(), { once: true });
document.addEventListener('keydown', () => Sound.initContext(), { once: true });
