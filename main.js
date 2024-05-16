
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
function playRound(humanChoiceNumber, computerChoice) {

// ROCK = 0; PAPER = 1; SCISSORS = 2 dictionary??
// Rock < Paper < Scissors < Rock ..
// 0 < 1 < 2 < 0
//    GET humanChoice
    let humanTurn = humanChoiceNumber;
//    GET computerChoice
    let computerTurn = computerChoice;
//    IF humanChoice and computerChoice are the same number
    if(humanChoiceNumber === computerChoice)
        {
    //        return TIE
            return 'TIE';
           

        }
//    ELSE IF the absolute value of |humanChoice - computerChoice| equals 2
// ROCK VS SCISSORS
    else if (Math.abs(humanChoiceNumber - computerChoice) === 2){
//        IF human player choice is less than the computer choice 
//          IF HUMAN CHOOSES ROCK AND COMPUTER CHOOSES SCISSORS
            if(humanChoiceNumber < computerChoice){
//            RETURN human player wins
                return "HUMAN";
            }
//         ELSE
            else{
//            RETURN computer wins
                return "COMPUTER";
            }
        }       
//    ELSE IF the absolute value of humanChoice - computerChoice equals 1
//  ROCK VS PAPER / PAPER VS SCISSORS / 
    else if (Math.abs(humanChoiceNumber - computerChoice) === 1){
//        IF HUMAN PAPER VS COMPUTER ROCK
//                  0       1        2
//                  ROCK    PAPER  SCIS

//       HUMAN = 0 ROCK
//       COMPUTER = 1 PAPER
//      COMPUTER > HUMAN
//      RETURN COMPUTER
        if(computerChoice < humanChoiceNumber){
    //            RETURN human wins
            return "HUMAN";
        }
//        ELSE is COMPUTER PAPER VS HUMAN ROCK          0       1        2
                                    //                  ROCK    PAPER  SCIS
        else{
            //        computer wins
            return "COMPUTER";
        }



    }

}
// function CONVERTS number to rock, paper or scissors
function intToHandSign(computerChoice){
    if (computerChoice === 0){return "ROCK";}
    if (computerChoice === 1){return "PAPER";}
    if (computerChoice === 2){return "SCISSORS";}
}
function printChoices(){
    console.log("COMPUTER: " + compHandSign);
    console.log("PLAYER: " + humanChoice);
}
function printScore(humanScore, computerScore){
    console.log("Jugador: ", humanScore, "-", computerScore, " : Computadora");
}

function printWinner(winner){
    if (winner === "TIE"){console.log("TIE!");}
    if (winner === "HUMAN"){console.log("PLAYER WINS!");}
    if (winner === "COMPUTER"){console.log("COMPUTER WINS!");}

}
function welcome(){
    console.log("ROCK PAPER SCISSORS VS COMPUTER");
}

// PRINT welcome    
welcome();

// GET computer choice
let computerChoice = getComputerChoice();  

// TRANSFORM computer choice from number to hand sign
let compHandSign = intToHandSign(computerChoice);

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
printChoices();

let winner = playRound(humanChoiceNumber, computerChoice);

printWinner(winner);
