function getHumanChoice() {
  let humanChoice = prompt(
    "What's your choice: \nR for rock \nP for paper \nS for scissors"
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

let humanChoice = getHumanChoice();

let computerChoice = getComputerChoice();
