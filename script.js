let humanScore = 0,
  computerScore = 0;

function playGame() {
  let humanSelection, computerSelection;
  for (let index = 0; index < 5; index++) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log(`Final Score — You: ${humanScore}, Computer: ${computerScore}`);
  console.log(
    humanScore > computerScore ? "You won the game!" : "Computer won the game!"
  );
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a Tie");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats Scissors");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats Rock");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats Paper");
    humanScore++;
  } else {
    console.log(
      `Computer win! ${
        computerChoice.at(0).toUpperCase() + computerChoice.slice(1)
      } beats ${humanChoice.at(0).toUpperCase() + humanChoice.slice(1)}`
    );
    computerScore++;
  }
}

function getHumanChoice() {
  let humanChoice;
  do {
    humanChoice = prompt(
      "What's your choice: \nR/r for rock \nP/p for paper \nS/s for scissors \n"
    );
  } while (!["r", "p", "s"].includes(humanChoice?.toLowerCase()));
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

document.addEventListener("DOMContentLoaded", () => {
  playGame();
});
