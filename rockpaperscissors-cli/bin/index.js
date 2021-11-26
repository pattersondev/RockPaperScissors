const prompt = require('prompt-sync')();

let computerChoice = "";
let userChoice = "";
let rock = "rock";
let scissors = "scissors";
let paper = "paper";
let result = "user";
const options = [rock, paper, scissors];

async function setUserChoice() {
    userChoice = prompt("Please choose rock, paper, or scissors");
    if (!options.includes(userChoice)) {
        console.log("invalid input")
        throw new Error();
    }
    console.log(`You chose ${userChoice}`);
}

async function setComputerChoice() {
    min = Math.ceil(0);
    max = Math.floor(2);
    computerChoice = options[Math.floor(Math.random() * (max - min + 1)) + min];
    console.log("I choose " + computerChoice);
}

async function compareChoice() {
    if (computerChoice === userChoice.toLowerCase()) {
        console.log("We tied!")
        result = null;
    }

    if (computerChoice === rock && userChoice.toLowerCase() === scissors) {
        result = "computer";
    }

    if (computerChoice === scissors && userChoice.toLowerCase() === paper) {
        result = "computer";
    }

    if (computerChoice === paper && userChoice.toLowerCase() === rock) {
        result = "computer";
    }

    if (result === "computer") {
        console.log("I win!");
    }

    if (result === "user") {
        console.log("You win!")
    }
}

async function play() {
    await setUserChoice();
    await setComputerChoice();
    await compareChoice();
}

play();






