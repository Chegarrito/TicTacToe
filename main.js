
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
    let condition = false;
    let humanChoices;
    do{
        humanChoices = prompt("YOUR TURN","ROCK, PAPER OR SCISSORS");
        humanChoices = humanChoices.toUpperCase();
        if (humanChoices === 'ROCK' || humanChoices === 'PAPER' || humanChoices === 'SCISSORS'){
            return humanChoices
        }
    }while(condition == false)
    return humanChoices;
}

function printChoices(){
    console.log(computerChoice);
    console.log(humanChoice);
}
function printScore(humanScore, computerScore){
    console.log("Jugador: ", humanScore, "-", computerScore, " : Computadora");
}
// PRINT welcome    
welcome();

// GET computer choice
let computerChoice = getComputerChoice();  

// GET human choice
let humanChoice = getHumanChoice(); 


// SET human score
let humanScore = 0;

// SET computer score
let computerScore = 0;

// printChoices();
printScore(humanScore, computerScore);