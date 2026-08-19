// Digital Business Vocabulary Data
const VOCAB_CATEGORIES = {
  marketing: {
    id: "marketing",
    name: "E-Commerce & Marketing",
    nameTh: "การตลาดดิจิทัล & อีคอมเมิร์ซ",
    icon: "📈",
    color: "#00f2fe",
    gradient: "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)"
  },
  fintech: {
    id: "fintech",
    name: "FinTech & Payments",
    nameTh: "การเงินดิจิทัล & บล็อกเชน",
    icon: "💳",
    color: "#a855f7",
    gradient: "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)"
  },
  data_ai: {
    id: "data_ai",
    name: "Data & AI Analytics",
    nameTh: "ข้อมูล & ปัญญาประดิษฐ์",
    icon: "🤖",
    color: "#3b82f6",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)"
  },
  startup: {
    id: "startup",
    name: "Startup & Strategy",
    nameTh: "สตาร์ทอัพ & กลยุทธ์ธุรกิจ",
    icon: "🚀",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)"
  },
  security: {
    id: "security",
    name: "Cybersecurity & Cloud",
    nameTh: "ความปลอดภัยไซเบอร์ & คลาวด์",
    icon: "🔒",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)"
  }
};

const VOCAB_DATABASE = [
  // --- E-Commerce & Marketing ---
  {
    id: 1,
    term: "Conversion Rate",
    phonetic: "/kənˈvɜːr.ʒən reɪt/",
    category: "marketing",
    definitionTh: "อัตราส่วนร้อยละของผู้เข้าชมเว็บไซต์ที่เปลี่ยนมาเป็นลูกค้าหรือทำตามเป้าหมาย",
    definitionEn: "The percentage of website visitors who complete a desired action or purchase.",
    example: "Optimizing our checkout page boosted the conversion rate by 15%."
  },
  {
    id: 2,
    term: "SEO",
    fullTerm: "Search Engine Optimization",
    phonetic: "/ˌes.iːˈoʊ/",
    category: "marketing",
    definitionTh: "การปรับแต่งเว็บไซต์เพื่อให้ติดอันดับต้นๆ บนหน้าค้นหาของ Search Engine ตามธรรมชาติ",
    definitionEn: "The process of improving website visibility in organic search engine results.",
    example: "Investing in content SEO helped us generate organic traffic without paid ads."
  },
  {
    id: 3,
    term: "CTR",
    fullTerm: "Click-Through Rate",
    phonetic: "/ˌsiː.tiːˈɑːr/",
    category: "marketing",
    definitionTh: "อัตราส่วนคลิกต่อการมองเห็นโฆษณา (จำนวนคลิกหารด้วยจำนวนครั้งที่โฆษณาแสดง)",
    definitionEn: "The ratio of users who click on a specific link to the number of total users who view a page or ad.",
    example: "A catchy headline directly increases the CTR of digital banner ads."
  },
  {
    id: 4,
    term: "CAC",
    fullTerm: "Customer Acquisition Cost",
    phonetic: "/ˌsiː.eɪˈsiː/",
    category: "marketing",
    definitionTh: "ต้นทุนเฉลี่ยที่ใช้ในการหาลูกค้าใหม่ 1 ราย (รวมงบการตลาดและการขาย)",
    definitionEn: "The total cost of sales and marketing efforts needed to acquire a new customer.",
    example: "Our CAC must remain lower than customer lifetime value for sustainable growth."
  },
  {
    id: 5,
    term: "LTV",
    fullTerm: "Customer Lifetime Value",
    phonetic: "/ˌel.tiːˈviː/",
    category: "marketing",
    definitionTh: "มูลค่ารวมโดยประมาณที่ลูกค้า 1 รายจะสร้างรายได้ให้กับธุรกิจตลอดช่วงเวลาที่เป็นลูกค้า",
    definitionEn: "The total revenue a business can reasonably expect from a single customer account throughout the relationship.",
    example: "Subscription models thrive when customer LTV is significantly higher than CAC."
  },
  {
    id: 6,
    term: "Omnichannel",
    phonetic: "/ˌɑːm.nɪˈtʃæn.əl/",
    category: "marketing",
    definitionTh: "การเชื่อมโยงช่องทางการขายและการบริการทั้งออนไลน์และออฟไลน์เข้าด้วยกันอย่างไร้รอยต่อ",
    definitionEn: "An integrated approach that provides customers a unified shopping experience across all online and physical channels.",
    example: "The brand uses an omnichannel strategy allowing customers to buy online and pick up in-store."
  },
  {
    id: 7,
    term: "Retargeting",
    phonetic: "/ˌriːˈtɑːr.ɡɪt.ɪŋ/",
    category: "marketing",
    definitionTh: "การยิงโฆษณาซ้ำไปยังผู้ใช้งานที่เคยเข้าชมเว็บไซต์หรือสนใจสินค้ามาก่อน",
    definitionEn: "A form of online advertising that targets users who have previously visited your website or interacted with your brand.",
    example: "Retargeting campaigns help remind cart-abandoners to complete their orders."
  },
  {
    id: 8,
    term: "A/B Testing",
    phonetic: "/ˈeɪ ˈbiː ˌtes.tɪŋ/",
    category: "marketing",
    definitionTh: "การทดสอบเปรียบเทียบชิ้นงาน 2 รูปแบบเพื่อดูว่าแบบใดให้ผลลัพธ์ที่ดีกว่า",
    definitionEn: "A method of comparing two versions of a webpage or app against each other to determine which one performs better.",
    example: "We ran A/B testing on the CTA button colors to see which generated more sign-ups."
  },
  {
    id: 9,
    term: "Dropshipping",
    phonetic: "/ˈdrɑːpˌʃɪp.ɪŋ/",
    category: "marketing",
    definitionTh: "โมเดลธุรกิจค้าปลีกที่ผู้ขายไม่ต้องสต็อกสินค้า แต่ส่งคำสั่งซื้อให้ซัพพลายเออร์จัดส่งตรงถึงลูกค้า",
    definitionEn: "A retail fulfillment method where a store doesn't keep the products it sells in stock; third-party suppliers ship them.",
    example: "Dropshipping allows new entrepreneurs to start an online store with minimal upfront capital."
  },
  {
    id: 10,
    term: "Influencer Marketing",
    phonetic: "/ˈɪn.flu.ən.sər ˈmɑːr.kɪ.tɪŋ/",
    category: "marketing",
    definitionTh: "การทำการตลาดโดยร่วมมือกับผู้มีอิทธิพลบนโลกออนไลน์เพื่อสร้างความน่าเชื่อถือและยอดขาย",
    definitionEn: "A marketing strategy that focuses on using key leaders or creators to drive brand message to a larger market.",
    example: "Micro-influencer marketing often yields higher engagement rates than celebrity endorsements."
  },
  {
    id: 11,
    term: "Sales Funnel",
    phonetic: "/seɪlz ˈfʌn.əl/",
    category: "marketing",
    definitionTh: "เส้นทางของลูกค้าตั้งแต่เริ่มรู้จักแบรนด์ สนใจ พิจารณา ไปจนถึงการตัดสินใจซื้อ",
    definitionEn: "The step-by-step visual representation of the journey a customer takes from awareness to making a purchase.",
    example: "Email marketing automations guide potential leads smoothly through each stage of the sales funnel."
  },
  {
    id: 12,
    term: "Churn Rate",
    phonetic: "/tʃɜːrn reɪt/",
    category: "marketing",
    definitionTh: "อัตราการสูญเสียหรือยกเลิกการใช้บริการของลูกค้าในช่วงระยะเวลาหนึ่ง",
    definitionEn: "The annual or monthly percentage rate at which customers stop subscribing to a service.",
    example: "Improving customer onboarding helped reduce our monthly churn rate to under 2%."
  },

  // --- FinTech & Payments ---
  {
    id: 13,
    term: "Payment Gateway",
    phonetic: "/ˈpeɪ.mənt ˈɡeɪt.weɪ/",
    category: "fintech",
    definitionTh: "ระบบตัวกลางที่ทำหน้าที่ประมวลผลและเชื่อมต่อการชำระเงินออนไลน์ระหว่างร้านค้ากับธนาคาร",
    definitionEn: "A merchant service provided by an e-commerce application service provider that authorizes card or direct payments.",
    example: "Stripe and PayPal are popular payment gateways for international transactions."
  },
  {
    id: 14,
    term: "Blockchain",
    phonetic: "/ˈblɑːk.tʃeɪn/",
    category: "fintech",
    definitionTh: "เทคโนโลยีการเก็บข้อมูลแบบกระจายศูนย์ (Decentralized) ที่ปลอดภัยและไม่สามารถแก้ไขย้อนหลังได้",
    definitionEn: "A decentralized, distributed digital ledger that records transactions across many computers securely.",
    example: "Supply chains use blockchain to guarantee the authenticity and provenance of luxury goods."
  },
  {
    id: 15,
    term: "Smart Contract",
    phonetic: "/smɑːrt ˈkɑːn.trækt/",
    category: "fintech",
    definitionTh: "สัญญาอัจฉริยะในรูปแบบโค้ดที่สามารถดำเนินการได้เองอัตโนมัติเมื่อตรงตามเงื่อนไขที่กำหนด",
    definitionEn: "Self-executing contracts with the terms of agreement directly written into lines of code on a blockchain.",
    example: "Smart contracts automate payouts to freelance contractors immediately upon project delivery."
  },
  {
    id: 16,
    term: "KYC",
    fullTerm: "Know Your Customer",
    phonetic: "/ˌkeɪ.waɪˈsiː/",
    category: "fintech",
    definitionTh: "กระบวนการตรวจสอบและยืนยันตัวตนของลูกค้าเพื่อป้องกันการฉ้อโกงและการฟอกเงิน",
    definitionEn: "The mandatory process of identifying and verifying the identity of a client when opening an account.",
    example: "Digital banking apps require facial recognition and ID scan as part of strict KYC regulations."
  },
  {
    id: 17,
    term: "P2P Lending",
    fullTerm: "Peer-to-Peer Lending",
    phonetic: "/ˌpiː.tuːˈpiː ˈlen.dɪŋ/",
    category: "fintech",
    definitionTh: "การกู้ยืมเงินระหว่างบุคคลกับบุคคลโดยตรงผ่านแพลตฟอร์มดิจิทัลโดยไม่ผ่านสถาบันการเงินดั้งเดิม",
    definitionEn: "A form of direct financing that allows individuals to borrow and lend money to each other without financial institution intermediaries.",
    example: "P2P lending platforms provide small business owners with alternative funding sources."
  },
  {
    id: 18,
    term: "Digital Wallet",
    phonetic: "/ˈdɪdʒ.ə.t̬əl ˈwɑː.lɪt/",
    category: "fintech",
    definitionTh: "กระเป๋าเงินอิเล็กทรอนิกส์สำหรับจัดเก็บเงิน ข้อมูลบัตรเครดิต และทำธุรกรรมผ่านมือถือ",
    definitionEn: "A financial account that allows users to store funds, make digital payments, and track payment histories on devices.",
    example: "Apple Pay and TrueMoney Wallet allow quick contactless checkout in retail stores."
  },
  {
    id: 19,
    term: "DeFi",
    fullTerm: "Decentralized Finance",
    phonetic: "/ˈdiː.faɪ/",
    category: "fintech",
    definitionTh: "ระบบการเงินแบบกระจายศูนย์บนบล็อกเชนที่ไม่ต้องพึ่งพาตัวกลางทางการเงินเช่นธนาคาร",
    definitionEn: "An umbrella term for financial services built on public blockchain networks, bypassing traditional intermediaries.",
    example: "DeFi protocols enable lending and borrowing via automated liquidity pools."
  },
  {
    id: 20,
    term: "Tokenomics",
    phonetic: "/ˌtoʊ.kəˈnɑː.mɪks/",
    category: "fintech",
    definitionTh: "เศรษฐศาสตร์ของโทเคนดิจิทัล รวมถึงอุปสงค์ อุปทาน การจัดสรร และการสร้างแรงจูงใจในการถือครอง",
    definitionEn: "The study and design of the economics, supply, distribution, and incentive mechanisms of a cryptocurrency token.",
    example: "A sustainable tokenomics design prevents hyper-inflation in Web3 ecosystems."
  },
  {
    id: 21,
    term: "Neobank",
    phonetic: "/ˈniː.oʊ.bæŋk/",
    category: "fintech",
    definitionTh: "ธนาคารดิจิทัล 100% ที่ให้บริการผ่านแอปพลิเคชันโดยไม่มีสาขาทางกายภาพ",
    definitionEn: "A type of direct bank that operates exclusively online without traditional physical branch networks.",
    example: "Neobanks attract digital natives through zero fees and intuitive financial tracking features."
  },
  {
    id: 22,
    term: "Cross-Border Payment",
    phonetic: "/ˌkrɑːsˈbɔːr.dər ˈpeɪ.mənt/",
    category: "fintech",
    definitionTh: "การทำธุรกรรมการเงินและการโอนเงินระหว่างผู้ส่งและผู้รับที่อยู่ต่างประเทศกัน",
    definitionEn: "Financial transactions where the payer and the recipient are based in different countries.",
    example: "FinTech apps are drastically cutting transaction fees on cross-border payments."
  },

  // --- Data & AI Analytics ---
  {
    id: 23,
    term: "Big Data",
    phonetic: "/bɪɡ ˈdeɪ.t̬ə/",
    category: "data_ai",
    definitionTh: "ชุดข้อมูลขนาดใหญ่และซับซ้อนเกินกว่าที่เครื่องมือประมวลผลข้อมูลทั่วไปจะจัดการได้ (3V: Volume, Velocity, Variety)",
    definitionEn: "Extremely large and complex data sets that cannot be managed by traditional data-processing software.",
    example: "E-commerce giants analyze Big Data to personalize product recommendations in real-time."
  },
  {
    id: 24,
    term: "Machine Learning",
    phonetic: "/məˈʃiːn ˌlɜːr.nɪŋ/",
    category: "data_ai",
    definitionTh: "สาขาของ AI ที่ทำให้คอมพิวเตอร์สามารถเรียนรู้และพัฒนาความแม่นยำจากข้อมูลได้ด้วยตนเอง",
    definitionEn: "A branch of artificial intelligence focused on building applications that learn from data and improve over time without being explicitly programmed.",
    example: "Machine learning algorithms detect fraudulent transactions within milliseconds."
  },
  {
    id: 25,
    term: "Predictive Analytics",
    phonetic: "/prɪˈdɪk.tɪv æn.əˈlɪt̬.ɪks/",
    category: "data_ai",
    definitionTh: "การนำข้อมูลในอดีต สถิติ และ AI มาวิเคราะห์เพื่อคาดการณ์แนวโน้มและพฤติกรรมในอนาคต",
    definitionEn: "The practice of using historical data, statistical algorithms, and ML techniques to identify the likelihood of future outcomes.",
    example: "Retailers use predictive analytics to forecast seasonal inventory demands."
  },
  {
    id: 26,
    term: "Business Intelligence",
    phonetic: "/ˈbɪz.nɪs ɪnˈtel.ə.dʒəns/",
    category: "data_ai",
    definitionTh: "กลยุทธ์และเทคโนโลยีที่ใช้ในการวิเคราะห์ข้อมูลธุรกิจเพื่อช่วยในการตัดสินใจเชิงกลยุทธ์",
    definitionEn: "Strategies and technologies used by enterprises for the data analysis and visualization of business information.",
    example: "Interactive BI dashboards allow executives to monitor sales KPIs in real time."
  },
  {
    id: 27,
    term: "Cloud Computing",
    phonetic: "/klaʊd kəmˈpjuː.t̬ɪŋ/",
    category: "data_ai",
    definitionTh: "การให้บริการทรัพยากรคอมพิวเตอร์ (เซิร์ฟเวอร์, สตอเรจ, ฐานข้อมูล) ผ่านระบบอินเทอร์เน็ตตามการใช้งานจริง",
    definitionEn: "The delivery of computing services—including servers, storage, databases, and software—over the cloud (Internet).",
    example: "Migrating to cloud computing eliminated our company's on-premise hardware maintenance costs."
  },
  {
    id: 28,
    term: "Natural Language Processing",
    fullTerm: "NLP",
    phonetic: "/ˈnætʃ.ɚ.əl ˈlæŋ.ɡwɪdʒ ˈprɑː.ses.ɪŋ/",
    category: "data_ai",
    definitionTh: "เทคโนโลยี AI ที่ช่วยให้คอมพิวเตอร์สามารถเข้าใจ ตีความ และประมวลผลภาษามนุษย์ได้",
    definitionEn: "A field of AI enabling computers to understand, interpret, and generate human language naturally.",
    example: "Customer service chatbots use NLP to understand user queries and respond accurately."
  },
  {
    id: 29,
    term: "Data Mining",
    phonetic: "/ˈdeɪ.t̬ə ˌmaɪ.nɪŋ/",
    category: "data_ai",
    definitionTh: "กระบวนการขุดค้นและสกัดหารูปแบบหรือความรู้ที่ซ่อนอยู่ในฐานข้อมูลขนาดใหญ่",
    definitionEn: "The process of uncovering patterns, anomalies, and correlations within large data sets to predict outcomes.",
    example: "Supermarkets use data mining to find which products are frequently bought together."
  },
  {
    id: 30,
    term: "Algorithm",
    phonetic: "/ˈæl.ɡə.rɪ.ðəm/",
    category: "data_ai",
    definitionTh: "ชุดคำสั่งหรือขั้นตอนวิธีการแก้ปัญหาที่เป็นลำดับขั้นตอนชัดเจนที่คอมพิวเตอร์ปฏิบัติตาม",
    definitionEn: "A finite sequence of well-defined instructions or steps typically used to solve a specific problem or perform a computation.",
    example: "The recommendation algorithm on TikTok keeps users engaged with tailored video feeds."
  },
  {
    id: 31,
    term: "Data Lake",
    phonetic: "/ˈdeɪ.t̬ə leɪk/",
    category: "data_ai",
    definitionTh: "แหล่งจัดเก็บข้อมูลรวมขนาดใหญ่ที่สามารถเก็บข้อมูลได้ทั้งแบบมีโครงสร้างและไม่มีโครงสร้าง",
    definitionEn: "A centralized repository that allows you to store all your structured and unstructured data at any scale.",
    example: "Raw user telemetry data is poured directly into the company's data lake for later modeling."
  },
  {
    id: 32,
    term: "Generative AI",
    phonetic: "/ˈdʒen.ər.ə.t̬ɪv ˌeɪˈaɪ/",
    category: "data_ai",
    definitionTh: "ปัญญาประดิษฐ์ที่สามารถสร้างสรรค์เนื้อหาใหม่ๆ ได้ เช่น ข้อความ รูปภาพ โค้ด หรือวิดีโอ",
    definitionEn: "Artificial intelligence systems capable of generating novel text, images, synthetic media, or code based on prompts.",
    example: "Marketing teams use Generative AI to brainstorm campaign copy and product mockups."
  },

  // --- Startup & Strategy ---
  {
    id: 33,
    term: "MVP",
    fullTerm: "Minimum Viable Product",
    phonetic: "/ˌem.viːˈpiː/",
    category: "startup",
    definitionTh: "ผลิตภัณฑ์เวอร์ชันแรกที่มีฟีเจอร์น้อยที่สุดเท่าที่จำเป็นเพื่อใช้ทดสอบกับตลาดจริง",
    definitionEn: "A basic version of a new product that allows a team to collect the maximum amount of validated customer learning with the least effort.",
    example: "We launched our MVP within 4 weeks to test user demand before investing in complex features."
  },
  {
    id: 34,
    term: "Scalability",
    phonetic: "/ˌskeɪ.ləˈbɪl.ə.t̬i/",
    category: "startup",
    definitionTh: "ความสามารถของระบบหรือธุรกิจในการรองรับการเติบโตและยอดผู้ใช้ที่เพิ่มขึ้นอย่างมหาศาลโดยไม่สะดุด",
    definitionEn: "The measure of a system's or business's ability to increase total capacity and handle growing workload seamlessly.",
    example: "Cloud architecture gives digital businesses superior scalability compared to traditional servers."
  },
  {
    id: 35,
    term: "Pivot",
    phonetic: "/ˈpɪv.ət/",
    category: "startup",
    definitionTh: "การเปลี่ยนทิศทางหรือโมเดลธุรกิจหลักอย่างมีกลยุทธ์หลังจากพบว่าแนวทางเดิมไม่ตอบโจทย์ตลาด",
    definitionEn: "A structured course correction designed to test a new fundamental hypothesis about the product, business model, or engine of growth.",
    example: "YouTube started as a video dating site before making a successful pivot to a public video-sharing platform."
  },
  {
    id: 36,
    term: "Bootstrapping",
    phonetic: "/ˈbuːt.stræp.ɪŋ/",
    category: "startup",
    definitionTh: "การสร้างและขยายธุรกิจด้วยเงินทุนตนเองและผลกำไรจากกิจการโดยไม่พึ่งพานักลงทุนภายนอก",
    definitionEn: "Building a company from the ground up using personal savings and current revenue without external venture funding.",
    example: "By bootstrapping, the founders retained 100% equity and full creative freedom."
  },
  {
    id: 37,
    term: "Pitch Deck",
    phonetic: "/pɪtʃ dek/",
    category: "startup",
    definitionTh: "ชุดสไลด์นำเสนอแผนธุรกิจและศักยภาพของโปรเจกต์ที่กระชับเพื่อดึงดูดนักลงทุน",
    definitionEn: "A brief presentation used to provide investors with an overview of your business plan, products, and growth traction.",
    example: "A compelling 10-slide pitch deck was key to securing our seed round investment."
  },
  {
    id: 38,
    term: "Monetization",
    phonetic: "/ˌmɑː.nə.t̬əˈzeɪ.ʃən/",
    category: "startup",
    definitionTh: "กระบวนการแปลงสินค้า บริการ หรือการเข้าชมของผู้ใช้ให้กลายเป็นรายได้ทางการเงิน",
    definitionEn: "The process of converting non-revenue generating assets or visitors into financial revenue.",
    example: "Freemium gaming apps use in-app purchases and ads for successful monetization."
  },
  {
    id: 39,
    term: "Digital Disruption",
    phonetic: "/ˈdɪdʒ.ə.t̬əl dɪsˈrʌp.ʃən/",
    category: "startup",
    definitionTh: "การเปลี่ยนแปลงครั้งใหญ่ในอุตสาหกรรมอันเนื่องมาจากเทคโนโลยีและโมเดลธุรกิจดิจิทัลใหม่ๆ",
    definitionEn: "The transformation that occurs when new digital technologies and business models affect the value proposition of existing goods and services.",
    example: "Streaming platforms caused digital disruption to traditional cable television networks."
  },
  {
    id: 40,
    term: "Venture Capital",
    phonetic: "/ˈven.tʃɚ ˈkæp.ə.t̬əl/",
    category: "startup",
    definitionTh: "เงินทุนร่วมลงทุนจากสถาบันการเงินที่จัดหาให้กับสตาร์ทอัพที่มีศักยภาพการเติบโตสูงเพื่อแลกกับหุ้น",
    definitionEn: "Financing that investors provide to startup companies and small businesses that are believed to have long-term growth potential.",
    example: "Securing Series A venture capital accelerated their expansion into Southeast Asia."
  },
  {
    id: 41,
    term: "Product-Market Fit",
    phonetic: "/ˈprɑː.dʌkt ˈmɑːr.kɪt fɪt/",
    category: "startup",
    definitionTh: "สภาวะที่ผลิตภัณฑ์สามารถตอบโจทย์ความต้องการของกลุ่มเป้าหมายในตลาดได้อย่างแท้จริงและเกิดการบอกต่อ",
    definitionEn: "The degree to which a product satisfies a strong market demand and generates widespread organic adoption.",
    example: "Reaching product-market fit is the number one milestone before scaling marketing budgets."
  },
  {
    id: 42,
    term: "Unicorn",
    phonetic: "/ˈjuː.nə.kɔːrn/",
    category: "startup",
    definitionTh: "บริษัทสตาร์ทอัพที่ยังไม่ได้เข้าตลาดหลักทรัพย์แต่มีมูลค่าประเมินทางธุรกิจเกิน 1,000 ล้านดอลลาร์สหรัฐ",
    definitionEn: "A privately held startup company valued at over $1 billion.",
    example: "Tech startups aspire to achieve unicorn status by disrupting traditional markets."
  },

  // --- Cybersecurity & Cloud ---
  {
    id: 43,
    term: "2FA",
    fullTerm: "Two-Factor Authentication",
    phonetic: "/ˌtuː.fæk.tɚ ɔːˌθen.tɪˈkeɪ.ʃən/",
    category: "security",
    definitionTh: "การยืนยันตัวตนแบบสองขั้นตอนเพื่อเพิ่มความปลอดภัยในการเข้าใช้งานระบบ",
    definitionEn: "A security process in which a user provides two different authentication factors to verify themselves.",
    example: "Enabling 2FA via authenticator apps protects your account even if passwords leak."
  },
  {
    id: 44,
    term: "Phishing",
    phonetic: "/ˈfɪʃ.ɪŋ/",
    category: "security",
    definitionTh: "การหลอกลวงทางอินเทอร์เน็ตโดยปลอมแปลงเป็นบุคคลหรือองค์กรที่น่าเชื่อถือเพื่อขโมยข้อมูลสำคัญ",
    definitionEn: "A fraudulent attempt to obtain sensitive information like usernames, passwords, and card details by disguising as a trustworthy entity.",
    example: "Employee training helps staff spot phishing emails with fake login links."
  },
  {
    id: 45,
    term: "Encryption",
    phonetic: "/ɪnˈkrɪp.ʃən/",
    category: "security",
    definitionTh: "การเข้ารหัสข้อมูลให้อยู่ในรูปที่บุคคลที่ไม่ได้รับอนุญาตไม่สามารถอ่านหรือทำความเข้าใจได้",
    definitionEn: "The process of converting information or data into a code, especially to prevent unauthorized access.",
    example: "End-to-end encryption ensures that only the sender and recipient can read the messages."
  },
  {
    id: 46,
    term: "SaaS",
    fullTerm: "Software as a Service",
    phonetic: "/sæs/",
    category: "security",
    definitionTh: "รูปแบบการให้บริการซอฟต์แวร์ผ่านระบบคลาวด์บนอินเทอร์เน็ตโดยจ่ายค่าบริการเป็นรายเดือน/รายปี",
    definitionEn: "A software licensing and delivery model in which software is centrally hosted and accessed via a web browser.",
    example: "Google Workspace, Canva, and Slack are widely used SaaS platforms."
  },
  {
    id: 47,
    term: "PDPA",
    fullTerm: "Personal Data Protection Act",
    phonetic: "/ˌpiː.diː.piːˈeɪ/",
    category: "security",
    definitionTh: "พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล กฎหมายที่คุ้มครองสิทธิ์และความเป็นส่วนตัวของเจ้าของข้อมูล",
    definitionEn: "Legislation that governs the collection, use, and disclosure of personal data by organizations.",
    example: "Websites must show cookie consent banners to comply with PDPA regulations."
  },
  {
    id: 48,
    term: "Zero Trust",
    phonetic: "/ˈzɪr.oʊ trʌst/",
    category: "security",
    definitionTh: "แนวคิดความปลอดภัยไซเบอร์ที่ไม่ไว้วางใจผู้ใช้หรืออุปกรณ์ใดๆ แม้ว่าจะอยู่ภายในเครือข่ายองค์กรก็ตาม",
    definitionEn: "A security framework requiring all users to be authenticated, authorized, and continuously validated before being granted access.",
    example: "Under Zero Trust architecture, every device must re-authenticate across internal company networks."
  },
  {
    id: 49,
    term: "Penetration Testing",
    phonetic: "/ˌpen.əˈtreɪ.ʃən ˈtes.tɪŋ/",
    category: "security",
    definitionTh: "การทดสอบเจาะระบบโดยจำลองการโจมตีจากแฮกเกอร์เพื่อหาช่องโหว่และจุดอ่อนด้านความปลอดภัย",
    definitionEn: "An authorized simulated cyberattack on a computer system, performed to evaluate the security of the system.",
    example: "Banks conduct annual penetration testing to patch vulnerabilities before attackers discover them."
  },
  {
    id: 50,
    term: "Firewall",
    phonetic: "/ˈfaɪr.wɑːl/",
    category: "security",
    definitionTh: "ระบบรักษาความปลอดภัยเครือข่ายที่คอยตรวจสอบและคัดกรองทราฟฟิกเข้า-ออกตามกฎเกณฑ์ที่กำหนด",
    definitionEn: "A network security device that monitors and filters incoming and outgoing network traffic based on predetermined security rules.",
    example: "Enterprise firewalls block unauthorized incoming connections and malware attempts."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { VOCAB_CATEGORIES, VOCAB_DATABASE };
}
