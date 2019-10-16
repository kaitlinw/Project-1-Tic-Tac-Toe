//variable list
var boxes = document.querySelectorAll('.box')
var newGameBtn = document.querySelectorAll('.new-game')
var extremeModeBtn = document.querySelector('.extreme-mode')
var announceWinner = document.querySelector('.announce-winner')

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

// CHECK FOR WINNER
var checkForWinner = function () {
    if (currentPlayer === player1) {
        var checkPlayer = player1.plays

    } else if (currentPlayer === player2) {
        var checkPlayer = player2.plays
    }

    console.log("Checking for win: " + currentPlayer.id)
    var counter = 0

    // debugger
    //loops through each possible win combination array in the win array
    for (var i = 0; i < possibleWinCombinations.length; i++) {
        var currentPossibleWinCombo = possibleWinCombinations[i]
        //loops through winner array to check every value against if statement
        for (var n = 0; n < currentPossibleWinCombo.length; n++) {
            //checks if check player array contains the index n of winner array
            if (checkPlayer.includes(currentPossibleWinCombo[n])) {
                counter++

            }

        }
        if (counter === 3) {
            console.log(currentPossibleWinCombo)
            console.log(`Player ${currentPlayer.id} wins!`)
            announceWinner.textContent = `Player ${currentPlayer.id} wins!`
            break
        }
        counter = 0

    }


}



// click initiates - run game function
var clickHandlePlay = function () {
    if (event.target.textContent !== "") {
        console.log("Cannot select box")
        event.target.classList.add("wiggle")
        event.target.addEventListener("mouseout")

    } else {
        if (clickCounter % 2 === 0) { //whose turn?
            player1.plays.push(Number(event.target.id)) //push to player 1
            event.target.textContent = player1.token
            currentPlayer = player1
            console.log(player1.plays)
        } else {
            player2.plays.push(Number(event.target.id)) //push to player 2
            event.target.textContent = player2.token
            currentPlayer = player2
            console.log(player2.plays)

        }
        clickCounter += 1
        console.log("PlayerID: " + currentPlayer.id + ", Clicks: " + clickCounter + ", box ID: " + event.target.id)
        if (clickCounter >= 5) {
            checkForWinner()
        }
    }
}

var initiateExtremeMode = function () {
    //20% of the times the user clicks a box
    console.log("extreme mode initiated")
    var randomChance = Math.round(Math.random() * 10)

    if (randomChance <= 2) {

        if (currentPlayer === player1) {
            currentPlayer.token = player2.token

        } else if (currentPlayer === player2) {
            currentPlayer.token = player1.token
        }

    }
    console.log(randomChance)
}


// HTML links
boxes.forEach(function (box) {
    // box.textContent = box.id
    box.addEventListener('click', clickHandlePlay)
})

extremeModeBtn.addEventListener('click', initiateExtremeMode)

