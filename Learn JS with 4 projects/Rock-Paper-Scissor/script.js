const prompt = require("prompt-sync")()

let win =0 
let loss = 0
let ties = 0 
let playerChoice = prompt("Rock or Paper or Scissors : ").toLowerCase()

    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice  !== "scissors") {
        console.log("Invalid Choice");
    }
    if(playerChoice === computerchoice){
        console.log("Draw!");
        ties++;
    }
    else if ((playerChoice === "paper" && computerchoice=== "rock") || (playerChoice === "rock" && computerchoice=== "scissors") || (playerChoice === "scissors" && computerchoice=== "paper")){
            console.log("You won!");
            win++;
    }
    else {
        console.log("You lose");
        loss++;
    }
const choices = ["rock","paper","scissors"]
const randomIndex = Math.round(Math.random()*2);
const computerchoice = choices[randomIndex]
console.log(computerchoice); 