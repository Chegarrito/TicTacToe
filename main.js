
// Choices that the player has, rock, paper, scissors
const SIZE = 3
// PRINT welcome
function welcome(){
    console.log("ROCK PAPER SCISSORS VS COMPUTER");
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice() {
    return getRandomInt(SIZE);
}

function getHumanChoice() {
    humanChoices = prompt("ROCK, PAPER OR SCISSORS");
    return humanChoices;
}


// PRINT welcome    
welcome();
// DRAW board
printTicTacToe();

// DECLARATION OF VARIABLES

// GET computer choice
let computerChoice = getComputerChoice(); // console.log(computerChoice);

// GET human choice
let humanChoice = getHumanChoice(); //console.log(humanChoice);

let humanScore = 0;
let computerScore = 0;