// EDGAR ORTIZ JR
// ROCK PAPER SCISSORS
// Choices that the player has, rock, paper, scissors
const SIZE = 3
const TOTALROUNDS = 5
// PRINT welcome

function checkWinner(score){
    if(score[0] === 5){
        const container = document.querySelector("#container");
        const divWinner = document.createElement("div");
        divWinner.textContent = "PLAYER WINS THE GAME!!!!!!!";
        divWinner.style.backgroundColor = "green";
        divWinner.style.padding = "25px";
        divWinner.style.alignContent = "center";
        container.appendChild(divWinner);
        
    }
    else if(score[1] === 5){
        const container = document.querySelector("#container");
        const divWinner = document.createElement("div");
        divWinner.textContent = "COMPUTER WINS THE GAME!!!!!!!";
        divWinner.style.backgroundColor = "red";
        divWinner.style.padding = "25px";
        divWinner.style.alignContent = "center";
        container.appendChild(divWinner);
    }
}
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

/* function getHumanChoice() {
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
} */

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
function playGame(){
        // GET computer choice
    let computerChoice = getComputerChoice();  

    // TRANSFORM computer choice from number to hand sign
    let compHandSign = intToHandSign(computerChoice);

    // GET human choice
    let humanChoice = getHumanChoice(); 
    let humanChoiceNumber = convertToNum(humanChoice);

    


    // printChoices();
    printScore(score);
    printChoices(humanChoice, compHandSign);

    // Run the logic behind the game
    let winner = playRound(humanChoiceNumber, computerChoice);

    // PRINT winner
    printWinner(winner);

    // SET new score 
    score = updateScores(winner, score);
    // PRINT SCORE
    printScore(score);

}
function printChampion(){
    // IF the human score is more than the computer score
    if(score[0] === score[1]){console.log("TIE! WHAT A GREAT BATTLE")}
    if(score[0] > score[1]){console.log("PLAYER IS THE NEW CHAMPION");}
    if(score[1] > score[0]){console.log("COMPUTER IS THE NEW CHAMPION");}
}
function printChoices(humanChoice, compHandSign){
    console.log("PLAYER : " + humanChoice + " VS " + compHandSign + " : COMPUTER");
}
function printChoicesDOM(humanChoice, compHandSign){
    const container = document.querySelector("#container");
    const divChoices = document.createElement("div");
    divChoices.textContent = `PLAYER : ${humanChoice} VS ${compHandSign} : COMPUTER`;
    container.appendChild(divChoices);
}
function printDOMRoundWinner(winner){
    const container = document.querySelector("#container");
    const divResult = document.createElement("div");
    if (winner === "TIE"){divResult.textContent = "TIE!"; divResult.style.backgroundColor = "gray";}
    if (winner === "HUMAN"){divResult.textContent = "PLAYER WINS THE ROUND!"; divResult.style.backgroundColor = "lightgreen";}
    if (winner === "COMPUTER"){divResult.textContent = "COMPUTER WINS THE ROUND!"; divResult.style.backgroundColor = "#fd5c63";}
    container.appendChild(divResult)
}
function printDOMScore(score){
    const container = document.querySelector("#container");
    const divScore = document.createElement("div");
    divScore.textContent = `SCORE \n PLAYER ${score[0]} COMPUTER ${score[1]}`;
    divScore.style.backgroundColor = "lightblue";
    container.appendChild(divScore);
}
function printScore(score){
    console.log("Jugador: ", score[0], "-", score[1], " : Computadora");
}

function printWinner(winner){
    if (winner === "TIE"){console.log("TIE!");}
    if (winner === "HUMAN"){console.log("PLAYER WINS!");}
    if (winner === "COMPUTER"){console.log("COMPUTER WINS!");}

}
// FUNCTION updateScores
function updateScores(winner, score){
// IF TIE do nothing
if (winner === "TIE"){return score;}
// IF computer wins computer score goes up by 1
if (winner === "HUMAN"){
    score[0] = score[0] + 1;
    return score;
}
// IF player wins player score goes up by 1
if (winner === "COMPUTER"){
    score[1]= score[1] + 1;
    return score;
}
}

function welcome(){
    console.log("ROCK PAPER SCISSORS VS COMPUTER");
}

// PRINT welcome    
welcome();
// SET  score
let score = [0,0];
// Declaration of the buttons
printDOMScore(score);

const buttons = document.querySelectorAll("button");
const playAgain = document.querySelector("#playAgain");
buttons.forEach((button)=> {
    button.addEventListener("click", () => {
        

        let humanChoice = button.id;
        humanChoice = humanChoice.toUpperCase();
        let humanNumberChoice = convertToNum(humanChoice);
        let computerNumberChoice = getComputerChoice();
        let compHandSign = intToHandSign(computerNumberChoice);

        printChoices(humanChoice, compHandSign);
        printChoicesDOM(humanChoice, compHandSign);
        let winner = playRound(humanNumberChoice, computerNumberChoice);
        printWinner(winner);
        printDOMRoundWinner(winner);
        updateScores(winner, score);
        printDOMScore(score);
        checkWinner(score)
    });
});

// Theres only one champ!!
//printChampion();
