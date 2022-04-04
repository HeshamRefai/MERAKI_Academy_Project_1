const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");

const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : " 1] 10*2?",
        
        choiceA : "20",
        choiceB : "10",
        choiceC : "5",
        choiceD : "1",
        correct : "A"
    },{
        question : "1] 10/2?",
        
        choiceA : "54",
        choiceB : "5",
        choiceC : "4",
        choiceD : "1",
        correct : "B"
    },{
        question : "2] 1*1?",
        choiceA : "54",
        choiceB : "5",
        choiceC : "4",
        choiceD : "1",
        correct : "D"
    },
    {
        question : "3] 5*5?",
        choiceA : "2",
        choiceB : "5",
        choiceC : "4",
        choiceD : "25",
        correct : "D"
    },{
        question : "4] 10*10?",
        choiceA : "5555",
        choiceB : "5",
        choiceC : "4",
        choiceD : "100",
        correct : "D"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let  NowQuestion = 0;
let count = 0;


let score = 0;

// render a question
function ShowQuestion(){
    let q = questions[NowQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
  
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    ShowQuestion()
    quiz.style.display = "block";
    Progress();
    renderCounter();
    
}

// render progress
function Progress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){





        
        if(NowQuestion < lastQuestion){
            NowQuestion++;
            ShowQuestion()
        }else{
            // end the quiz and show the score
        
            scoreRender();
        }
    }


// checkAnwer

function checkAnswer(answer){
    if( answer == questions[NowQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
       
    }else{
        falsev++
        ShowQuestion()
    }
    count = 0;
    if(NowQuestion < lastQuestion){
        NowQuestion++;
        ShowQuestion()
    }else{
        // end the quiz and show the score
       
        scoreRender();
    }
}




function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
   
    
    scoreDiv.innerText=score
    
  
}