const QUIZ_SIZE = 20
let currentQuestion = 0
let correct = 0
let quizQuestions = []
let wrongAnswers = []
let selectedPassage = null

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function buildPassageQuestions(passage) {
  return passage.questions.map((q, i) => ({
    type: "passage",
    passageTitle: passage.title,
    passageText: passage.passage,
    question: q.question,
    options: q.options,
    answer: q.answer,
    isFirst: i === 0
  }))
}

function startQuiz() {
  currentQuestion = 0
  correct = 0
  wrongAnswers = []
  selectedPassage = shuffle(passageBank)[0]
  const regularQs = shuffle(questionBank).slice(0, QUIZ_SIZE)
  const passageQs = buildPassageQuestions(selectedPassage)
  quizQuestions = [...regularQs, ...passageQs]
  document.getElementById("questionCard").innerHTML = '<div id="question"></div>'
  loadQuestion()
}

function reviewWrong() {
  currentQuestion = 0
  correct = 0
  quizQuestions = shuffle(wrongAnswers)
  wrongAnswers = []
  document.getElementById("questionCard").innerHTML = '<div id="question"></div>'
  updateStats()
  loadQuestion()
}

function totalQuestions() {
  return quizQuestions.length
}

function updateStats() {
  const total = totalQuestions()
  document.getElementById("questionNumber").innerText = `${currentQuestion + 1} / ${total}`
  document.getElementById("score").innerText = correct
  document.getElementById("progressBar").style.width = `${(currentQuestion / total) * 100}%`
}

function showComplete() {
  const total = totalQuestions()
  const percent = Math.round((correct / total) * 100)
  let emoji = "😅"
  if (percent >= 90) emoji = "🏆"
  else if (percent >= 70) emoji = "🎉"
  else if (percent >= 50) emoji = "💪"

  document.getElementById("progressBar").style.width = "100%"
  document.getElementById("questionNumber").innerText = `${total} / ${total}`

  let wrongListHTML = ""
  if (wrongAnswers.length > 0) {
    wrongListHTML = `
      <div class="wrong-list">
        <h3>❌ 答錯的題目（${wrongAnswers.length} 題）</h3>
        <ul>
          ${wrongAnswers.map(q => {
            const qText = q.type === "fill" ? q.english : q.question
            const aText = q.type === "fill" ? q.answer : q.options[q.answer]
            return `<li>
              <span class="wrong-q">${qText}</span>
              <span class="wrong-a">正確答案：<strong>${aText}</strong></span>
            </li>`
          }).join("")}
        </ul>
      </div>
    `
  }

  document.getElementById("questionCard").innerHTML = `
    <div class="complete">
      <div class="emoji">${emoji}</div>
      <h2>完成！</h2>
      <div class="score-big">${correct} / ${total}</div>
      <p>答對率 ${percent}%</p>
      <div class="btn-group">
        <button class="restart-btn" onclick="startQuiz()">🔄 再練一次</button>
        ${wrongAnswers.length > 0 ? `<button class="review-btn" onclick="reviewWrong()">📝 複習錯題 (${wrongAnswers.length})</button>` : ""}
      </div>
      ${wrongListHTML}
    </div>
  `
  document.getElementById("options").innerHTML = ""
  document.getElementById("result").innerHTML = ""
  document.getElementById("result").className = "result"
}

function animateCard(type) {
  const card = document.getElementById("questionCard")
  card.classList.remove("shake", "bounce")
  void card.offsetWidth
  if (type === "wrong") card.classList.add("shake")
  else card.classList.add("bounce")
}

function loadQuestion() {
  const q = quizQuestions[currentQuestion]
  const optionsDiv = document.getElementById("options")
  const resultDiv = document.getElementById("result")

  updateStats()
  resultDiv.innerHTML = ""
  resultDiv.className = "result"
  optionsDiv.innerHTML = ""

  const card = document.getElementById("questionCard")
  card.classList.remove("shake", "bounce")
  card.style.animation = "none"
  void card.offsetWidth
  card.style.animation = "fadeSlideIn 0.3s ease"

  if (q.type === "passage") {
    const titleHTML = q.isFirst
      ? `<div class="passage-title">📄 ${q.passageTitle}</div>`
      : ""

    document.getElementById("question").innerHTML = `
      ${titleHTML}
      <div class="passage-box">${q.passageText.replace(/\((\d+)\) ___/g, '<span class="blank-highlight">($1) ___</span>')}</div>
      <div class="passage-question">${q.question}</div>
    `
    q.options.forEach((option, index) => {
      const button = document.createElement("button")
      button.innerText = option
      button.style.animationDelay = `${index * 0.06}s`
      button.onclick = () => checkAnswer(index, button)
      optionsDiv.appendChild(button)
    })

  } else if (q.type === "fill") {
    document.getElementById("question").innerHTML = `
      ${q.english}
      <p class="chinese">${q.chinese}</p>
    `
    const input = document.createElement("input")
    input.type = "text"
    input.placeholder = "輸入答案..."
    optionsDiv.appendChild(input)

    const subbtn = document.createElement("button")
    subbtn.innerText = "送出答案"
    subbtn.className = "submit-btn"
    subbtn.onclick = () => checkFill(input.value.trim())
    optionsDiv.appendChild(subbtn)

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") checkFill(input.value.trim())
    })

    setTimeout(() => input.focus(), 100)

  } else {
    document.getElementById("question").innerText = q.question
    q.options.forEach((option, index) => {
      const button = document.createElement("button")
      button.innerText = option
      button.style.animationDelay = `${index * 0.06}s`
      button.onclick = () => checkAnswer(index, button)
      optionsDiv.appendChild(button)
    })
  }
}

function goNext() {
  currentQuestion++
  if (currentQuestion >= totalQuestions()) {
    showComplete()
  } else {
    loadQuestion()
  }
}

function checkFill(answer) {
  const q = quizQuestions[currentQuestion]
  const resultDiv = document.getElementById("result")

  if (answer.toLowerCase() === q.answer.toLowerCase()) {
    correct++
    document.getElementById("score").innerText = correct
    animateCard("correct")
    resultDiv.className = "result show success"
    resultDiv.innerHTML = `✅ 答對了！`
    setTimeout(goNext, 900)
  } else {
    wrongAnswers.push(q)
    animateCard("wrong")
    resultDiv.className = "result show fail"
    resultDiv.innerHTML = `
      ❌ 答錯了，正確答案是 <strong>${q.answer}</strong>
      <br><button class="next-btn" onclick="goNext()">下一題 →</button>
    `
  }
}

function checkAnswer(selected, btn) {
  const q = quizQuestions[currentQuestion]
  const resultDiv = document.getElementById("result")
  const allBtns = document.querySelectorAll("#options button")

  allBtns.forEach(b => b.onclick = null)
  const correctBtn = allBtns[q.answer]

  if (selected === q.answer) {
    btn.classList.add("correct")
    correct++
    document.getElementById("score").innerText = correct
    animateCard("correct")
    resultDiv.className = "result show success"
    resultDiv.innerHTML = `✅ 答對了！`
    setTimeout(goNext, 900)
  } else {
    wrongAnswers.push(q)
    btn.classList.add("wrong")
    correctBtn.classList.add("correct")
    animateCard("wrong")
    resultDiv.className = "result show fail"
    resultDiv.innerHTML = `
      ❌ 答錯了，正確答案是 <strong>${q.options[q.answer]}</strong>
      <br><button class="next-btn" onclick="goNext()">下一題 →</button>
    `
  }
}

startQuiz()