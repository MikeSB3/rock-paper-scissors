const container = document.querySelector('#container');
const buttons = document.querySelectorAll('button');

const scoreBox = document.querySelector('#game-score');
const scoreMessage = document.createElement('p');
scoreBox.appendChild(scoreMessage);

const computerChoices = ["rock", "paper", "scissors"];

buttons.forEach((button) => {
    button.addEventListener('click', () => {
       console.log(button.className);
       playRound(button.className, computerPlay());
   });
    button.addEventListener('click', () => {
        scoreBox.classList.remove('hidden');
    })

});

function computerPlay() {
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function playRound(player, computer) {
    if (player === computer) {
        scoreMessage.innerText = 'Tie game!';
    }

    if (player === "rock" && computer === "scissors") {
        scoreMessage.innerText = `Player wins! ${player} beats ${computer}`;
    } else if (player === "rock" && computer === "paper") {
        scoreMessage.innerText = `Computer wins! ${computer} beats ${player}`;
    }

    if (player === "paper" && computer === "rock") {
        scoreMessage.innerText = `Player wins! ${player} beats ${computer}`;
    } else if (player === "paper" && computer === "scissors") {
        scoreMessage.innerText = `Computer wins! ${computer} beats ${player}`;
    }

    if (player === "scissors" && computer === "paper") {
        scoreMessage.innerText = `Player wins! ${player} beats ${computer}`;
    } else if (player === "scissors" && computer === "rock") {
        scoreMessage.innerText = `Computer wins! ${computer} beats ${player}`;
    }
}