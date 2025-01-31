function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a Tie");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats Scissors");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats Rock");
    humanScore++;
  } else if (humanChoice === "scissor" && computerChoice === "paper") {
    console.log("You win! Scissors beats Paper");
    humanScore++;
  } else {
    console.log(`JComputer win! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
}

function getHumanChoice() {
  let humanChoice = prompt(
    "What's your choice: \nR/r for rock \nP/p for paper \nS/s for scissors"
  );
  switch (humanChoice.toLowerCase()) {
    case "r":
      return "rock";
    case "p":
      return "paper";
    default:
      return "scissors";
  }
}

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    default:
      return "scissors";
  }
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();

const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
