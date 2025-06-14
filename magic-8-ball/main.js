let question = "Kapan bapak ku kembali?";
let num = Math.floor(Math.random() * 10);
let answer = ""; // simpan hasilnya di sini

if (num < 1 ) {
  answer = "Yes - definitely.";
} else if (num < 2) {
  answer = "It is decidedly so.";
} else if (num < 3) {
  answer = "Without a doubt.";
} else if (num < 4) {
  answer = "Reply hazy, try again.";
} else if (num < 5) {
  answer = "Ask again later.";
} else if (num < 6) {
  answer = "Better not tell you now.";
} else if (num < 7) {
  answer = "My sources say no.";
} else if (num < 8) {
  answer = "Outlook not so good.";
} else {
  answer = "Very doubtful.";
}

console.log("Question: " + question);
console.log("Magic 8 Ball: " + answer);
