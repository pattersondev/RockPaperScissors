const prompt = require('prompt-sync')();

let computerChoice = "";
let userChoice = "";
let rock = "rock";
let scissors = "scissors";
let paper = "paper";
let result = false;
const options = [rock, paper, scissors];

async function setUserChoice() {
    userChoice = prompt("Please choose rock, paper, or scissors\n");
    if (userChoice.toLowerCase() !== rock || userChoice.toLowerCase() !== scissors 
        || userChoice.toLowerCase() !== paper) {
        console.log("You didn't choose rock, paper or scissors, I don't want to play anymore");
        throw new Error();
    }
    console.log(`You chose ${userChoice}`);
}

async function setComputerChoice() {
    min = Math.ceil(0);
    max = Math.floor(2);
    computerChoice = options[Math.floor(Math.random() * (max - min + 1)) + min];
}

async function compareChoice() {
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

    if (result) {
        console.log("I win!");
    }

    if (!result) {
        console.log("You win!")
    }
}

async function play() {
    await setUserChoice();
    await setComputerChoice();
    await compareChoice();
}

play();






