const buttons = document.querySelectorAll('button');
const scoreBox = document.querySelector('#game-score');
const scoreMessage = document.createElement('p');
const gameBox = document.querySelector('#results');
const resultsMessage = document.createElement('p');
const computerChoices = ["rock", "paper", "scissors"];

scoreBox.appendChild(scoreMessage);
gameBox.appendChild(resultsMessage);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.className);
        playRound(button.className, computerPlay());
    });
    button.addEventListener('click', () => {
        scoreBox.classList.remove('hidden');
    });
});

function computerPlay() {
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(player, computer) {
    if (player === computer) {
        scoreMessage.innerText = `Tie game! \n Player score: ${playerScore} | Computer score: ${computerScore}`;
    }

    if (player === "rock" && computer === "scissors") {
        scoreMessage.innerText = `Player wins! ${player} beats ${computer} \n Player score: ${playerScore} | Computer score: ${computerScore}`;
        playerScore++;
    } else if (player === "rock" && computer === "paper") {
        scoreMessage.innerText = `Computer wins! ${computer} beats ${player} \n Player score: ${playerScore} | Computer score: ${computerScore}`;
        computerScore++;
    }

    if (player === "paper" && computer === "rock") {
        scoreMessage.innerText = `Player wins! ${player} beats ${computer} \n Player score: ${playerScore} | Computer score: ${computerScore}`;
        playerScore++;
    } else if (player === "paper" && computer === "scissors") {
        scoreMessage.innerText = `Computer wins! ${computer} beats ${player} \n Player score: ${playerScore} | Computer score: ${computerScore}`;
        computerScore++;
    }

    if (player === "scissors" && computer === "paper") {
        scoreMessage.innerText = `Player wins! ${player} beats ${computer} \n Player score: ${playerScore} | Computer score: ${computerScore}`;
        playerScore++;
    } else if (player === "scissors" && computer === "rock") {
        scoreMessage.innerText = `Computer wins! ${computer} beats ${player} \n Player score: ${playerScore} | Computer score: ${computerScore}`;
        computerScore++;
    }

    if (playerScore === 5 && computerScore < 5) {
        resultsMessage.innerText = "Game Over! Player wins best of five!";
        gameBox.classList.remove('hidden');
    } else if (computerScore === 5 && playerScore < 5) {
        resultsMessage.innerText = "Game Over! Computer wins best of five!";
        gameBox.classList.remove('hidden');
    }
}