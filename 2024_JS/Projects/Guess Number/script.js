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
        }
    }

}
function checkGuess(guess){


}
function displayGuess(guess){

}
function displayMessage(){

}
function endGuess(guess){

}
function newGuess(guess){

}

