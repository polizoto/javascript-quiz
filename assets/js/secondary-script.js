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

// var checkScores = function (score) {

//     if (score.textContent.length == 0) {
//         score.textContent = 0
//     }
// }

// var checkInitials = function (initials) {

//     if (initials.textContent.length == 0) {
//         initials.textContent = "TBA"
//     }
// }

// checkScores(topScore1Points)
// checkScores(topScore2Points)
// checkScores(topScore3Points)
// checkScores(topScore4Points)
// checkScores(topScore5Points)

// checkInitials(topScore1Initials)
// checkInitials(topScore2Initials)
// checkInitials(topScore3Initials)
// checkInitials(topScore4Initials)
// checkInitials(topScore5Initials)

var clearHighScores = function (event) {
    event.preventDefault();
    localStorage.removeItem("gameScore")
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

// var checkHighScore = function (userScore, userInitials) {
//     console.log(highScoresList.score.length);
//     console.log(userScore);
//     console.log(highScoresList.score[0]);
//     for (var i = 0; i < highScoresList.score.length; i++) {
//     if (userScore > highScoresList.score[i]) {
//         console.log("Situation1");
//         highScoresList.score.splice(1, 0, userScore)
//         highScoresList.initial.splice(1, 0, userInitials)
//         // localStorage["highScores"] = JSON.stringify(highScoresList);
//         localStorage.setItem("highScores", JSON.stringify(highScoresList))
//         // console.log(highScoreList.score[i]);
//     }
//     else {
//         localStorage.setItem("highScores", JSON.stringify(highScoresList))
//     }
// }
// }

var displayScore = function () {
console.log(highScoresList.score.length);
// for (var i = 0; i < highScoresList.score.length; i++) {
    topScore1.append(highScoresList.score[0] + " - " + highScoresList.initial[0])
    topScore2.append(highScoresList.score[1] + " - " + highScoresList.initial[1]) 
    topScore3.append(highScoresList.score[2] + " - " + highScoresList.initial[2]) 
    topScore4.append(highScoresList.score[3] + " - " + highScoresList.initial[3]) 
    topScore5.append(highScoresList.score[4] + " - " + highScoresList.initial[4])     

// }

}    

var checkUserScore = function () {
    if (highScoresList.score[0] === undefined && highScoresList.initial[0] === undefined) {
        highScoresList.score[0] = userScore
        highScoresList.initial[0] = userInitials
        console.log(highScoresList.score[0]);
        console.log(highScoresList.initial[0]);
        // Store in local storage
        localStorage["highScores"] = JSON.stringify(highScoresList);
    }
    else {
    for (var i = 0; i < highScoresList.score.length; i++) {
            if (userScore > highScoresList.score[i]) {
                highScoresList.score.splice(i, 0, userScore)
                highScoresList.initial.splice(i, 0, userInitials)
                return localStorage["highScores"] = JSON.stringify(highScoresList);
            }
        }
}
}

// Get user Score from local storage
var getUserScore = function () {
    if (localStorage.getItem("gameScore")) {
        gameScore = JSON.parse(localStorage["gameScore"])
        userScore = gameScore.score
        userInitials = gameScore.initial
        console.log(userScore);
        console.log(userInitials);
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
console.log(highScoresList);
console.log(highScoresList.score.length);
console.log(highScoresList.initial.length);
}

getHighScore()
getUserScore()
checkUserScore()
displayScore()


// console.log(highScoresList);
// else {
    // var retrievePoints = JSON.parse(localStorage["gameScore"]);

// }


// Check User score against the set of high Scores
// var checkHighScore = function() {
    // for (var i = 0; i <= highScoresLog.length; i++)
    // if (retrievePoints.score > highScoresLog[i]) {
    //     var index = i - 1
    //     highScoresLog.splice(1, 0, retrievePoints.score)
    //     highScoresInitials[i] = retrievePoints.initial
    //     // return console.log(retrieveHighPoints[i]);
    //     return
//     }
//     else {
//         return console.log("You did not get a high score");
//     }
// }
// // Call the function
// checkHighScore()

// // Update the set of High Scores to include only set of five
// console.log(highScoresList.slice(1).slice(-5))
