const readline = require("readline");

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getRandomChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      return ROCK;
    case 2:
      return SCISSORS;
    case 3:
      return PAPER;
    default:
      return ROCK;
  }
}

function battle(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === ROCK && computerChoice === SCISSORS) ||
    (playerChoice === PAPER && computerChoice === ROCK) ||
    (playerChoice === SCISSORS && computerChoice === PAPER)
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

read.question("Enter your choice (rock, paper, scissors): ", (playerChoice) => {
  playerChoice = playerChoice.toLowerCase(); // Convert to lowercase for case-insensitive comparison
  const computerChoice = getRandomChoice();

  console.log("You chose:", playerChoice);
  console.log("Computer chose:", computerChoice);
  console.log(battle(playerChoice, computerChoice));

  read.close();
});
