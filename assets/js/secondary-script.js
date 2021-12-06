var mainContentEl = document.querySelector("#main-content");

var highScores = document.createElement("h1");
highScores.textContent = "High Scores"
highScores.className = "high-score-heading"

var scoresGroup = document.createElement("div")
scoresGroup.className = "scores-group"
var scoresList = document.createElement("ul")

var topScore1 = document.createElement("li")
topScore1.className ="scores"
var topScore1Initials = document.createElement("span")
topScore1Initials.setAttribute("data-initial", "1")
var topScore1Points = document.createElement("span")
topScore1Points.setAttribute("data-score", "1")
topScore1.append("1. ")

var topScore2 = document.createElement("li")
topScore2.className ="scores"
var topScore2Initials = document.createElement("span")
topScore2Initials.setAttribute("data-initial", "2")
var topScore2Points = document.createElement("span")
topScore2Points.setAttribute("data-score", "2")
topScore2.append("2. ")

var topScore3 = document.createElement("li")
topScore3.className ="scores"
var topScore3Initials = document.createElement("span")
topScore3Initials.setAttribute("data-initial", "3")
var topScore3Points = document.createElement("span")
topScore3Points.setAttribute("data-score", "3")
topScore3.append("3. ")

var topScore4 = document.createElement("li")
topScore4.className ="scores"
var topScore4Initials = document.createElement("span")
topScore4Initials.setAttribute("data-initial", "4")
var topScore4Points = document.createElement("span")
topScore4Points.setAttribute("data-score", "4")
topScore4.append("4. ")

var topScore5 = document.createElement("li")
topScore5.className ="scores"
var topScore5Initials = document.createElement("span")
topScore5Initials.setAttribute("data-initial", "5")
var topScore5Points = document.createElement("span")
topScore5Points.setAttribute("data-score", "5")
topScore5.append("5. ")


var gameScore = ''
var userScore = ''
var userInitials = ''
var highScoresList = []
var highScoresInitials = []
var newList = ''
var count = ''
var haveGameScore = false

var clearHighScores = function (event) {
    // event.preventDefault();
    localStorage.removeItem("gameScore")
    localStorage.removeItem("highScores")
    window.location.reload();
}

var returnGroup = document.createElement("div")
returnGroup.className = "return"

var returnForm = document.createElement("form")
returnForm.setAttribute("action", "../index.html")
returnForm.setAttribute("id", "return-form")

var returnButton = document.createElement("button")
returnButton.className = "return-button"
returnButton.textContent = "Go back"

// Set clear button
var clearForm = document.createElement("form")
clearForm.setAttribute("id", "clear-form")
clearForm.addEventListener("submit", clearHighScores);

var clearButton = document.createElement("button")
clearButton.className = "clear-score"
clearButton.textContent = "Clear high scores"
//

mainContentEl.appendChild(highScores)
mainContentEl.appendChild(scoresGroup)
scoresGroup.appendChild(scoresList)
scoresList.appendChild(topScore1)
scoresList.appendChild(topScore2)
scoresList.appendChild(topScore3)
scoresList.appendChild(topScore4)
scoresList.appendChild(topScore5)

scoresGroup.appendChild(returnGroup)
returnGroup.appendChild(returnForm)
returnGroup.appendChild(clearForm)
returnForm.appendChild(returnButton)
clearForm.appendChild(clearButton)

var displayScore = function () {
if (highScoresList.initial[0]) {
topScore1.append(highScoresList.initial[0].toUpperCase() + " - " + highScoresList.score[0])
}  else {
   topScore1.append("")
}
if (highScoresList.initial[1]) {
    topScore2.append(highScoresList.initial[1].toUpperCase() + " - " + highScoresList.score[1])
}  else {
    topScore2.append("")
    }

if (highScoresList.initial[2]) {
    topScore3.append(highScoresList.initial[2].toUpperCase() + " - " + highScoresList.score[2])
}  else {
    topScore3.append("")
    }
if (highScoresList.initial[3]) {
    topScore4.append(highScoresList.initial[3].toUpperCase() + " - " + highScoresList.score[3])
}  else {
    topScore4.append("")
}
if (highScoresList.initial[4]) {
    topScore5.append(highScoresList.initial[4].toUpperCase() + " - " + highScoresList.score[4])
    }  else {
    topScore5.append("")
    }    
}    

var compareUserScore = function (n) {
    highScoresList.score.splice(n, 0, userScore)
    highScoresList.initial.splice(n, 0, userInitials)
    localStorage["highScores"] = JSON.stringify(highScoresList);
    localStorage.removeItem("gameScore")
}

var checkUserScore = function () {
    if (highScoresList.score[0] === undefined && highScoresList.initial[0] === undefined) {
        highScoresList.score[0] = userScore
        highScoresList.initial[0] = userInitials
        localStorage["highScores"] = JSON.stringify(highScoresList);
        localStorage.removeItem("gameScore")
    }
    else {
    var m, n

    for (var i = 0; i < highScoresList.score.length; i++) {
        n = 0
        while (userScore < highScoresList.score[n]) {
            n++;
        }
        return compareUserScore(n)
    }
}
}

// Get user Score from local storage
var getUserScore = function () {
    if (localStorage.getItem("gameScore")) {
        gameScore = JSON.parse(localStorage["gameScore"])
        userScore = gameScore.score
        userInitials = gameScore.initial
        haveGameScore = true
    }
}

// Get High Score from local storage
var getHighScore = function () {
if (localStorage.getItem("highScores")) {
highScoresList = JSON.parse(localStorage.getItem("highScores"))
} else {
    highScoresList = {
        score: [],
        initial: []
    }
}
}

getHighScore()
getUserScore()
if (haveGameScore === true) {
    checkUserScore()
}
displayScore()
