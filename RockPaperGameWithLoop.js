/*
Oct 24, 2022
This is the lagendary game [ Rock - Paper - Scissor]
*/


//These are the selection which each user should select from.
const selectionArray = ['Rock', 'Paper', 'Scissor'];

//These are some Array created to be filled with "1" point or "0" point.
let userWinnings = ['s']; 
let computerWinnings =  ['s'];

//This function is to generate random number for each user
generatingRandomNumber = () => {
  random = Math.floor(Math.random() * 3);
  return random;
};

//////////////////

function winner(userSelection, computerSelection){
    // if both user and compuer have the same selection
    if (userSelection === computerSelection){
        winning = "No winner";
    }
    // Paper Beat Rock
    if (userSelection === "Rock" && computerSelection === "Paper") {
        computerWinnings.push("1");
    }
    if (userSelection === "Paper" && computerSelection === "Rock") {
        userWinnings.push("1");
    }

    //Rock Beats Scissor
    if (userSelection === "Rock" && computerSelection === "Scissor") {
        userWinnings.push("1");
    }
    if (userSelection === "Scissor" && computerSelection === "Rock") {
        computerWinnings.push("1");
    }

    //Scissor Beat Paper
    if (userSelection === "Scissor" && computerSelection === "Paper") {
        userWinnings.push("1");
    }
    if (userSelection === "Paper" && computerSelection === "Scissor") {
        computerWinnings.push("1");
    }
}    


//////////////////



playing = true;

while ((userWinnings.length) != 11 || (computerWinnings.length) != 11) {
    userSelection = selectionArray [generatingRandomNumber()];
    computerSelection = selectionArray[[generatingRandomNumber()]];
    //console.log(`User has selected ====> ${userSelection}     Computer has selected ${computerSelection} `);
    winner(userSelection,computerSelection);
    if (userWinnings.length === 11 || computerWinnings.length ===11) {
        if (userWinnings.length ===11) {
            winningAnnouncement = "User won 10 games.....";
            console.log(winningAnnouncement);
            playing = false;
        } else if (computerWinnings.length === 11) {
            winningAnnouncement = "Computer won 10 games.....";
            console.log(winningAnnouncement);
            playing = false;
        }
    } else {
      playing = true;
    };
  } ;


