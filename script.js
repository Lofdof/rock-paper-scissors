let playerSelection;
let computerSelection;
let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";
let win = 0;
let draw = 0;
let lose = 0;

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
  playerSelection =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();
  switch (playerSelection) {
    case "Rock":
      break;
    case "Paper":
      break;
    case "Scissors":
      break;
    default:
      console.log("Please enter either Rock, Paper or Scissors");
      return;
  }

  computerSelection = computerPlay();

  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    win++;
    console.log(playerSelection + " vs. " + computerSelection + ". You win!");
  } else if (
    (playerSelection === "Rock" && computerSelection === "Rock") ||
    (playerSelection === "Paper" && computerSelection === "Paper") ||
    (playerSelection === "Scissors" && computerSelection === "Scissors")
  ) {
    draw++;
    console.log(playerSelection + " vs. " + computerSelection + ". Draw!");
  } else {
    lose++;
    console.log(playerSelection + " vs. " + computerSelection + ". You lost!");
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(i);
  }
}

game();
console.log("You won " + win + " times");
console.log("You tied " + draw + " times");
console.log("You lost " + lose + " times");

function result() {
  if (win > lose) {
    console.log("You won this game of 5! Congrats.");
  } else if (win < lose) {
    console.log("You lost this game of 5! Try again.");
  } else {
    console.log("It's a tie!");
  }
}

result();
