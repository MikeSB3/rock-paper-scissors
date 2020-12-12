let computerChoices = ["Rock", "Paper", "Scissors"];
const playerSelection = String(prompt("Choose Rock, Paper, or Scissors: ")).toLowerCase();
const computerSelection = computerPlay().toLowerCase();

function computerPlay() {
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function playRound(player, computer) {
    player = playerSelection;
    computer = computerSelection;

    if (player === computer) {
        console.log("Tie game!");
    }

    if (player === "rock" && computer === "scissors") {
        console.log("Player wins!");
    } else if (player === "rock" && computer === "paper") {
        console.log("Computer wins!");
    }

    if (player === "paper" && computer === "rock") {
        console.log("Player wins!");
    } else if (player === "paper" && computer === "scissors") {
        console.log("Computer wins!");
    }

    if (player === "scissors" && computer === "paper") {
        console.log("Player wins!");
    } else if (player === "scissors" && computer === "rock") {
        console.log("Computer wins!");
    }
}

console.log("Player Choice: " + playerSelection);
console.log("Computer Choice: " + computerSelection);

playRound();