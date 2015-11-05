////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay;
}

function getWinner(playerMove,computerMove) {
    
    var winner;

    if ((playerMove === 'rock') && (computerMove === 'rock') 
    || (playerMove === 'scissors') && (computerMove = 'scissors')
    || (playerMove === 'paper') && (computerMove === 'paper')) {

    winner = "tie";

    } else if ((playerMove === 'scissors') && (computerMove ==='paper')
    || (playerMove === 'rock') && (computerMove ='scissors')
    || (playerMove === 'paper') && (computerMove === 'rock')) {

    winner = 'player';

    } else if ((computerMove === 'scissors') && (playerMove === 'paper')
    || (computerMove === 'rock') && (playerMove ==='scissors')
    || (computerMove === 'paper') && (playerMove === 'rock')) {

    winner = 'computer'; 
}
    console.log("Player plays" + playerMove + "while Computer plays" + computerMove);

    return winner;
}


/* 

Also testing out commenting paragraphs (!)

Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.

This function should continue to play Rock Paper Scissors until either the
player or the computer has won five times.

After each 'round', display some text in the console indicating who played
what, who won, and what the current scoreboard looks like.

For example,
console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n'); */


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    while ((playerWins < 5) && (computerWins < 5)) {
    
        var playerMove = getPlayerMove(getInput());
        console.log('Player plays' + playerMove);
        
        var computerMove = getComputerMove(randomPlay());
        console.log('Computer plays' + computerMove);

        var result = getWinner(playerMove, computerMove);
        console.log('The Winner is' + result);

        if (result === "player") {
            playerWins +=1;
            computerWins = computerWins;
            console.log("The Player Wins!");
        }

        else if (result === "computer") {
            computerWins +=1;
            playerWins = playerWins;
            console.log("The Computer Wins!");
        }

        else if (result === "tie") {
            console.log("It was a tie!");
        }

    }

        console.log('The score is currently ' + playerWins + ' to ' + computerWins);

        return [playerWins, computerWins];

}


