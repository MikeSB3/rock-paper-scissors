const container = document.querySelector('#container');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
       console.log(button.className);
       playRound(button.className, computerPlay());
   });
});

// const popUp = document.createElement('div');
// popUp.innerText = "CONGRATS!";
// popUp.classList.toggle('toggle');
// container.appendChild(popUp);




const computerChoices = ["rock", "paper", "scissors"];

function computerPlay() {
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function playRound(player, computer) {
    if (player === computer) {
        return console.log("Tie game!");
    }

    if (player === "rock" && computer === "scissors") {
        console.log(`Player wins! ${player} beats ${computer}`);
    } else if (player === "rock" && computer === "paper") {
        console.log(`Computer wins! ${computer} beats ${player}`);
    }

    if (player === "paper" && computer === "rock") {
        console.log(`Player wins! ${player} beats ${computer}`);
    } else if (player === "paper" && computer === "scissors") {
        console.log(`Computer wins! ${computer} beats ${player}`);
    }

    if (player === "scissors" && computer === "paper") {
        console.log(`Player wins! ${player} beats ${computer}`);
    } else if (player === "scissors" && computer === "rock") {
        console.log(`Computer wins! ${computer} beats ${player}`);
    }
}