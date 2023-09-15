const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            { text: "Scripting", correct: false },
            { text: "Js", correct: false },
            { text: "JavaScript", correct: false },
            { text: "Script", correct: true }
        ]
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: [
            { text: "Both The head Section and the body", correct: true },
            { text: "The body Section", correct: false },
            { text: "The head Section", correct: false },
            { text: "All of these", correct: false }
        ]
    },
    {
        question: "The external JavaScript file must contain the script tag.",
        answers: [
            { text: "False", correct: true },
            { text: "True", correct: false },
            { text: "Yes", correct: false },
            { text: "All of these", correct: false }
        ]
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: [
            { text: "Function myFunction()", correct: true },
            { text: "Function=myFunction()", correct: false },
            { text: "Function:myFunction()", correct: false },
            { text: "Function{myFunction()}", correct: false }
        ]
    },
]


const questionElement = document.querySelector('#question')
// console.log(questionElement)

const answewrButton = document.querySelector('#answer-buttons')
// console.log(answewrButton)

const nextButton = document.querySelector('#next-btn')
// console.log(nextButton)


let currentQuestionIndex = 0;
let score = 0;

// function Start Quiz()🙋‍♂️

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct')
        score++
    }else {
        selectedBtn.classList.add('incorrect')
    }
    Array.from(answewrButton.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = 'true'
    });
    nextButton.style.display ='block'
}



function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn')
        answewrButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
    });
    
}
// Function  resetState()

function resetState () {
    nextButton.style.display= 'none'
    while(answewrButton.firstChild){
        answewrButton.removeChild(answewrButton.firstChild);
    }
}
//                                                  function selectAnswer()


// selectAnswer()

// Function  showScore()

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block'


}



// Function  handleNextButton()

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }else{
        showScore()
    }
}





// Function  next button()
nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else {
        startQuiz();
    }
    
})


startQuiz()





























































































































































