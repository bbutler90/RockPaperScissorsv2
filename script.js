var remainingAttempts = 3;
var gameEnded = false;
var userWins = 0;
var computerWins = 0;

function playGame(userChoice) {
    if (gameEnded) return; 

    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = 'rock';
    } else if (computerChoice <= 0.67) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    var result = "";
    if (userChoice === computerChoice) {
        result = "It's a draw! Play again.";
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
               (userChoice === 'paper' && computerChoice === 'rock') ||
               (userChoice === 'scissors' && computerChoice === 'paper')) {
        result = "You win! My choice was " + computerChoice + ".";
        userWins++; 
    } else {
        result = "You lose! My choice was " + computerChoice + ". Play Again.";
        computerWins++; 
    }

    document.getElementById("result").innerText = result;

    remainingAttempts--;

    if (remainingAttempts === 0 || userWins === 1) {
        endGame(); 
    }
}

function disableButtons() {
    var buttons = document.querySelectorAll("button");
    buttons.forEach(function(button) {
        button.disabled = true;
    });
}

function endGame() {
    gameEnded = true;
    disableButtons();
    document.getElementById("message").innerText = "Game over. Please refresh to play again. The score was Human: " + userWins + ", Computer : " + computerWins;
}
