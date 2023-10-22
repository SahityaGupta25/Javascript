

let a = 'I am healthy'

let saved_STR=a.split(" ").map(function(word){
    return word.split("").reverse().join("")
})

console.log(saved_STR.join(" "));