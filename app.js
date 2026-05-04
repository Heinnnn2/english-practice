let currentQuestion = 0
let correct = 0

function loadQuestion() {
  document.getElementById("questionNumber").innerText = `第 ${currentQuestion + 1} 題 / 共 ${questions.length} 題`
  const q = questions[currentQuestion]
  const optionsDiv = document.getElementById("options")
  
  if(q.type == "fill"){
    //clear question
    document.getElementById("result").innerHTML = ""
    document.getElementById("question").innerHTML = ""
    optionsDiv.innerHTML = ""
    //question 
    document.getElementById("question").innerText = q.english
    const chinese = document.createElement("p")
    chinese.innerText = q.chinese
    document.getElementById("question").appendChild(chinese)

    //input
    const input = document.createElement("input")
    input.type = "text"
    input.placeholder = "輸入答案"
    document.getElementById("options").appendChild(input)

    //btn
    const subbtn = document.createElement("button")
    subbtn.innerText = "送出"
    optionsDiv.appendChild(subbtn)

    subbtn.onclick = function() {
        checkFill(input.value)
    }
  }

  else{
    document.getElementById("question").innerText = q.question 
    optionsDiv.innerHTML = ""
    
    q.options.forEach(function(option, index) {
        const button = document.createElement("button")
        button.innerText = option
        button.onclick = function() { checkAnswer(index) }
        optionsDiv.appendChild(button)
    })
    
    document.getElementById("result").innerText = ""
  }
}

function checkFill(answer){
    const q = questions[currentQuestion]
    if (answer === q.answer){
        currentQuestion++
        correct++
        document.getElementById("score").innerText = `答對：${correct} / ${questions.length} 題`
        if(currentQuestion >= questions.length){
            document.getElementById("result").innerText = `已完成所有題目！ 答對了 ${correct} 題 ， 共 ${questions.length} 題`
        }
        else{
            loadQuestion()
        }
    }
    else {
    document.getElementById("result").innerText = `❌ 答錯了，正確答案是 ${q.answer} `
    const btn = document.createElement("button")
    btn.innerText = "下一題"
    btn.onclick = function() {
    currentQuestion++
    if(currentQuestion >= questions.length){
        document.getElementById("result").innerText = `已完成所有題目！ 答對了 ${correct} 題 ， 共 ${questions.length} 題`
        document.getElementById("question").innerHTML = ""
        document.getElementById("options").innerHTML = ""
    } else {
        loadQuestion()
    }
    }
    document.getElementById("result").appendChild(btn)
    }
    
}


function checkAnswer(selected) {
  const q = questions[currentQuestion]
  if (selected === q.answer) {
    currentQuestion++
    correct++
    document.getElementById("score").innerText = `答對：${correct} / ${questions.length} 題`
    if(currentQuestion >= questions.length){
        document.getElementById("result").innerText = `已完成所有題目！ 答對了 ${correct} 題 ， 共 ${questions.length} 題`}
    else{
        loadQuestion()
    }
  } 
  else {
    document.getElementById("result").innerText = `❌ 答錯了，正確答案是 ${q.options[q.answer]} `
    const btn = document.createElement("button")
    btn.innerText = "下一題"
    btn.onclick = function() {
    currentQuestion++
    if(currentQuestion >= questions.length){
        document.getElementById("result").innerText = `已完成所有題目！ 答對了 ${correct} 題 ， 共 ${questions.length} 題`
        document.getElementById("question").innerHTML = ""
        document.getElementById("options").innerHTML = ""
    } else {
        loadQuestion()
    }
    }
    document.getElementById("result").appendChild(btn)
  }
}

loadQuestion()