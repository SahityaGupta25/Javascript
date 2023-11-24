//^ For Each is a higher order function which means it consist aanother functiion , it means run a function for each member of an array and it applies on Array .  

// let a = [25,29,26,21]
// a.forEach(function(val){
//     console.log(val+2);
// })

//! Q.1 Write Hello in front of all elements of an array.

let a = [25,29,26,21]
a.forEach(function(val){
    console.log("Hello "+val);
})