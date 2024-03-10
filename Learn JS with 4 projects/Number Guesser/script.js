const prompt = require("prompt-sync")()
let guesses = 0 
while (true) {
    guesses++;
    const target = Math.round(Math.random()*100)
    
    let guess = Number(prompt("Guess a Number (0-100) : "))
    if (guess > target) {
        console.log("Your guess is too high");
        console.log("The Actual number was",target);
        console.log("Total Guess =",guesses);
    }
    else if (guess < target){
        console.log("Your guess is too low");
        console.log("The Actual number was",target);
        console.log("Total Guess =",guesses);
        
    }
    else {
         console.log("You guessed it right ");
        break
    }
}
console.log("Number is =",target,"Finally you guessed it right!");
console.log("Total Guess =",guesses);