//Variables
var startBtn = document.getElementById("prompt");
var submitBtn = document.getElementById("submitBtn")
var sec = (questions.length * 12 + 1);
var timerEl = document.getElementById("timer");
var submitScoreEl = document.querySelector("#submit-score");
var userScoreEl = document.getElementById("user-score");
var userName;
var questionHead = document.getElementById("questions");
var answerChoices = document.getElementById("answers");

var questionNumber = -1;
var answer;

//Start Quiz
function startQuiz (){
    // unhide questions
    document.getElementById("home").classList.add('d-none');
    document.getElementById("quiz").classList.remove('d-none');

    // timer starts
    timerStart();

    // questions
    quiz ();
}

// Timer
function timerStart (){
    var timer = setInterval (function () {
        sec --;

        timerEl.textContent = "Time: " + sec;

        if (sec === 0 || questionNumber === questions.length) {
            clearInterval(timer);
            setTimeout(displayScore, 500);
        }   
    }, 1000);
}

//Quiz function
function quiz () {
    questionNumber++;
    answer = questions[questionNumber].correctAnswer

    questionHead.textContent = questions[questionNumber].question;
    answerChoices.innerHTML = "";

    var choices = questions[questionNumber].choices;

    for (var q = 0; q < choices.length; q++) {
        var nextChoice = document.createElement("button");

        nextChoice.textContent = choices[q]
        answerBtn = answerChoices.appendChild(nextChoice).setAttribute("class", "p-3 m-1 btn button btn-block");
    }
};

//Quiz Results
function results () {
    userName = document.getElementById("userName").value
    
    // create a new object with name and score keys
var newScore = {
        name: userName,
        score: sec
    };
    // get local storage
    var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
    // push object to score array
    highScores.push(newScore)
    // turn objects into string array then put it into local storage
    localStorage.setItem("highScores", JSON.stringify(highScores));

}

// record score
function displayScore() {
    document.getElementById("quiz").classList.add('d-none');
    document.getElementById("submit-score").classList.remove('d-none');
    userScoreEl.textContent = "Your score is " + sec + ".";
}

// Event listeners for buttons
startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    results();
    
    window.location.href = './highscores.html'
});


function hideFeedback(){
    var pEl= document.getElementsByClassName("feedback")[0]
    pEl.style.display='none'
}

function showFeedback(){
    var pEl= document.getElementsByClassName("feedback")[0]
    pEl.removeAttribute('style');
}

answerChoices.addEventListener("click", function (event) {
    var pEl= document.getElementsByClassName("feedback")[0]
    
    // Right or wrong answer
    if (answer === event.target.textContent) {   
        pEl.innerHTML = "Correct";
        setTimeout(hideFeedback,1000);
        showFeedback();   
    } else {
        pEl.innerHTML = "Wrong";
        setTimeout(hideFeedback,1000);
        sec = sec - 5;
        showFeedback();
    }    
    quiz();
});