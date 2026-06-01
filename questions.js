const questionBank = [

  // ===== result 結果 =====
  {
    type: "fill",
    english: "The experiment showed a surprising ___.",
    chinese: "這個實驗顯示了一個令人驚訝的結果。",
    answer: "result"
  },
  {
    type: "choice",
    question: "「結果」的英文是？",
    options: ["custom", "result", "gesture", "event"],
    answer: 1
  },
  {
    type: "choice",
    question: "「result」的中文意思是？",
    options: ["方案", "錯誤", "結果", "活動"],
    answer: 2
  },

  // ===== custom 傳統／海關 =====
  {
    type: "fill",
    english: "It is a local ___ to remove your shoes before entering.",
    chinese: "進門前脫鞋是當地的傳統習俗。",
    answer: "custom"
  },
  {
    type: "choice",
    question: "「傳統／習俗」的英文是？",
    options: ["solution", "custom", "error", "link"],
    answer: 1
  },
  {
    type: "choice",
    question: "「custom」可以指哪些意思？",
    options: ["結果、活動、錯誤", "傳統、海關、自訂義", "指揮、連接、方案", "手勢、困擾、強調"],
    answer: 1
  },

  // ===== solution 方案 =====
  {
    type: "fill",
    english: "We need to find a ___ to this problem as soon as possible.",
    chinese: "我們需要盡快找到這個問題的方案。",
    answer: "solution"
  },
  {
    type: "choice",
    question: "「方案／解決辦法」的英文是？",
    options: ["gesture", "result", "solution", "event"],
    answer: 2
  },
  {
    type: "choice",
    question: "「solution」的中文意思是？",
    options: ["錯誤", "傳統", "結果", "方案"],
    answer: 3
  },

  // ===== while 在...時候 =====
  {
    type: "fill",
    english: "___ walking to school, she listens to music.",
    chinese: "在走路上學的時候，她會聽音樂。",
    answer: "While"
  },
  {
    type: "fill",
    english: "He fell asleep ___ watching TV.",
    chinese: "他在看電視的時候睡著了。",
    answer: "while"
  },
  {
    type: "choice",
    question: "「while」作為介系詞時是什麼意思？",
    options: ["因為", "雖然", "在...時候", "除非"],
    answer: 2
  },

  // ===== live 住／生活 =====
  {
    type: "fill",
    english: "She has always wanted to ___ near the ocean.",
    chinese: "她一直想住在海邊。",
    answer: "live"
  },
  {
    type: "choice",
    question: "「住／生活」的英文動詞是？",
    options: ["link", "live", "host", "avoid"],
    answer: 1
  },
  {
    type: "choice",
    question: "「live」的中文意思是？",
    options: ["主持", "連接", "住／生活", "避免"],
    answer: 2
  },

  // ===== host 主持 =====
  {
    type: "fill",
    english: "She will ___ the award ceremony tonight.",
    chinese: "她今晚將主持頒獎典禮。",
    answer: "host"
  },
  {
    type: "choice",
    question: "「主持」的英文是？",
    options: ["avoid", "host", "struggle", "command"],
    answer: 1
  },
  {
    type: "choice",
    question: "「host」既可以當名詞也可以當動詞，動詞意思是？",
    options: ["避免", "指揮", "主持", "連接"],
    answer: 2
  },

  // ===== event 活動 =====
  {
    type: "fill",
    english: "The school ___ attracted many parents and students.",
    chinese: "這場學校活動吸引了許多家長和學生。",
    answer: "event"
  },
  {
    type: "choice",
    question: "「活動」的英文是？",
    options: ["result", "error", "event", "gesture"],
    answer: 2
  },
  {
    type: "choice",
    question: "「event」的中文意思是？",
    options: ["結果", "活動", "方案", "傳統"],
    answer: 1
  },

  // ===== avoid 避免 =====
  {
    type: "fill",
    english: "You should ___ eating junk food every day.",
    chinese: "你應該避免每天吃垃圾食物。",
    answer: "avoid"
  },
  {
    type: "fill",
    english: "Try to ___ making the same mistake twice.",
    chinese: "試著避免犯同樣的錯誤兩次。",
    answer: "avoid"
  },
  {
    type: "choice",
    question: "「避免」的英文是？",
    options: ["emphasize", "struggle", "avoid", "command"],
    answer: 2
  },

  // ===== emphasize 強調 =====
  {
    type: "fill",
    english: "The teacher always ___ the importance of practice.",
    chinese: "老師總是強調練習的重要性。",
    answer: "emphasizes"
  },
  {
    type: "choice",
    question: "「強調」的英文是？",
    options: ["avoid", "host", "link", "emphasize"],
    answer: 3
  },
  {
    type: "choice",
    question: "「emphasize」的中文意思是？",
    options: ["指揮", "強調", "避免", "困擾"],
    answer: 1
  },

  // ===== command 指揮 =====
  {
    type: "fill",
    english: "The captain ___ the soldiers to move forward.",
    chinese: "隊長指揮士兵們向前推進。",
    answer: "commanded"
  },
  {
    type: "choice",
    question: "「指揮」的英文是？",
    options: ["struggle", "command", "link", "avoid"],
    answer: 1
  },
  {
    type: "choice",
    question: "「command」的中文意思是？",
    options: ["連接", "強調", "指揮", "困擾"],
    answer: 2
  },

  // ===== struggle 困擾／掙扎 =====
  {
    type: "fill",
    english: "Many beginners ___ with pronunciation.",
    chinese: "許多初學者在發音上感到困擾。",
    answer: "struggle"
  },
  {
    type: "choice",
    question: "「困擾／掙扎」的英文是？",
    options: ["gesture", "error", "struggle", "custom"],
    answer: 2
  },
  {
    type: "choice",
    question: "「struggle」的中文意思是？",
    options: ["強調", "困擾／掙扎", "指揮", "避免"],
    answer: 1
  },

  // ===== link 連接 =====
  {
    type: "fill",
    english: "This road ___ the two towns together.",
    chinese: "這條路將兩個城鎮連接在一起。",
    answer: "links"
  },
  {
    type: "choice",
    question: "「連接」的英文動詞是？",
    options: ["host", "link", "live", "avoid"],
    answer: 1
  },
  {
    type: "choice",
    question: "「link」的中文意思是？",
    options: ["主持", "避免", "連接", "強調"],
    answer: 2
  },

  // ===== error 錯誤 =====
  {
    type: "fill",
    english: "There is an ___ in your calculation. Please check it.",
    chinese: "你的計算中有一個錯誤，請檢查一下。",
    answer: "error"
  },
  {
    type: "choice",
    question: "「錯誤」的英文是？",
    options: ["result", "gesture", "custom", "error"],
    answer: 3
  },
  {
    type: "choice",
    question: "「error」的中文意思是？",
    options: ["結果", "手勢", "錯誤", "傳統"],
    answer: 2
  },

  // ===== gesture 手勢 =====
  {
    type: "fill",
    english: "He waved his hand as a ___ of goodbye.",
    chinese: "他揮手作為道別的手勢。",
    answer: "gesture"
  },
  {
    type: "choice",
    question: "「手勢」的英文是？",
    options: ["event", "link", "gesture", "solution"],
    answer: 2
  },
  {
    type: "choice",
    question: "「gesture」的中文意思是？",
    options: ["活動", "連接", "方案", "手勢"],
    answer: 3
  },

  // ===== since 因為／自從 =====
  {
    type: "fill",
    english: "She has been learning English ___ she was six.",
    chinese: "她從六歲就開始學英文了。",
    answer: "since"
  },
  {
    type: "fill",
    english: "___ it was raining, we stayed inside.",
    chinese: "因為下雨，我們待在裡面。",
    answer: "Since"
  },
  {
    type: "choice",
    question: "「since」作為介系詞可以表示哪些意思？",
    options: ["雖然／但是", "因為／自從", "除非／直到", "為了／以便"],
    answer: 1
  },

  // ===== point out 指出 =====
  {
    type: "fill",
    english: "The teacher ___ ___ several mistakes in my essay.",
    chinese: "老師指出了我文章中的幾個錯誤。",
    answer: "pointed out"
  },
  {
    type: "choice",
    question: "「point out」是什麼意思？",
    options: ["加入", "指出", "避免", "強調"],
    answer: 1
  },
  {
    type: "choice",
    question: "「老師指出了一個問題。」英文是？",
    options: ["The teacher avoided a problem.", "The teacher pointed out a problem.", "The teacher linked a problem.", "The teacher hosted a problem."],
    answer: 1
  },

  // ===== take part in 加入／參加 =====
  {
    type: "fill",
    english: "Everyone is encouraged to ___ ___ ___ the discussion.",
    chinese: "鼓勵大家參加這個討論。",
    answer: "take part in"
  },
  {
    type: "choice",
    question: "「take part in」是什麼意思？",
    options: ["指出", "主持", "參加／加入", "連接"],
    answer: 2
  },
  {
    type: "choice",
    question: "「她參加了學校的活動。」英文是？",
    options: ["She avoided the school event.", "She took part in the school event.", "She linked the school event.", "She commanded the school event."],
    answer: 1
  }

]