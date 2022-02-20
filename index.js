const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },


];


const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const togetall = document.querySelector('#answer-to-show')


let currentQuiz = 0
let score = 0

loadQuiz()
let answerAll = ()=> {
    let allAnswer=""
    let option =""
    
    console.log("inside function")
    togetall.innerHTML +=`<h2>Answers : </h2>`;
    for(let i=0;i<quizData.length;i++){
        allAnswer = quizData[i].question + " answer: " + quizData[i].a+" ";
        
        togetall.innerHTML +=`<p>${allAnswer}</p><br>`;
    }
    
}

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
let answerResult="";

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
           
       }
       

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           togetall.style.display='block';
           togetall.style.borderRadius='2rem';
           togetall.style.color='black';

           quiz.innerHTML = `
           <h2>You scored ${score*10}/${quizData.length*10}</h2>
           <h2>You answered correctly ${score}/${quizData.length}</h2>

           <button onclick="location.reload()">Reload</button>
           ${answerAll()}
           `
           
       }
    }
})

