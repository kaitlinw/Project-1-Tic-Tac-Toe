//variable list
var boxes = document.querySelectorAll('.box')
var newGameBtn = document.querySelectorAll('.new-game')
var extremeModeBtn = document.querySelector('.extreme-mode')
var announceWinner = document.querySelector('.announce-winner')
var displayPlayer = document.querySelector('.playerId')
var displayTimer = document.querySelector('.timer')
var makeExtreme = document.querySelectorAll('.extreme-colors')



var extremeModeBtnClicked = false
var winnerDeclared = false
var randomChance = 0
var currentPlayer = null
var clickCounter = 0

var player1 = {
    id: 1,
    turn: "first",
    token: "X",
    plays: []
}

var player2 = {
    id: 2,
    turn: "second",
    token: "O",
    plays: []
}

//Possible winning combinations
var possibleWinCombinations = [
    //Across
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    //Down
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    //Diagonal
    [1, 5, 9],
    [3, 5, 7]
]


// click initiates - run game function
var clickHandlePlay = function () {
    // if (clickCounter === 0) {
    //     timer()
    // }
    if (event.target.textContent !== "" || winnerDeclared) {
        console.log("Cannot select box")
        event.target.classList.add("wiggle")

    } else {
        determineCurrentPlayer()
        if (extremeModeBtnClicked === true) {
            initiateExtremeMode()
        }
        event.target.textContent = currentPlayer.token
        currentPlayer.plays.push(Number(event.target.id))
        console.log("PlayerID: " + currentPlayer.id + ", Clicks: " + clickCounter + ", box ID: " + event.target.id + ", Currentplayer array: " + currentPlayer.plays)
        if (clickCounter >= 5) {
            checkForWinner()
        }
        if (clickCounter === 9) {
            announceWinner.classList.add('swirl-in-fwd')
            announceWinner.textContent = "It's a draw!"
        }
    }

}

var determineCurrentPlayer = function () {
    if (clickCounter % 2 === 0) { //whose turn?
        currentPlayer = player1
    } else {
        currentPlayer = player2
    }
    clickCounter++
    displayPlayer.textContent = currentPlayer.id
}


var checkForWinner = function () {
    var checkPlayer = currentPlayer.plays

    console.log("Checking for win: " + currentPlayer.id)
    var winCounter = 0

    // debugger
    //loops through each possible win combination array in the win array
    for (var i = 0; i < possibleWinCombinations.length; i++) {
        var currentPossibleWinCombo = possibleWinCombinations[i]
        //loops through winner array to check every value against if statement
        for (var n = 0; n < currentPossibleWinCombo.length; n++) {
            //checks if check player array contains the index n of winner array
            if (checkPlayer.includes(currentPossibleWinCombo[n])) {
                winCounter++
            }
        }
        if (winCounter === 3) {
            console.log(currentPossibleWinCombo)
            console.log(`PLAYER ${currentPlayer.id} WINS!!!!`)
            announceWinner.textContent = `Player ${currentPlayer.id} wins!`
            winnerDeclared = true
            timer()
            break
        }
        winCounter = 0
    }
}

//20% of the time the user clicks a box, the player swaps.
var initiateExtremeMode = function () {
    extremeModeBtn.classList.add("extreme-true")
    extremeModeBtnClicked = true
    flicker()
    // debugger
    // launch()
    console.log("extreme mode initiated")
    randomChance = Math.round(Math.random() * 10)
    console.log("random chance: " + randomChance)

    if (randomChance <= 5) {
        if (currentPlayer === player1) {
            event.target.classList.add("swirl-in-fwd") // make flash
            currentPlayer = player2
        } else if (currentPlayer === player2) {
            event.target.classList.add("bounce-top")
            currentPlayer = player1

        }
    }
}

// // var timer = function () {
// if (winnerDeclared) {
//     //stop timer
// }
// // displayTimer.textContent = 

// // // }


var changeColor = function () {

    for (var i = 0; i < makeExtreme.length; i++) {
        var colorExplode = `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`
        makeExtreme[i].style.color = colorExplode
        makeExtreme[i].style.borderColor = colorExplode
        colorOfStars = colorExplode
        backgroundColor = 'black'
    }
}

var flicker = function () {
    setInterval(changeColor, 100)

}



// Event listeners
boxes.forEach(function (box) {
    // box.textContent = box.id
    box.addEventListener('click', clickHandlePlay)
})

