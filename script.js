//Prompt first question on click
document.querySelector("#prompt").addEventListener("click", quiz);

//Variables
var quizContainer = document.getElementById('quiz');
var resultsContainter = document.getElementById('results');
var submitButton = document.querySelector

//Questions
var questions = [{
    question: "1. What does HTML stand for?",
    choices: ["HyperTextual Machine Learning", "How To Mechanic Language", "Hyper Tag Machine Language", "HyperText Markup Language"],
    correctAnswer: 3
}, 
{
    question: "2. How do you display an alert?",
    choices: ["msg('Beep')", "msgBox('Beep');", "alertBox('Beep');", "alert('Beep');"],
    correctAnswer: 3
}, 
{
    question: "3. What is the keyboard shortcut to comment a line in HTML?",
    choices: ["SHIFT+CMD+K", "CMD+K+U", "CMD+OPTION+K", "CMD+K+I"],
    correctAnswer: 1
}, 
{
    question: "4. What will this print? var a = [1, 2, 3]; console.log(a[6]);",
    choices: ["undefined", "0", "prints nothing", "Syntax error"],
    correctAnswer: 0
}, 
{
    question: "5. What is 10 + 2 * 5?",
    choices: ["60", "20", "12", "0"],
    correctAnswer: 1
};

//Start Quiz
function startQuiz (){
    timer();

}

//Countdown Timer
var sec = 60;
function timer (){
    var timer = setInterval (quiz) {
        sec--;
        document.getElementById("timer").innerHTML= "" + seconds;
        if sec (0) {
            clearInterval(timer);
            alert("Game over")
        }   
    }, 1000);
}

//Quiz function
function quiz () {
    var answer = [];

    questions.forEach()

    


};

//Quiz Results
function results () {

};