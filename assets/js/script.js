var questions = [
    {
    question: "Which of the following is the correct syntax to create a cookie using JavaScript?",
    choices: ["document.cookie = 'key1 = value1; key2 = value2; expires = date'", "browser.cookie = 'key1 = value1; key2 = value2; expires = date';", "window.cookie = 'key1 = value1; key2 = value2; expires = date';", "navigator.cookie = 'key1 = value1; key2 = value2; expires = date';"],
    answer: 1
    },
    {
    question: "Which of the following is true about typeof operator in JavaScript?",
    choices: ["The typeof is a unary operator that is placed before its single operand, which can be of any type", "Its value is a string indicating the data type of the operand.", "Both of the above.", "None of the above"],
    answer: 3
    },
    {
    question: "Which built-in method returns the length of the string?",
    choices: ["length()", "size()", "index()", "None of the above."],
    answer: 1
    },
    {
    question: "Which built-in method returns the calling string value converted to lower case?",
    choices: ["toLowerCase()", "toLower()", "changeCase(case)", "None of the above"],
    answer: 1
    },
    {
    question: "Which of the following function of String object returns a number indicating the Unicode value of the character at the given index?",
    choices: ["charAt()", "charCodeAt()", "concat()", "indexOf()"],
    answer: 2
    },
    {
    question: "Which of the following function of String object returns the index within the calling String object of the last occurrence of the specified value?",
    choices: ["lastIndexOf()", "search()", "substr()", "indexOf()"],
    answer: 1
    },
    {
    question: "Which of the following function of String object creates a string to be displayed in a big font as if it were in a <big> tag?",
    choices: ["anchor()", "big()", "blink()", "italics()"],
    answer: 2
    },
    {
    question: "Which of the following function of String object causes a string to be displayed in a small font, as if it were in a <small> tag?",
    choices: ["link()", "small()", "sup()", "sub()"],
    answer: 2
    },
    {
    question: "Which of the following function of Array object calls a function for each element in the array?",
    choices: ["concat()", "every()", "filter()", "forEach()"],
    answer: 4
    },
    {
    question: "Which of the following function of Array object applies a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value?",
    choices: ["pop()", "push()", "reduce()", "reduceRight()"],
    answer: 4
    },
    {
    question: "Which is the correct way to write a JavaScript array?",
    choices: ["var txt = new Array(1:”tim”,2:”kim”,3:”jim”)", "var txt = new Array:1=(“tim”)2=(“kim”)3=(“jim”)", "var txt = new Array(“tim”,”kim”,”jim”)", "var txt = new Array=”tim”,”kim”,”jim”"],
    answer: 3
    },
    {
    question: "If para1 is the DOM object for a paragraph, what is the correct syntax to change the text within the paragraph?",
    choices: ["“New Text”?", "para1.value=”New Text”;", "para1.firstChild.nodeValue= “New Text”;", "para1.nodeValue=”New Text”;"],
    answer: 2
    },
    {
    question: "Which of the following is not considered a JavaScript operator?",
    choices: ["new", "this", "delete", "typeof"],
    answer: 2
    },
    {
    question: "______method evaluates a string of JavaScript code in the context of the specified object.",
    choices: ["Eval", "ParseInt", "ParseFloat", "Efloat"],
    answer: 1
    },
    {
    question: "The syntax of Eval is _______________",
    choices: ["[objectName.]eval(numeriC.", "[objectName.]eval(string)", "[EvalName.]eval(string)", "[EvalName.]eval(numeriC."],
    answer: 2
    },
    {
    question: "The _______ method of an Array object adds and/or removes elements from an array.",
    choices: ["Reverse", "Shift", "Slice", "Splice"],
    answer: 4
    },
    {
    question: "To enable data tainting, the end user sets the _________ environment variable.",
    choices: ["ENABLE_TAINT", "MS_ENABLE_TAINT", "NS_ENABLE_TAINT", "ENABLE_TAINT_NS"],
    answer: 3
    },
    {
    question: "In JavaScript, _________ is an object of the target language data type that encloses an object of the source language.",
    choices: ["a wrapper", "a link", "a cursor", "a form"],
    answer: 1
    },
    {
    question: "Which best explains getSelection()?",
    choices: ["Returns the VALUE of a selected OPTION.", "Returns document.URL of the window in focus.", "Returns the value of cursor-selected text", "Returns the VALUE of a checked radio input."],
    answer: 3
    },
    {
    question: "What is mean by “this” keyword in javascript?",
    choices: ["It refers current object", "It referes previous object", "It is variable which contains value", "None of the above"],
    answer: 1
    }     
    ]
    var count = 0;
    var limit = questions.length
    var nextQuestion = false
    var gameScore = {
        score : 0
    }
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
    var isString = ''
    var timeLeft = 0;
    var timeInterval = ''

            // 
            var correctSound = new Audio('./assets/audio/correct.mp3');
            var incorrectSound = new Audio('./assets/audio/wrong.mp3');

    var checkLetters = function (str) {
       if (/^[a-zA-Z]+$/.test(str)) {
           isString = true
       } else {
            isString = false
       }
    }

    var addHighScore = function (event) {
            
            event.preventDefault();
            var initialsInput = document.querySelector("input[name='initials']").value;
            checkLetters(initialsInput)
            
            if (initialsInput.length > 2 || initialsInput.length < 2) {
                var initialsLength = true
            }

            if (isString === false) {
                alert("Please enter only letters.");
                return false
            }

            if (!initialsInput) {
                alert("Please enter your initials.");
                return false;
              }
             else if (initialsLength){
                alert("Please enter only your first and last initial.");
                return false;
             } 
              else {
                  mainContentEl.innerHTML = '';
                  gameScore.initial = initialsInput
                  console.log(gameScore);
                  localStorage["gameScore"] = JSON.stringify(gameScore);
                window.location.href="./html/high-score.html";
              }
        }      
    
    var endQuiz = function () {
        // timerEl.textContent = ""
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
        endScore.textContent = gameScore.score
        endForm.addEventListener("submit", addHighScore);
    }

    var addPoints = function() {
        gameScore.score = gameScore.score + 5
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
            timeLeft = timeLeft - 10
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
            clearInterval(timeInterval);
            timerEl.textContent = ''
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
            timeLeft = 75;
            timeInterval = setInterval(function() {
              if (timeLeft <= 0 ) {
                timerEl.textContent = '';
                clearInterval(timeInterval);
                endQuiz();
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