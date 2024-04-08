const randomNumber = parseInt(Math.random() *100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSLot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHI = document.querySelector('.lowOrHi')
const startOver = document.querySelector('resultParas')

const p = document.createElement('p')

const prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault
        const userGuessed = parseInt(userInput.value)        
        // console.log(userGuessed);
        validateGuess(userGuessed)
    })
}

function validateGuess(userGuessed){
    if (isNaN(userGuessed)) {
        alert("Please Enter a valid number")
    } else if (userGuessed < 1) {
        alert("Please Enter a Natural Number (1-100)")
    }
    else if (userGuessed>100){
        alert("Please Enter a Natural Number (1-100)")
    }
    else{
        prevGuess.push(userGuessed)
        if (userGuessed === 11){
                displayGuess(userGuessed)
                displayMessage(`Game Over. Your random guess was = ${userGuessed}`)
                endGame()
        }else{
            displayGuess(userGuessed)
            checkGuess(userGuessed)
        }
    }

}
function checkGuess(guess){
if(guess === randomNumber){
    displayMessage(`You guessed it right. ${guess} is same as the ${randomNumber}.  `);
    endGame()
}else if (guess<randomNumber){
    displayMessage("Your guess is Too low")
}
else if (guess>randomNumber){
    displayMessage("Your guess is Too High")
}
function displayGuess(guess){

}
function displayMessage(){

}
function endGame(guess){

}
function newGuess(guess){

}

}