/* 
Your task: Make a dog age calculator with Node.js!
Follow the instructions in the README.md file in this folder.
Run this file with the node command:
node dogAgeCalculator.js
*/
//dog name
let dogName = process.argv[2];
// the human age of the dog
let humanAge = Number(process.argv[3]);

//Year 1 of a dog's life is 15 dog years
let oneDogYear = 15;
//Year 2 is the equivalent of another 9 years.
let twoDogYear = oneDogYear + 9;
//Every year after that is the equivalent of another 5 years.
let threePlusDogYears = twoDogYear + (humanAge - 2) * 5;

//one year = 15
// two = 15 + 9
//three years 15 + 9 + 5
//four years is 15 + 9 + 5 + 5
//five years is 15 + 9 + 5 + 5 + 5

if (humanAge > 0)
  console.log(
    `${dogName} is ${humanAge} years old in human years and ${threePlusDogYears} in dog years`
  );
else console.log("please enter a number");

//if dogName:"ziggy" humanAge is 7.5 his dog age would be 51.5 years old
// i would not round it up due to the fact age isnt something to round up 7.5 years old meand 7 years old and 5 months
