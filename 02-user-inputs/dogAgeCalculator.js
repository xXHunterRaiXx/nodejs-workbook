/* 

Your task: Make a dog age calculator with Node.js!

Follow the instructions in the README.md file in this folder.

Run this file with the node command:
node dogAgeCalculator.js

*/
let dogName = process.argv[2];
let humanAge = Number(process.argv[3]);

let oneDogYear = 15;
let twoDogYear = oneDogYear + 9;
let threePlusDogYears = twoDogYear + (humanAge - 2) * 5;
console.log(
  `${dogName} is ${humanAge} years old in human years and ${threePlusDogYears} in dog years`
);
//   );)
//one year = 15
// two = 15 + 9
//three years 15 + 9 + 5
//four years is 15 + 9 + 5 + 5
//five years is 15 + 9 + 5 + 5 + 5

// if (humanAge === 1) {
//   console.log(
//     `${dogName} is ${humanAge} years old in human years and ${oneDogYears} in dog years`
//   );
// }

// if (humanAge === 2) {
//   console.log(
//     `${dogName} is ${humanAge} years old in human years and ${twoDogYearDogYears} in dog years`
//   );
// } else {
//   console.log(`${threePlusDogYears} in dog years `);
// }
