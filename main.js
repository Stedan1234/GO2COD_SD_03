// Select DOM elements
const userScoreElement = document.getElementById("user-score");
const computerScoreElement = document.getElementById("computer-score");
const resultElement = document.getElementById("result");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resetButton = document.getElementById("reset");

// Initialize scores
let userScore = 0;
let computerScore = 0;

// Function to get the computer's choice randomly
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Function to determine the winner of a round
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a draw!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
    userScoreElement.textContent = userScore;
    return "You win this round!";
  } else {
    computerScore++;
    computerScoreElement.textContent = computerScore;
    return "Computer wins this round!";
  }
}

// Event listeners for choice buttons
rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));

// Function to play a round
function playRound(userChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);
  resultElement.textContent = `Computer chose ${computerChoice}. ${result}`;
}

// Reset game button functionality
resetButton.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  userScoreElement.textContent = userScore;
  computerScoreElement.textContent = computerScore;
  resultElement.textContent = "Make your move!";
});