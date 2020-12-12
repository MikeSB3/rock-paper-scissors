let computerChoices = ["Rock", "Paper", "Scissors"];



function computerPlay() {
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    function playRound(player, computer) {
        const playerSelection = String(prompt("Choose Rock, Paper, or Scissors: ")).toLowerCase();
        const computerSelection = computerPlay().toLowerCase();

        player = playerSelection;
        computer = computerSelection;

        if (player === computer) {
            return console.log("Tie game!");
        }

        if (player === "rock" && computer === "scissors") {
            console.log(`Player wins! ${player} beats ${computer}`);
            return playerScore++;
        } else if (player === "rock" && computer === "paper") {
            console.log(`Computer wins! ${computer} beats ${player}`);
            return computerScore++;
        }

        if (player === "paper" && computer === "rock") {
            console.log(`Player wins! ${player} beats ${computer}`);
            return playerScore++;
        } else if (player === "paper" && computer === "scissors") {
            console.log(`Computer wins! ${computer} beats ${player}`);
            return computerScore++;
        }

        if (player === "scissors" && computer === "paper") {
            console.log(`Player wins! ${player} beats ${computer}`);
            return playerScore++;
        } else if (player === "scissors" && computer === "rock") {
            console.log(`Computer wins! ${computer} beats ${player}`);
            return computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound();
    }

    console.log(`Final Score: Player - ${playerScore} | Computer - ${computerScore}`);
}

game();