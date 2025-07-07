// Let's make a tip calculator with Node.js!

// Run this file with the node command:
// node tipCalculator.js

// let bill = 100;
let bill = Number(process.argv[2]);
let tipPercentage = Number(process.argv[3]);
let numGuests = Number(process.argv[4]);

let tipAmouunt = bill * tipPercentage;
console.log("tip amount", tipAmouunt);

let totalBill = bill + tipAmouunt;
console.log("total bill", totalBill);

let amountOwnedPeGuuest = totalBill / numGuests;
console.log("each guuest owns", amountOwnedPeGuuest);
