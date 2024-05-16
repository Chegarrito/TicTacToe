
// Choices that the player has, rock, paper, scissors
const SIZE = 3
// PRINT welcome

// function convertToNum(humanChoice)
function convertToNum(humanChoice){
//    IF humanChoice is ROCK
    let numHumanChoice;
    if (humanChoice === "ROCK"){
        // SET humanChoice value to 0
        numHumanChoice = 0;
        // RETURN humanChoice
        return numHumanChoice;
    }
//    IF humanChoice is PAPER
    if (humanChoice === "PAPER"){
//        SET humanChoice value to 1
        numHumanChoice = 1;
//        RETURN humanChoice
        return numHumanChoice;
    }
//    IF humanChoice is SCISSORS
    else{
//        SET humanChoice value to 2
        numHumanChoice = 2;
//        RETURN humanChoice
        return numHumanChoice;
    }


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

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function playRound(humanChoice, computerChoice) {

// ROCK = 0; PAPER = 1; SCISSORS = 2 dictionary??
// Rock < Paper < Scissors < Rock ..
// 0 < 1 < 2 < 0
//    GET humanChoice
//    GET computerChoice

//    IF humanChoice and computerChoice are the same number
//        return TIE!
//    ELSE IF the absolute value of |humanChoice - computerChoice| equals 2
//        IF human player choice is less than the computer choice 
//            RETURN human player wins
//        ELSE
//            RETURN computer wins

//    ELSE IF the absolute value of humanChoice - computerChoice equals 1
//        IF humanChoice is more than computerScore
//            RETURN human wins
//        else
//        computer wins

}
function printChoices(){
    console.log(computerChoice);
    console.log(humanChoice);
}
function printScore(humanScore, computerScore){
    console.log("Jugador: ", humanScore, "-", computerScore, " : Computadora");
}

function welcome(){
    console.log("ROCK PAPER SCISSORS VS COMPUTER");
}

// PRINT welcome    
welcome();

// GET computer choice
let computerChoice = getComputerChoice();  

// GET human choice
let humanChoice = getHumanChoice(); 

let humanChoiceNumber;
humanChoiceNumber = convertToNum(humanChoice);

// SET human score
let humanScore = 0;

// SET computer score
let computerScore = 0;

// printChoices();
printScore(humanScore, computerScore);

playRound(humanChoice, computerChoice);