/*
Oct 24, 2022
This is the lagendary game [ Rock - Paper - Scissor]

Fixed June 6, 2023

The game start from line 95 and then the final score comparson starts from line 117.

*/

/////////////// Changing number of Match is optional /////////////////////
//Number of round to play. 
let numberOfRoundToPlay = 10; ///Changeable


//List possible selection by the team User and Computer 
const selectionArray = ['Rock', 'Paper', 'Scissor'];

//Generate random number for each user
generatingRandomNumber = () => {
    random = Math.floor(Math.random() * 3);
    return random;
};


//List to record the score points for each player
var userWinnings = []; 
var computerWinnings = [];



//Winning Rules function. 
function winner(userSelection, computerSelection){

    // if both user and compuer have the same selection
    if (userSelection === computerSelection){
        theWinner = "No winner";
        return theWinner;
    } else if (userSelection === "Rock" && computerSelection === "Paper") {
        // Paper beats Rock Computer wins
        computerWinnings.push("1"); //Add 1 to winning array
        theWinner = "Computer";
        return theWinner;
    } else if (userSelection === "Paper" && computerSelection === "Rock") {
        //Paper beats Rock User wins
        userWinnings.push("1"); //Add 1 to winning array
        theWinner = "User";
        return theWinner;
    } else if (userSelection === "Rock" && computerSelection === "Scissor") {
        //Rock beats Scissor User wins
        userWinnings.push("1"); //Add 1 to winning array
        theWinner = "User";
        return theWinner;
    } else if (userSelection === "Scissor" && computerSelection === "Rock") {
        //Rock beats Scissor Computer wins
        computerWinnings.push("1"); //Add 1 to winning array
        theWinner = "Computer";
        return theWinner;
    } else if (userSelection === "Scissor" && computerSelection === "Paper") {
        //Paper beats Scissor User wins
        userWinnings.push("1"); //Add 1 to winning array
        theWinner = "User";
        return theWinner;
    } else if (userSelection === "Paper" && computerSelection === "Scissor") {
         //Paper beats Scissor Computer wins
        computerWinnings.push("1"); //Add 1 to winning array
        theWinner = "Computer";
        return theWinner;
    };
};

/////////// Game Begins ///////// //////// ////////////////
console.log(" ");
console.log("Hello..."); //Greeting message
console.log(" ");
console.log("Welcome to the fun game Rock Paper Scissor Game......");


//Rounds output statement. This will output Rounds with s if it is plural, or without s if it is singular.
if (numberOfRoundToPlay < 2) {
    console.log(" ");
    console.log(`A Game of ${numberOfRoundToPlay} Round Only Has Started...`);
    console.log(" ");
    console.log(" ");
} else {
    console.log(" ");
    console.log(`A Game of ${numberOfRoundToPlay} Rounds Has Started...`);
    console.log(" ");
    console.log(" ");
};

//This is a for loop for the game, For every round.
//From round 1 going upward...
for (var round = 1; round <= numberOfRoundToPlay; round++) {
    //Setting selection for every round.
    userSelection = selectionArray[generatingRandomNumber()];
    computerSelection = selectionArray[generatingRandomNumber()];

    //Output every round with the round details and user score change. 
    console.log("////////////");
    console.log(`    ===>         Round ${round} started`);
    console.log(`           User selected ${userSelection} ...`);
    console.log(" ");
    console.log(`           Computer selected ${computerSelection} ...`);
    console.log(" ");
    console.log(`           The winner is in round ${round} is ${winner(userSelection, computerSelection)}`);
    console.log(" ");
    console.log(`                   User current score is ${userWinnings.reduce((accumulator, currentValue) => accumulator + (+currentValue), 0)}`)
    console.log(" ");
    console.log(`                   Computer current score is ${computerWinnings.reduce((accumulator, currentValue) => accumulator + (+currentValue), 0)}`)
    console.log(`    ===>         Round ${round} ended`);
    console.log("/////$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$////");
    console.log(" ");
    console.log(" ");
};

//Final result output analysis. This will compare user and computer score and see who won.
let userScore = userWinnings.reduce((accumulator, currentValue) => accumulator + (+currentValue), 0);
let computerScore = computerWinnings.reduce((accumulator, currentValue) => accumulator + (+currentValue), 0)
console.log(`$$$$$$$$$$$$$$$$   The Match of ${numberOfRoundToPlay} round/s is over   $$$$$$$$$$$$$$$$$$`);
console.log(" ");
if (userScore < computerScore) {
    // if user score is less than computer score (Computer Won)
    differenceInScore = Math.abs(computerScore - userScore);
    console.log(`The winner is Computer with the total score of ${computerScore} points.`);
    console.log(" ");
    console.log(`The User scored only  ${userScore} points.`);
    console.log(" ");
    console.log(`This is make the computer ${differenceInScore} points higher than user`);
    console.log(" ");
} else if (userScore > computerScore){
    // if computer score is less than computer score. (user Won)
    differenceInScore = Math.abs(computerScore - userScore);
    console.log(`The winner is User with the total score of ${userScore} points.`);
    console.log(" ");
    console.log(`The Computer scored only  ${computerScore} points.`);
    console.log(" ");
    console.log(`This is make the User ${differenceInScore} points higher than user`);
    console.log(" ");
} else {
    console.log(`Hard game. Unfortunatly no winner.`);
    console.log(" ");
    console.log(`The computer got  ${computerScore} points and the user fot ${userScore} points`);
    console.log(" ");
};