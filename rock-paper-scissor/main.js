// Write code below 💖

let playerChoice = "Scissors";
let computerChoice = "";
let num = Math.floor(Math.random() * 3);

if (num < 1) {
  computerChoice = "Scissors";
} else if (num < 2) {
  computerChoice = "Paper";
} else {
  computerChoice = "Rock";
}

// Penentuan Pemenang

let result = "";

if (playerChoice === computerChoice) {
  result = "Draw";
} else if (
  (playerChoice === "Rock" && computerChoice === "Scissors") ||
  (playerChoice === "Scissors" && computerChoice === "Paper") ||
  (playerChoice === "Paper" && computerChoice === "Rock")
) {
  result = "You Win"
} else {
  result = "You Lose"
}

console.log("Player Memilih: " + playerChoice);
console.log("Computer Memilih: " + computerChoice);
console.log("Hasilnya: " + result);

