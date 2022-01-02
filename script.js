let playerSelection;
let computerSelection;
let rock = "rock";
let paper = "paper";
let scissors = "scissors";

function computerPlay() {
  computerSelection = Math.floor(Math.random() * 3);
  if (computerSelection === 0) {
    return rock;
  } else if (computerSelection === 1) {
    return paper;
  } else if (computerSelection === 2) {
    return scissors;
  }
}

// PLAY
// 0 == rock
// 1 == paper
// 2 == scissors

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Rock, Paper or Scissors?");
  playerSelection = playerSelection.toLowerCase();
  switch (playerSelection) {
    case "rock":
      break;
    case "paper":
      break;
    case "scissors":
      break;
    default:
      console.log("Please enter either Rock, Paper or Scissors");
      return;
  }

  computerSelection = computerPlay();

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(playerSelection + " vs. " + computerSelection + ". You win!");
  } else if (
    (playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "scissors")
  ) {
    console.log(playerSelection + " vs. " + computerSelection + ". Draw!");
  } else {
    console.log(playerSelection + " vs. " + computerSelection + ". You lost!");
  }
}

function game() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
}

game();
