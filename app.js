
//PSEUDO CODE

// player 1 takes turn - clicks a box
// the box ID is stored in player 1's plays array
// player 2 takes turn - clicks a box
// the box ID is stored in player 2's plays array
// when player 1's array.length === 3, checkforWinner()

    //checkForWinner function runs
    //check if (passed argement) player 1 is winner 
    //compare player 1's plays array to the possible combinations array.
    //loop through array for === matches, order not specific.
    // if player1.plays array === any of the combination arrays in the possible win combinations array, print player1 is the winner!
    // leavefunction

//player2 takes final turn
//when player 1's array.length === 3, checkforWinner()
//checkForWinner function runs
//if player2 is also not winner, else statement, print "Its a draw!""
//limit boxes to ony be clicked once

//player 1 and player 2

var clickCounter = 0

var boxes = document.querySelectorAll('.box')
var player1 = {
    turn: "first",
    token: "X",
    plays: [1,5,7,9,3]

}

var player2 = {
    turn: "second",
    token: "O",
    plays: [7,4,2,1]
}

//WINNING
var possibleWinCombinations = [
//Across
[1,2,3], //possibleWinCombinations[i], the numbers within [i][i]
[4,5,6],
[7,8,9],
//Down
[1,4,7],
[2,5,8],
[3,6,9],
//Diagonal
[1,5,9],
[3,5,7]
]


// var checker = function (arr,target) {
//     target.every(v => arr.includes(v));



// plays: [1,5,7,9,3]
//loop through player1.plays array. Compare player1.plays array with all possible win combinations by looping through the wincombinations arrays, 
//starting with the first item in the players array, 
//loop through the possible wins[1] array
//
//check winner
 //------------------------------------------------------------
// WORKS
// var winner = [1,3,7]
// var plays = [1,3,5,7,9]

// var playsArr = []
// for ( var i=0;i< plays.length; i++) {
    
// if (winnerStr.includes(plays[i])) {
//     playsArr.push(plays[i])

// }
// }
// console.log("matching plays: " + playsArr)
 //------------------------------------------------------------
var checkForWinner = function () {
    var checkPlayer1 = player1.plays.sort() // [1,3,5,7,9]
    var checkPlayer2 = player2.plays.sort() // [1,5,9]
    console.log(checkPlayer1)
    console.log(checkPlayer2)
    var winnerCheck = []

    for (var i = 0; i < possibleWinCombinations[i].length; i++) {
        if (checkPlayer1.includes(possibleWinCombinations[6])) {
            winnerCheck.push(possibleWinCombinations[i])

        } else console.log('not working')
    }
    
        console.log(winnerCheck)





}



 // 





    // for (var i = 0; i < possibleWinCombinations.length; i++) {
        
    //     checkPlayer1.forEach( function () {
    //     //loop through the first array in the possible comb array
    //         if (checkPlayer1[i] === possibleWinCombinations[i].forEach()) {
    //             winnerCheck.push(possibleWinCombinations[i])
    //         }

    //         // winnerCheck.splice(1)
    // })
    // }
    


    // player1.plays.forEach(function () {

        
    //     // if (possibleWinCombinations[i].contains(player1.plays[i])) {
    //     //     winningArrayCheck.push(Number(player1.plays[i]))

    //     //     console.log("yes match")
    //     //     console.log("winnning array: " + winningArrayCheck)
    //     // } else {
    //     //     console.log("no match")
    //     //     winningArrayCheck = []
    //     // }

    // })
    

checkForWinner()







// click run game function
var clickHandlePlay = function () {
    if (clickCounter % 2 === 0) { //whose turn?
        player1.plays.push(Number(event.target.id)) //push to player1
        event.target.textContent = "X"
        var playerId = "player1"
        console.log(player1.plays)
    } else { 
        player2.plays.push(Number(event.target.id)) //push to player 2
        event.target.textContent = "O"
        playerId = "player2"
        console.log(player2.plays)

    }
    clickCounter += 1
    console.log("PlayerID: " + playerId + ", Clicks: " + clickCounter + ", box ID: " + event.target.id)
    if (clickCounter >= 5) {
        checkForWinner()
    }
}



// HTML links
boxes.forEach(function(box) {
    // box.textContent = box.id
    box.addEventListener('click', clickHandlePlay)
})

