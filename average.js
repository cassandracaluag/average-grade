// Cassandra Caluag
// 2025 KKCF Tech Assignment: JavaScript Grading
// 07/15/2025

// initialize grades
const staticGrades = [45, 82, 17, 69, 38];

// iterate thru array
let staticSum = 0;
for (let i=0; i<staticGrades.length; i++) {
    staticSum += staticGrades[i];
}

// calculate average 
const staticAvg = staticSum / staticGrades.length;

// determine letter grade
let staticLetter = "F"; // default
switch (true) {
    case (staticAvg >= 91):
        staticLetter = "A";
        break;
    case (staticAvg >= 81):
        staticLetter = "B";
        break;
    case (staticAvg >= 71):
        staticLetter = "C";
        break;
    case (staticAvg >= 60):
        staticLetter = "D";
        break;
}

console.log("The grade letter average is: " + staticLetter);


// EXTRA CHALLENGE - CODING PORTION
console.log("");
console.log("EXTRA CHALLENGE");

// initialize empty list and empty string - user info will populate this later
let userTotal = 0;
let userLetter = "";
let arrScores = [];

// determine how many grades the user wants to input
const numGrades = Number(prompt("Hello! How many grades would you like to input?"))

for (let idx=0; idx<numGrades; idx++) {
    let userInput = Number(prompt("Please input Grade #" + (idx + 1) + ": "));
    arrScores.push(userInput);
    userTotal += userInput;
}

// calculate average
let userAvg = userTotal / numGrades;

// determine letter grade for user input
userLetter = "F"; // default
switch (true) {
    case (userAvg >= 91):
        userLetter = "A";
        break;
    case (userAvg >= 81):
        userLetter = "B";
        break;
    case (userAvg >= 71):
        userLetter = "C";
        break;
    case (userAvg >= 60):
        userLetter = "D";
        break;
}
console.log("Your entered grades are: " + arrScores);
console.log("The grade letter average is: " + userLetter);

// to separate results from other things in the browser console
console.log("");
console.log("");
console.log("");
console.log("");