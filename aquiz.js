const quizdata=[
    {
        question:"   is the most secure cable, but it is expensive",
        a: "Fiber-optic cable",
        b: "Coaxial Thicknet cable",
        c: "Coaxial thinnet cable",
        d: "Twisted Pair cable",
        correct: "a",
    },
    {
        question:"   Protocol waits if medium/bus is busy (another computer is transmitting)",
        a: "CSMA/CD",
        b: "Ethernet",
        c: "CSMA/CA",
        d: "All of the above",
        correct: "c",
    },
    {
        question:"   The communication infrastructures that have been developed in and around large cities",
        a: "LAN",
        b: "MAN",
        c: "WAN",
        d: "PAN",
        correct: "c",
    },
    {
        question:"The network topology that has a central controller is    topology",
        a: "bus",
        b: "mesh",
        c: "star",
        d: "ring",
        correct: "c",
    },
    {
        question:"Which of the following cannot be considered a peripheral device?",
        a: "Computers",
        b: "Modems",
        c: "Printers",
        d: "Scanners",
        correct: "a",
    },
];


const quiz= document.getElementById('quiz')
const answerEls= document.querySelectorAll('.answer')
const qestionEl= document.getElementById('question')
const a_text= document.getElementById('a_text')
const b_text= document.getElementById('b_text')
const c_text= document.getElementById('c_text')
const d_text= document.getElementById('d_text')
const e_text= document.getElementById('e_text')
const submitBtn = document.getElementById('submit')



let currentquiz= 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = quizdata[currentquiz]
    qestionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}


function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked =false)
}


function getselected(){
    let answer
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer =answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click',()=>{
    const answer = getselected()
    if(answer){
        if (answer === quizdata[currentquiz].correct){
            score++
        }
        currentquiz++

        if(currentquiz<quizdata.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML =`
            <h2> You answered ${score}/${quizdata.length} questions correctly</h2>

            <button onclick="location.reload()">Reload</button>

            `
        }
    }
})
