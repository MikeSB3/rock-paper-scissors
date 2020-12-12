computerChoices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}