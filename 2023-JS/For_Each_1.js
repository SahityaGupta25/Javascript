//^ For Each is a higher order function which means it consist aanother functiion , it means run a function for each member of an array and it applies on Array .  

// let a = [25,29,26,21]
// a.forEach(function(val){
//     console.log(val+2);
// })

//! Q.1 Write Hello in front of all elements of an array.

// let a = [25,29,26,21]
// a.forEach(function(val){
//     console.log("Hello "+val);
// })

// ! Q.2 Print all elements who are smaller or equal to 25 .

// let a = [6,25,16,29,26,21]
// a.forEach(function(val){
//     if (val<=25) {
//         console.log(val);
//     }
// })


// ! Q.3 Sum all the elements of array.
// let summ = 0
// let a = [6,25,16,29,26,21]
// a.forEach(function(val){
//     summ += val

// })
// console.log("The Total is = ",summ);



// ! Q.4 Add all elements except string.


let summ = 0
let a = [6,'660',25,16,'66',29,26,21]
a.forEach(function(val){
    if (typeof val === "number") {
        summ += val
    }
})

console.log("The Total is = ",summ);