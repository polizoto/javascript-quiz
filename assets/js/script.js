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
    var count = 0;
    var limit = questions.length
    var nextQuestion = false
    var timerEl = document.getElementById('counter');
    var mainContentEl = document.querySelector("#main-content");
    var answersGroup = document.createElement("div")
    answersGroup.className ="answers-group"
    var feedback = document.createElement("div")
    feedback.className ="feedback"
    var questionHeading = document.createElement("h2")
    var answerForm1 = document.createElement("form");
    answerForm1.setAttribute("id", "form-1")
    var questionAnswer1 = document.createElement("button")
    questionAnswer1.className = "answers"
    questionAnswer1.setAttribute("data-answer", "1")
    var answerForm2 = document.createElement("form");
    answerForm2.setAttribute("id", "form-2")
    var questionAnswer2 = document.createElement("button")
    questionAnswer2.className = "answers"
    questionAnswer2.setAttribute("data-answer", "2")
    var answerForm3 = document.createElement("form");
    answerForm3.setAttribute("id", "form-3")
    var questionAnswer3 = document.createElement("button")
    questionAnswer3.className = "answers"
    questionAnswer3.setAttribute("data-answer", "3")
    var answerForm4 = document.createElement("form");
    answerForm4.setAttribute("id", "form-4")
    var questionAnswer4 = document.createElement("button")
    questionAnswer4.className = "answers"
    questionAnswer4.setAttribute("data-answer", "4")
    var noInitials = false

            // 
            var correctSound = new Audio('./assets/audio/correct.mp3');
            var incorrectSound = new Audio('./assets/audio/wrong.mp3');

    var addHighScore = function (event) {
            
            event.preventDefault();
            var initialsInput = document.querySelector("input[name='initials']").value;
            
            if (initialsInput.length > 2) {
                var initialsLength = true
            }

            if (!initialsInput) {
                alert("Please enter your initials.");
                return false;
              }
             else if (initialsLength){
                alert("Please enter your first and last initials only.");
                return false;
             } 
              else {
                  mainContentEl.innerHTML = '';
                //   startQuiz()
                window.location.href="./html/high-score.html";
              }
        }      
    
    var endQuiz = function () {
            // 
            mainContentEl.removeChild(questionHeading)
            answersGroup.removeChild(answerForm1)
            answersGroup.removeChild(answerForm2)
            answersGroup.removeChild(answerForm3)
            answersGroup.removeChild(answerForm4)

            //
            var endHeading = document.createElement("h2");
            endHeading.textContent = "All Done!"
            var endMessage = document.createElement("p")
            endMessage.className = "end"
            endMessage.textContent = "You final score is ";
            var endScore = document.createElement("span")
            endScore.setAttribute("id", "end-score")
            var endFormMessage = document.createElement("p")
            endFormMessage.textContent = "Enter initials:  ";
            var endInput = document.createElement("input")
            endFormMessage.className = "end"
            endInput.className = "initials"
            endInput.setAttribute("name", "initials")
            var endForm = document.createElement("form");
            // endForm.setAttribute("action", "./html/high-score.html")
            endForm.setAttribute("id", "end-quiz")
            var endButton = document.createElement("button");
            endButton.textContent = "Submit"
            endButton.className = "end-button";
            
        //
        answersGroup.prepend(endForm)
        endForm.appendChild(endFormMessage)
        endFormMessage.append(endInput)
        endFormMessage.append(endButton)
        endMessage.append(endScore)
        endMessage.append(".")
        answersGroup.prepend(endMessage)
        answersGroup.prepend(endHeading)
        endScore.textContent = userScore.score
        endForm.addEventListener("submit", addHighScore);
    }

    var userScore = {
        score : 0,
        initial: ''
    }

    var addPoints = function() {
        userScore.score = userScore.score + 5
    }

    var showResult = function(result) {
        feedback.innerHTML = '';
        var showTime = 10;
        var status = document.createElement("p")
        feedback.appendChild(status)
        var resultInterval = setInterval(function() {
          if (showTime === 0 ) {
            status.textContent = ''
            clearInterval(resultInterval);
          }
          else {
            status.textContent = ''
            status.textContent = result
            showTime--;
        }
        }, 50);
      }

    var checkAnswer = function (number, count) {
        if (number === questions[count].answer ) {
            var result = "Correct!"
            correctSound.play()
            addPoints()
        }
        else {
            var result = "Wrong!"
            incorrectSound.play()
        }
        showResult(result)
        nextQuestion = true
        listQuestions()
    }

    var answerQuiz = function(event) {
        event.preventDefault();
        var answerEl = event.target;
        if (answerEl.matches("#form-1")) {
            checkAnswer(1, count)
        }
        if (answerEl.matches("#form-2")) {
            checkAnswer(2, count)
        } 
        if (answerEl.matches("#form-3")) {
            checkAnswer(3, count)
        } 
        if (answerEl.matches("#form-4")) {
            checkAnswer(4, count)
        } 
    }
    
    var listQuestions = function () {
        mainContentEl.innerHTML = '';
        mainContentEl.appendChild(questionHeading)
        mainContentEl.appendChild(answersGroup)
        answersGroup.appendChild(answerForm1)
        answerForm1.appendChild(questionAnswer1)
        answersGroup.appendChild(answerForm2)
        answerForm2.appendChild(questionAnswer2)
        answersGroup.appendChild(answerForm3)
        answerForm3.appendChild(questionAnswer3)
        answersGroup.appendChild(answerForm4)
        answerForm4.appendChild(questionAnswer4)
        answersGroup.appendChild(feedback)
        if (nextQuestion === true ) {
            count++
        }
        if (count === limit) {
            endQuestions = true
            endQuiz();
            
        }
           else {
               questionHeading.textContent = questions[count].question
               questionAnswer1.textContent = "1. " + questions[count].choices[0]
               questionAnswer2.textContent = "2. " + questions[count].choices[1]
               questionAnswer3.textContent = "3. " + questions[count].choices[2]
               questionAnswer4.textContent = "4. " + questions[count].choices[3]
               answerForm1.addEventListener("submit", answerQuiz);
               answerForm2.addEventListener("submit", answerQuiz);
               answerForm3.addEventListener("submit", answerQuiz);
               answerForm4.addEventListener("submit", answerQuiz);
            }
        }
        
        var runQuiz = function() {
            var timeLeft = 75;
            var timeInterval = setInterval(function() {
              if (timeLeft === 0 ) {
                timerEl.textContent = '';
                clearInterval(timeInterval);
                if (endQuestions === null){
                    endQuiz();
                }
              }
              else {
                timerEl.textContent = "Time: " + timeLeft 
                timeLeft--;
            }
            }, 1000);
          }
    
    var startQuiz = function() {
        // start the quiz
        var startHeading = document.createElement("h1");
        startHeading.textContent = "Coding Quiz Challenge"
        var startMessage = document.createElement("p")
        startMessage.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time ten seconds!";
        var startForm = document.createElement("form");
        startForm.setAttribute("id", "start-quiz")
        var startButton = document.createElement("button");
        startButton.textContent = "Start Quiz"
        startButton.className = "start";
        mainContentEl.appendChild(startHeading)
        mainContentEl.appendChild(startMessage)
        mainContentEl.appendChild(startForm)
        startForm.appendChild(startButton)
        var enterQuiz = function(event) {
            event.preventDefault();
            var startEl = event.target;
            // start button was clicked
            if (startEl.matches("#start-quiz")) {
            runQuiz();
            listQuestions();
            } 
        }
        startForm.addEventListener("submit", enterQuiz);
    }
    
    
startQuiz()