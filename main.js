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
    DRAW board
    SET player symbol
    SET computer symbol
    MAKE player turn
    MAKE pc turn
    VERIFY winner
    
*/
function welcome(){
    console.log("TIC TAC TOE");
}
function printTicTacToe(){
    for( i = 0; i < 3; i++){
        console.log("|...|...|...|");
        if (i < 2){
            console.log("_____________");
        }
        
    }
    
}

welcome();
printTicTacToe();