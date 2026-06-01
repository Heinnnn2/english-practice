const QUIZ_SIZE = 20
let currentQuestion = 0
let correct = 0
let quizQuestions = []

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function startQuiz() {
  currentQuestion = 0
  correct = 0
  quizQuestions = shuffle(questionBank).slice(0, QUIZ_SIZE)
  document.getElementById("questionCard").innerHTML = '<div id="question"></div>'
  loadQuestion()
}

function updateStats() {
  document.getElementById("questionNumber").innerText = `${currentQuestion + 1} / ${QUIZ_SIZE}`
  document.getElementById("score").innerText = correct
  document.getElementById("progressBar").style.width = `${(currentQuestion / QUIZ_SIZE) * 100}%`
}

function showComplete() {
  const percent = Math.round((correct / QUIZ_SIZE) * 100)
  let emoji = "😅"
  if (percent >= 90) emoji = "🏆"
  else if (percent >= 70) emoji = "🎉"
  else if (percent >= 50) emoji = "💪"

  document.getElementById("progressBar").style.width = "100%"
  document.getElementById("questionNumber").innerText = `${QUIZ_SIZE} / ${QUIZ_SIZE}`

  document.getElementById("questionCard").innerHTML = `
    <div class="complete">
      <div class="emoji">${emoji}</div>
      <h2>完成！</h2>
      <div class="score-big">${correct} / ${QUIZ_SIZE}</div>
      <p>答對率 ${percent}%</p>
      <button class="restart-btn" onclick="startQuiz()">🔄 再練一次</button>
    </div>
  `
  document.getElementById("options").innerHTML = ""
  document.getElementById("result").innerHTML = ""
  document.getElementById("result").className = "result"
}

function animateCard(type) {
  const card = document.getElementById("questionCard")
  card.classList.remove("shake", "bounce")
  void card.offsetWidth // reflow
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

  // 題目卡片淡入
  const card = document.getElementById("questionCard")
  card.classList.remove("shake", "bounce")
  card.style.animation = "none"
  void card.offsetWidth
  card.style.animation = "fadeSlideIn 0.3s ease"

  if (q.type === "fill") {
    document.getElementById("question").innerHTML = `
      ${q.english}
      <p class="chinese">${q.chinese}</p>
    `
    const input = document.createElement("input")
    input.type = "text"
    input.placeholder = "輸入答案..."
    input.autofocus = true
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
  if (currentQuestion >= QUIZ_SIZE) {
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