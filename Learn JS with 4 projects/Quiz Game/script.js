const prompt = require("prompt-sync")()
console.log("Welcome to the QUIZ GAME!");
let value = prompt("What is the brain of Computer")
console.log(value);
if (value === 'CPU') {
    console.log("You are Correct");
}
else{
    console.log("You are incorrect");
}

