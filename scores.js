var restartBtn = document.getElementById("restartBtn"),
    clearBtn = document.getElementById("clearBtn"),
    
    // get the highScores
    highScores = JSON.parse(localStorage.getItem("highScores") || "[]"),
    scoreList = document.getElementById("score-list");

    // display scores
    for (var s = 0; s < highScores.length; s++) {
        var newScore = document.createElement("li")
        newScore.textContent = highScores[s].name + " - " + highScores[s].score
        scoreList.appendChild(newScore)
    }


// clear score button
clearBtn.addEventListener("click", function () {
    localStorage.clear();
    history.back()
});

// restart quiz button
restartBtn.addEventListener("click", function () {
    history.back();
});
