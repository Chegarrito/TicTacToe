/*
Does your program have a user interface? Yes
What will it look like? #
 What functionality will the interface have? 
 To make visible the game to the player and that he can look what spaces are available

 Sketch this out on paper.



What inputs will your program have?
Symbol and the location where this symbol will go

Will the user enter data or will you get input from somewhere else?
User


What’s the desired output?
Verify if theres a winner, change the location with the symbol the player is using


Given your inputs, what are the steps necessary to return the desired output?

Check if the location is available
IF available
    CHANGE the location with the symbol of the player
ElSE 
    PRINT error
    ASK to choose a different location

*/
/*
    PRINT welcome
    DRAW board
    SET player symbol
    SET computer symbol
    MAKE player turn
    MAKE pc turn
    VERIFY winner
    
*/
// Widht of the hashmap
const ARRWIDTH = 3
// Height of the hashmap
const ARRHEIGHT = 3
// PRINT welcome
function welcome(){
    console.log("TIC TAC TOE");

}

// DRAW board
function printTicTacToe(){
    // SET count to 1
    let count = 1;
    // FOR 3 rows
    for( i = 0; i < 3; i++){
        // PRINT |1|2|3|
        console.log("|",count ,"|",count + 1,"|",count + 2,"|");
        // IF we are before the last row
        if (i < 2){
            // PRINT underline
            console.log("_____________");
        }
        // Add 3 to the count
        count += 3;
    }
}
// GET player Symbol
function playerSymbol(){
    let condition = false;
    do{
        // GET symbol from user
        let x_or_O = prompt("Choose your symbol for this game", "X / O");
        // CONVERT to upper case
        x_or_O = x_or_O.toUpperCase();
        // IF the symbol is right
        if  (x_or_O === "X" || x_or_O === "O"){
            // return symbol
            return x_or_O;
        }
    }
    while(condition === false);
    
}
// SET computer symbol at the tictactoe game X/O
function computerSymbols(player1Symbol){
    computerSymbol = '';
    if (player1Symbol === 'X'){
        computerSymbol = "O";
        return computerSymbol;
    }
    else {
        computerSymbol = "X";
        return computerSymbol;
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice() {
    getRandomInt(3);
}

function getHumanChoice() {

}

// PRINT welcome
welcome();
// DRAW board
printTicTacToe();
//CREATE hash map/grid 3x3

// GET player symbol at the tictactoe game. (X or O)
let humanSign = playerSymbol();
// SET computer symbol 
let computerSign = computerSymbols(humanSign);

getHumanChoice();
getComputerChoice()