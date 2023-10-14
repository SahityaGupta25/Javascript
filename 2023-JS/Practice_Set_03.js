// 1 . Write a Program to print marks of students in an object using for loop
//     marks = {harry:98,yash:40,rohan:12}

marks = { harry: 98, yash: 40, rohan: 12 }
for (let i=0 ; i<Object.keys(marks).length ; i++){
    console.log('The Marks of ' + Object.keys(marks)[i] +' '+ marks[Object.keys(marks)[i]]);
}

// 2 . Do 1st Question Using FOR in LOOP
//     marks = {harry:98,yash:40,rohan:12}
    marks = { harry: 98, yash: 40, rohan: 12 }
for (let key in marks){
    console.log('The Marks of ' + key + ' is = ' + marks[key]);
}

// 3 . Write a Program which prints "Try Again " until the user Prints Correct Number.

let cn=5
let n
while (n!=cn) {
    console.log(`Try Again`);
    n = prompt('Enter Correct Number');
}
console.log('Correct!')

// 4. Write a function to calculate mean of 5 numbers.

// function meann(a,b,c,d,e) {
//     let a = prompt("Enter value of a")
//     let b = prompt("Enter value of b")
//     let c = prompt("Enter value of c")
//     let d = prompt("Enter value of d")
//     let e = prompt("Enter value of e")
//     let form = ((a+b+c+d+e)/5)
//     console.log(form)
// }
let meann = (a,b,c,d,e) => {
    return(a+b+c+d+e)/5
}
console.log(mean(66,25,16,9,29));