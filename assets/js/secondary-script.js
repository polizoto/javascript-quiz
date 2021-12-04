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
topScore1.append("1. ", topScore1Initials," - ", topScore1Points)

var topScore2 = document.createElement("li")
topScore2.className ="scores"
var topScore2Initials = document.createElement("span")
topScore2Initials.setAttribute("data-initial", "2")
var topScore2Points = document.createElement("span")
topScore2Points.setAttribute("data-score", "2")
topScore2.append("2. ", topScore2Initials," - ", topScore2Points)

var topScore3 = document.createElement("li")
topScore3.className ="scores"
var topScore3Initials = document.createElement("span")
topScore3Initials.setAttribute("data-initial", "3")
var topScore3Points = document.createElement("span")
topScore3Points.setAttribute("data-score", "3")
topScore3.append("3. ", topScore3Initials," - ", topScore3Points)

var topScore4 = document.createElement("li")
topScore4.className ="scores"
var topScore4Initials = document.createElement("span")
topScore4Initials.setAttribute("data-initial", "4")
var topScore4Points = document.createElement("span")
topScore4Points.setAttribute("data-score", "4")
topScore4.append("4. ", topScore4Initials," - ", topScore4Points)

var topScore5 = document.createElement("li")
topScore5.className ="scores"
var topScore5Initials = document.createElement("span")
topScore5Initials.setAttribute("data-initial", "5")
var topScore5Points = document.createElement("span")
topScore5Points.setAttribute("data-score", "5")
topScore5.append("5. ", topScore5Initials," - ", topScore5Points)

var returnGroup = document.createElement("div")
returnGroup.className = "return"

var returnButton = document.createElement("button")
returnButton.className = "return-button"
returnButton.textContent = "Go back"

var clearButton = document.createElement("button")
clearButton.className = "clear-score"
clearButton.textContent = "Clear high scores"

mainContentEl.appendChild(highScores)
mainContentEl.appendChild(scoresGroup)
scoresGroup.appendChild(scoresList)
scoresList.appendChild(topScore1)
scoresList.appendChild(topScore2)
scoresList.appendChild(topScore3)
scoresList.appendChild(topScore4)
scoresList.appendChild(topScore5)

scoresGroup.appendChild(returnGroup)
returnGroup.appendChild(returnButton)
returnGroup.appendChild(clearButton)