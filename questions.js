// ==========================================
// 一般題庫（隨機抽20題）
// ==========================================
const questionBank = [
  { type: "fill", english: "The experiment showed a surprising ___.", chinese: "這個實驗顯示了一個令人驚訝的結果。", answer: "result" },
  { type: "choice", question: "「結果」的英文是？", options: ["custom", "result", "gesture", "event"], answer: 1 },
  { type: "fill", english: "What was the ___ of the game last night?", chinese: "昨晚比賽的結果是什麼？", answer: "result" },
  { type: "fill", english: "We need to find a ___ to this problem quickly.", chinese: "我們需要盡快找到這個問題的方案。", answer: "solution" },
  { type: "choice", question: "「方案／解決辦法」的英文是？", options: ["gesture", "result", "solution", "event"], answer: 2 },
  { type: "fill", english: "There is no easy ___ to this issue.", chinese: "這個問題沒有簡單的方案。", answer: "solution" },
  { type: "fill", english: "The teacher always ___ the importance of practice.", chinese: "老師總是強調練習的重要性。", answer: "emphasizes" },
  { type: "choice", question: "「強調」的英文是？", options: ["avoid", "host", "link", "emphasize"], answer: 3 },
  { type: "fill", english: "She ___ that everyone should drink more water.", chinese: "她強調每個人都應該多喝水。", answer: "emphasized" },
  { type: "fill", english: "Everyone is encouraged to ___ ___ ___ the discussion.", chinese: "鼓勵大家參加這個討論。", answer: "take part in" },
  { type: "choice", question: "「take part in」是什麼意思？", options: ["指出", "主持", "參加／加入", "連接"], answer: 2 },
  { type: "fill", english: "He decided to ___ ___ ___ the competition.", chinese: "他決定參加這場比賽。", answer: "take part in" },
  { type: "fill", english: "It is a local ___ to bow when greeting.", chinese: "鞠躬打招呼是當地的傳統習俗。", answer: "custom" },
  { type: "fill", english: "You should ___ eating junk food every day.", chinese: "你應該避免每天吃垃圾食物。", answer: "avoid" },
  { type: "fill", english: "Many students ___ with math problems.", chinese: "許多學生在數學上感到困擾。", answer: "struggle" },
  { type: "fill", english: "There is an ___ in the report. Please fix it.", chinese: "報告中有一個錯誤，請修正它。", answer: "error" },
  { type: "fill", english: "He made a friendly ___ to welcome us.", chinese: "他做了一個友善的手勢來歡迎我們。", answer: "gesture" },
  { type: "fill", english: "She has lived in Taipei ___ she was a child.", chinese: "她從小就住在台北。", answer: "since" },
  { type: "fill", english: "The teacher ___ out that we made a mistake.", chinese: "老師指出我們犯了一個錯誤。", answer: "pointed" },
  { type: "fill", english: "The bridge ___ the two cities together.", chinese: "這座橋將兩個城市連接在一起。", answer: "links" },
  { type: "fill", english: "We usually have dinner in the ___.", chinese: "我們通常在傍晚吃晚餐。", answer: "evening" },
  { type: "fill", english: "She ___ missed the bus this morning.", chinese: "她今天早上幾乎錯過公車。", answer: "nearly" },
  { type: "fill", english: "They invited 200 people to their ___.", chinese: "他們邀請了200人參加他們的婚禮。", answer: "wedding" },
  { type: "fill", english: "She made a ___ about her trip on social media.", chinese: "她在社群媒體上發了一篇旅行的貼文。", answer: "post" },
  { type: "fill", english: "Let's ___ this topic in class tomorrow.", chinese: "我們明天在課堂上討論這個主題吧。", answer: "discuss" },
  { type: "fill", english: "Can you ___ ___ my bag at the office?", chinese: "你可以幫我把包包放到辦公室嗎？", answer: "drop off" },
  { type: "fill", english: "Please ___ ___ your toys after playing.", chinese: "玩完之後請把玩具撿起來。", answer: "pick up" },
  { type: "fill", english: "There is a dirty ___ on your shirt.", chinese: "你的衣服上有一個污點。", answer: "mark" },
  { type: "fill", english: "I ___ tea to coffee in the morning.", chinese: "我早上比較喜歡喝茶而不是咖啡。", answer: "prefer" },
  { type: "fill", english: "Have you watched any good ___ lately?", chinese: "你最近有看什麼好電影嗎？", answer: "film" },
  { type: "fill", english: "She has ___ finished her homework.", chinese: "她已經完成她的作業了。", answer: "already" },
  { type: "fill", english: "I ___ that you get more sleep.", chinese: "我建議你多睡一點。", answer: "suggest" },
  { type: "fill", english: "The child drew a picture with a ___.", chinese: "那個孩子用蠟筆畫了一張圖。", answer: "crayon" },
  { type: "choice", question: "She will ___ the school event next Friday.", options: ["hold", "host", "have", "handle"], answer: 1 },
  { type: "choice", question: "The teacher always ___ the importance of reading.", options: ["explains", "expresses", "emphasizes", "examines"], answer: 2 },
  { type: "choice", question: "You should ___ eating too much sugar.", options: ["prevent", "refuse", "avoid", "reject"], answer: 2 },
  { type: "choice", question: "We need to find a ___ to this problem as soon as possible.", options: ["result", "method", "reason", "solution"], answer: 3 },
  { type: "choice", question: "Many students ___ with math problems.", options: ["deal", "fight", "struggle", "handle"], answer: 2 },
  { type: "choice", question: "The ___ of the experiment surprised everyone.", options: ["reason", "result", "method", "record"], answer: 1 },
  { type: "choice", question: "The doctor ___ that he should get more rest.", options: ["told", "suggested", "ordered", "demanded"], answer: 1 },
  { type: "choice", question: "I ___ staying home to going out on rainy days.", options: ["like", "enjoy", "prefer", "choose"], answer: 2 },
  { type: "choice", question: "Let's ___ this issue after class.", options: ["talk", "debate", "discuss", "argue"], answer: 2 },
  { type: "choice", question: "The teacher ___ ___ several errors in my essay.", options: ["found out", "pointed out", "gave out", "turned out"], answer: 1 },
  { type: "choice", question: "___ it was raining, we decided to stay inside.", options: ["Because", "Although", "Since", "Unless"], answer: 2 },
  { type: "choice", question: "She has ___ finished the project.", options: ["nearly", "almost", "already", "still"], answer: 2 },
  { type: "choice", question: "Would you ___ having pizza or sushi for dinner?", options: ["suggest", "discuss", "prefer", "decide"], answer: 2 },
  { type: "choice", question: "All students are welcome to ___ ___ ___ the science fair.", options: ["join in", "take part in", "take place in", "take part of"], answer: 1 },
  { type: "choice", question: "He ___ to understand the new grammar rules.", options: ["failed", "struggled", "refused", "decided"], answer: 1 },
  { type: "choice", question: "She tried to ___ making the same mistake again.", options: ["refuse", "avoid", "prevent", "reject"], answer: 1 },
]

// ==========================================
// 文章題庫（每次隨機選一篇，出5題）
// ==========================================
const passageBank = [

  // ===== Passage 1: The School Science Fair =====
  {
    title: "Passage 1: The School Science Fair",
    passage: `Our school will hold a science fair next Friday evening. Ms. Wang, who will (1) ___ the event, always (2) ___ that students should take part in school activities. This year, over fifty students decided to join. Some of them (3) ___ with their projects at first, but they never gave up. In the end, the (4) ___ was amazing — every team found a creative answer to their problem. The teachers (5) ___ that students should always try their best in everything they do.`,
    questions: [
      {
        question: "Question (1): Choose the best word for blank (1).",
        options: ["hold", "host", "have", "handle"],
        answer: 1
      },
      {
        question: "Question (2): Choose the best word for blank (2).",
        options: ["explains", "expresses", "emphasizes", "examines"],
        answer: 2
      },
      {
        question: "Question (3): Choose the best word for blank (3).",
        options: ["dealt", "fought", "struggled", "handled"],
        answer: 2
      },
      {
        question: "Question (4): Choose the best word for blank (4).",
        options: ["record", "reason", "result", "report"],
        answer: 2
      },
      {
        question: "Question (5): Choose the best word for blank (5).",
        options: ["told", "suggested", "ordered", "demanded"],
        answer: 1
      },
    ]
  },

  // ===== Passage 2: A Family Wedding =====
  {
    title: "Passage 2: A Family Wedding",
    passage: `Last Saturday, my family took part in a beautiful (1) ___ ceremony in the evening. Nearly one hundred guests were invited. My aunt asked me to help (2) ___ some gifts at the hotel before the party started. During the event, my uncle, who was the (3) ___, pointed out that it was an important custom in our family to celebrate together. Since everyone was happy, we (4) ___ staying longer rather than leaving early. My cousin already has a great (5) ___ for their honeymoon trip next month.`,
    questions: [
      {
        question: "Question (1): Choose the best word for blank (1).",
        options: ["film", "custom", "wedding", "event"],
        answer: 2
      },
      {
        question: "Question (2): Choose the best word for blank (2).",
        options: ["pick up", "drop off", "take out", "give back"],
        answer: 1
      },
      {
        question: "Question (3): Choose the best word for blank (3).",
        options: ["guest", "host", "leader", "mark"],
        answer: 1
      },
      {
        question: "Question (4): Choose the best word for blank (4).",
        options: ["enjoyed", "liked", "preferred", "chose"],
        answer: 2
      },
      {
        question: "Question (5): Choose the best word for blank (5).",
        options: ["result", "solution", "reason", "record"],
        answer: 1
      },
    ]
  },

  // ===== Passage 3: The New Student =====
  {
    title: "Passage 3: The New Student",
    passage: `Amy is a new student who has been (1) ___ with English since she moved to the city. Her teacher suggested she (2) ___ watching too many videos and instead discuss new words with her classmates. Every evening, Amy (3) ___ watching English films to playing games on her phone. She has already made nearly ten new friends since she joined the school. Last week, her teacher (4) ___ out that Amy's writing had improved a lot. Now Amy plans to (5) ___ in the school English competition next month.`,
    questions: [
      {
        question: "Question (1): Choose the best word for blank (1).",
        options: ["dealing", "fighting", "struggling", "handling"],
        answer: 2
      },
      {
        question: "Question (2): Choose the best word for blank (2).",
        options: ["prevent", "refuse", "avoid", "reject"],
        answer: 2
      },
      {
        question: "Question (3): Choose the best word for blank (3).",
        options: ["enjoys", "likes", "prefers", "chooses"],
        answer: 2
      },
      {
        question: "Question (4): Choose the best word for blank (4).",
        options: ["found", "pointed", "gave", "turned"],
        answer: 1
      },
      {
        question: "Question (5): Choose the best word for blank (5).",
        options: ["take place in", "take part in", "join for", "drop off"],
        answer: 1
      },
    ]
  },

  // ===== Passage 4: A Community Event =====
  {
    title: "Passage 4: A Community Event",
    passage: `Our neighborhood organized a big (1) ___ last Sunday to help link the community together. The organizer, Ms. Lin, (2) ___ that it was a local custom to hold such activities every year. She also pointed out that everyone should (3) ___ making noise near the park after 9 p.m. Nearly two hundred people came to take part. A young student even made a short (4) ___ about the event and shared it online. The result was so good that Ms. Lin suggested they (5) ___ a similar event again next year.`,
    questions: [
      {
        question: "Question (1): Choose the best word for blank (1).",
        options: ["film", "mark", "event", "post"],
        answer: 2
      },
      {
        question: "Question (2): Choose the best word for blank (2).",
        options: ["explained", "expressed", "emphasized", "examined"],
        answer: 2
      },
      {
        question: "Question (3): Choose the best word for blank (3).",
        options: ["prevent", "refuse", "avoid", "reject"],
        answer: 2
      },
      {
        question: "Question (4): Choose the best word for blank (4).",
        options: ["mark", "post", "link", "error"],
        answer: 1
      },
      {
        question: "Question (5): Choose the best word for blank (5).",
        options: ["hold", "host", "have", "handle"],
        answer: 1
      },
    ]
  },

]