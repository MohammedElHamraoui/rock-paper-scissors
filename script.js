let humanScore = 0,
  computerScore = 0;

const result = document.querySelector("#result");

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function playRound(humanChoice, computerChoice) {
  if (humanScore === 5 || computerScore === 5) return;

  let roundMessage = "";

  if (humanChoice === computerChoice) {
    roundMessage = "It's a Tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    roundMessage = `You win! ${capitalize(humanChoice)} beats ${capitalize(
      computerChoice
    )}`;
  } else {
    computerScore++;
    roundMessage = `Computer win! ${capitalize(
      computerChoice
    )} beats ${capitalize(humanChoice)}`;
  }

  result.innerHTML = `<span>${roundMessage}</span><br>Score: ${humanScore} - ${computerScore}`;

  if (humanScore === 5) {
    result.innerHTML += `<br><strong>You Won! Play Again?</strong>`;
  } else if (computerScore === 5) {
    result.innerHTML += `<br><strong>You lost! Play Again?</strong>`;
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

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let humanChoice = button.textContent.toLowerCase();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
});
