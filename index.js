
const options = ["rock", "paper", "scissors"];
//An array must be created of available choices and then assigned to a variable

function getComputerChoice() {
//A function must be created for the computer's choice 
    const choice = options[Math.floor(Math.random() * options.length)];
//An expression must be created for the computer to make a random choice from the list of
//options in the array. The result of the expression is stored in a variable called choice.  
//To find the result, you use the options[] array. Within the brackets you must use the 
//Math.random method for the computer to make a random choice between 0 and 1. 
//Since this does not cover the all the choices we need, you must multiply by the number of
//choices available. The best way to do this is to multiply by the name of the array
//and use the .length method which uses the entire length of the array and will count
//each item. Furthermore, Math.random will always return a decimal because it only counts
//values between 0 and 1. In order to obtain a whole number, you must use the Math.floor
//function, which rounds DOWN to the nearest whole number. You must wrap up the random
//equation in the Math.floor equation to get the whole number.
    return (choice);
//Here the computer's choice is returned and that result is used whenever this 
//function is called
}

function checkWinner(playerSelection, computerSelection) {
//A function must be created which determines the result of the player's and the 
//computer's selection. 
//This function returns the result 
//This contains rules for how the game is played and determines
//HOW to win. When the function is created two parameters must be added. These 
//parameters must then be used as arguments every time the function is called.
//These parameters are variables that have been created in the function, game().
//These variables are created by the functions getComputerChoice() and getPlayerChoice().
    
//Conditionals must be written to check the player's selection against the computer's
//selection. 
    if (playerSelection === computerSelection) {
//This checks if the player's selection and the computer's selection are the same
        return "Tie";
//If pS and cS are the same, "Tie" is returned and stored for later use
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
         (playerSelection == "scissors" && computerSelection == "paper") ||
         (playerSelection == "paper" && computerSelection == "rock")
//This lists all rules of the game. This checks each play simultaneously. Each rule is
//separated by an or operator, ||. This part of the conditional checks the result of the
//player's selection first.
    ) {
        return "Player";
//This returns Player if the player's selection wins and is stored for later use
    }
    else {
        return "Computer";
//This return Computer if the computer's selection wins and is stored for later use
    }
}

function playRound(playerSelection, computerSelection) {
//A function must be created which determines the result of a round of play.
//This function returns a message of the result
//This contains rules for how the game is played and determines
//HOW to win. When the function is created two parameters must also be created. These
//parameters must then be used as arguments every time the function is called.
//These parameters are variables that have been created in the function, game().
//These variables are created by the functions getComputerChoice() and getPlayerChoice().
  const result = checkWinner(playerSelection, computerSelection);
//A variable is created to store the result of the checkWinner function
 
//A conditional is written to check the result of the checkWinner function
  if (result == "Tie") {
    return "It's A Tie! Play Again!";
  } else if (result == "Player") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
//To display a stored value, use ${}  
} else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}
//This function was created to obtain and store the player's choice
//which is then assigned to the playerSelection variable in the game() function
function getPlayerChoice() {
    let playerChoice = false;
//A variable is created to recognize the player's choice and is initially set to false
//to only allow input that matches the array
    while(playerChoice == false){
//A conditional is created based on the originally set value
        const choice = prompt("Rock Paper Scissors");
        //A variable is created to store the input gathered from the prompt
        if(choice == null) {
            continue;
        //A conditional is created so that if the input is nothing
        //or anything but what matches what's in the array,
        //then the continue keyword allows for a reset of the prompt window
        }
        const choiceInLower = choice.toLowerCase();
        //choice.toLowerCase() uses the variable choice that was gathered from 
        //the prompt above and converts that value to lower case. This value
        //is then stored in the variable choiceInLower
        if(options.includes(choiceInLower)){
        //A conditional is written that checks the array (options) and uses
        //the array method .includes() which checks if the value stored
        //in the variable (choiceInLower) matches one of the items in the
        //array (options)
            playerChoice = true;
        //This reassigns the value of the playerChoice variable to true 
        //if the conditional is met
            return choiceInLower;
        //This returns the input provided by the player as long as all 
        //conditions are met
        }
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
//Variables must be created to store round wins
// You must use let here instead of const because the variable needs to change
      console.log("Welcome!");
    for (let i = 0; i < 5; i++) {
    //a for loop is created to keep track of the number of rounds. There are 5 rounds so i must be set to less than 5
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("----------");
        //This places a line between the rounds in the console
        if (checkWinner(playerSelection, computerSelection) == "Player"){
            scorePlayer++;
        }
        else if (checkWinner(playerSelection, computerSelection) == "Computer"){
            scoreComputer++;
         }
    }
    console.log("Game Over");
    //This prints after 5 rounds have been played
    if(scorePlayer > scoreComputer){
    //This checks the score between the player and the computer
        console.log("You Win!");
    }
    else if(scorePlayer < scoreComputer){
        console.log("You Lose!");
    }
    else {
        console.log("TIE!");
    }
}

//This must be called for the program to work. It contains all the final functions
game();
