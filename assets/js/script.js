var questions = [
{
    question: "What is your first name?",
    choices: ["Joseph", "Fred", "Bill", "Alex"],
    answer: 1
},
{
    question: "What is your last name?",
    choices: ["Wallace", "Smith", "Thomas", "Black"],
    answer: 3
}
]

var mainContentEl = document.querySelector("#main-content");


var start = function() {
    
    // start the quiz
    var startHeading = document.createElement("h1");
    startHeading.textContent = "Coding Quiz Challenge"
    var startMessage = document.createElement("p")
    startMessage.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time ten seconds!";
    var startButton = document.createElement("button");
    startButton.textContent = "Start Quiz"
    startButton.className = "start";
    mainContentEl.appendChild(startHeading)
    mainContentEl.appendChild(startMessage)
    mainContentEl.appendChild(startButton)
    var enterQuiz = function(event) {
        var startEl = event.target;
        // start button was clicked
        if (startEl.matches(".start")) {
            // mainContentEl.innerHTML = '';
            runQuiz();
        } 
    }
    mainContentEl.addEventListener("click", enterQuiz);
}

var runQuiz = function() {
    mainContentEl.innerHTML = '';
    var questionHeading = document.createElement("h1")
    questionHeading.textContent = questions[0].question
    mainContentEl.appendChild(questionHeading)
    console.log(questionHeading);
}

start()