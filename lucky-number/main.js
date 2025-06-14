const luckyNumber = 7
let guess = Math.floor(Math.random() * 10) + 1;

while(guess !== luckyNumber) {
  console.log("Tebakan kamu salah: " + guess);
  guess = Math.floor(Math.random() * 10) + 1;
}

console.log("Tebakan benar! angkanya adalah " + guess);
