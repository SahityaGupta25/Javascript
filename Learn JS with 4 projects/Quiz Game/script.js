const prompt = require("prompt-sync")()
console.log("Welcome to the QUIZ GAME!");
let value = prompt("What is the brain of Computer  ")
console.log(value);
if (value.toUpperCase() === 'CPU') {
    console.log("You are Correct");
}
else{
    console.log("You are incorrect");
}

let value2= prompt("Which one is better 1050ti or 1650ti  ")
let answer2 = "1650ti"
if (value2.toLowerCase() === answer2 ) {
    console.log("Correct 1650ti is better");
} else {
    console.log("Incorrect , 1650ti is better");
    
}

