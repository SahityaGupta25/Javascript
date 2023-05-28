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