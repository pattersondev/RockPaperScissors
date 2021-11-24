const prompt = require('prompt-sync')();

let computerChoice = "";
let userChoice = "";
let rock = "rock";
let scissors = "scissors";
let paper = "paper";
let result = false;
const options = [rock, paper, scissors];
console.log(`You chose ${userChoice}`);

function setUserChoice() {
    userChoice = prompt("Please choose rock, paper, or scissors\n");
    if (!userChoice.toLowerCase() === rock || !userChoice.toLowerCase() === scissors 
        || !userChoice.toLowerCase() === paper) {
        userChoice = prompt("Please choose rock, paper, or scissors\n");
    }
    console.log(`You chose ${userChoice}`);
}

function setComputerChoice() {
    min = Math.ceil(0);
    max = Math.floor(2);
    computerChoice = options[Math.floor(Math.random() * (max - min + 1)) + min];
}

function compareChoice() {
    if (computerChoice === userChoice.toLowerCase()) {
        console.log("We tied!")
    }

    if (computerChoice === rock && userChoice.toLowerCase() === scissors) {
        result = true;
    }

    if (computerChoice === scissors && userChoice.toLowerCase() === paper) {
        result = true;
    }

    if (computerChoice === paper && userChoice.toLowerCase() === rock) {
        result === true;
    }

    if (result === true) {
        console.log("I win!");
    }

    if (result === false) {
        console.log("You win!")
    }
}

function play() {
    setUserChoice();
    setComputerChoice();
    compareChoice();
}

play();






