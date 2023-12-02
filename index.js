
const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return (choice);
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
         (playerSelection == "scissors" && computerSelection == "paper") ||
         (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    return "It's A Tie! Play Again!";
  } else if (result == "Player") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function getPlayerChoice () {
    let playerChoice = false;
    while(playerChoice == false){
        const choice = prompt("Rock Paper Scissors");
        if(choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            playerChoice = true;
            return choiceInLower;
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
        if (checkWinner(playerSelection, computerSelection) == "Player") {
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
        console.log("You Win!")
    }
    else if(scorePlayer < scoreComputer){
        console.log("You Lose!")
    }
    else {
        console.log("TIE!");
    }
}

game();
//This must be called for the program to work. It contains all the final functions