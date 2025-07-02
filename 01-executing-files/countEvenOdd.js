// Run this file with the node command:
// node countEvenOdd.js

console.log("Let's count from 1 to 10 and see which numbers are even or odd:");

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}
