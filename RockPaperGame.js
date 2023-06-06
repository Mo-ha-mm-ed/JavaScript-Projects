/*
Oct 13, 2022
This is the lagendary game [ Rock - Paper - Scissor]
*/

// Create random number for each player. User VS. Computer.
var userSelectNumber = Math.floor(Math.random() * 3);
var computerSelectNumber = Math.floor(Math.random() * 3);

//This function will assign user selection to [0- Rock , 1-Paper, 2-Scissor].
function user(userSelectNumber) {
    if (userSelectNumber === 0){
        console.log(" ");
        userSelection = "Rock";
        console.log(`User Selected ${userSelection}`);
        console.log(" ");
    }
    if (userSelectNumber === 1){
        console.log(" ");
        userSelection = "Paper";
        console.log(`User selected ${userSelection}`);
        console.log(" ");
    }
    if (userSelectNumber === 2){
        console.log(" ");
        userSelection = "Scissor";
        console.log(`User selected ${userSelection}`);
        console.log(" ");
    }

}
// Call out user selection function
user(userSelectNumber);

//This function will assign Computer selection to [0- Rock , 1-Paper, 2-Scissor].
function computer(computerSelectNumber) {
    if (computerSelectNumber === 0){
        computerSelection = "Rock";
        console.log(`Computer Selected ${computerSelection}`);
        console.log(" ");
    }
    if (computerSelectNumber === 1){
        computerSelection = "Paper";
        console.log(`Computer selected ${computerSelection}`);
        console.log(" ");
    }
    if (computerSelectNumber === 2){
        computerSelection = "Scissor";
        console.log(`Computer selected ${computerSelection}`);
        console.log(" ");
    }

}
// Call out Computer selection function
computer(computerSelectNumber);

///This function will determine the winning.

function winner(userSelection, computerSelection){
    // if both user and compuer have the same selection
    if (userSelection === computerSelection){
        winning = "No winner";
        console.log(winning);
        console.log(" ");
    }
    // Paper Beat Rock
    if (userSelection === "Rock" && computerSelection === "Paper") {
        winning = "Computer won!!";
        console.log(winning);
        console.log(" ");
    }
    if (userSelection === "Paper" && computerSelection === "Rock") {
        winning = "User won!!";
        console.log(winning);
        console.log(" ");
    }

    //Rock Beats Scissor
    if (userSelection === "Rock" && computerSelection === "Scissor") {
        winning = "User won!!";
        console.log(winning);
        console.log(" ");
    }
    if (userSelection === "Scissor" && computerSelection === "Rock") {
        winning = "Computer won!!";
        console.log(winning);
        console.log(" ");
    }

    //Scissor Beat Paper
    if (userSelection === "Scissor" && computerSelection === "Paper") {
        winning = "User won!!";
        console.log(winning);
        console.log(" ");
    }
    if (userSelection === "Paper" && computerSelection === "Scissor") {
        winning = "Computer won!!";
        console.log(winning);
        console.log(" ");
    }
}    

//Output result. Call out winner function. 
winner(userSelection, computerSelection);
console.log(" ");
console.log("End....");
console.log(" ");
console.log(" ");