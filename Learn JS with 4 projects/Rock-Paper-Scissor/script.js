const prompt = require("prompt-sync")()
console.log("Welcome to the QUIZ GAME!");
let correctAnswer = 0 ;
let totalQuestion = 3;
console.log("Question 1");
let value = prompt("What is the brain of Computer  ")
console.log(value);
if (value.toUpperCase() === 'CPU') {
    console.log("You are Correct");
    correctAnswer++;
}
else{
    console.log("You are incorrect");
}
console.log("Question 2");
let value2= prompt("Which one is better 1050ti or 1650ti  ")
let answer2 = "1650ti"
if (value2.toLowerCase() === answer2 ) {
    console.log("Correct 1650ti is better");
    correctAnswer++;
} else {
    console.log("Incorrect , 1650ti is better");
    
}
console.log("Question 3");
let value3= prompt("Minimum Ram required for video editing  ")
let answer3 = "16gb"
if (value3.toLowerCase() === answer3 ) {
    console.log("Correct 1650ti is better");
    correctAnswer++;
} else {
    console.log("Incorrect , 1650ti is better");
    
}
let percentage = Math.round((correctAnswer/totalQuestion)*100) 

console.log("Total Percentage =",percentage.toString(),"%");

