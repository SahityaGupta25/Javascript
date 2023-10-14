// Use Logical Operator to find whether the age of a person lies b/w 10 & 20?

let age = prompt("What's your age?");
if (age>=10 && age<=20) {
    console.log(alert('You are Eligible'));
}
else if (age<10) {
    console.log(alert('You are Not Eligible'));
}

// Demonstrate the Use of Switch Case Statement in Javascript 
let rollno = prompt("what's your roll no.??")
let no = Number.parseInt(rollno)
switch (no) {
    case 18:
        console.log(alert('Yes you Can Access'));
        break;

    default:
        console.log(alert('Not you are not 18+'));
        break;
}

// wrrite a Program in JS , to find whether a Number is divisible by 2 & 3

let num = prompt("what's your roll no.??")
let numb = Number.parseInt(num)
if (numb%2==0 && numb%3==0) {
    console.log(alert('Yes Divisible'));
}
else {
    console.log(alert('NOT Divisible'));
}


// wrrite a Program in JS , to find whether a Number is divisible by 2 or 3

let numbe = prompt("what's your roll no.??")
let number = Number.parseInt(numbe)
if (number%2==0 && number%3==0) {
    console.log(alert('Yes Divisible'));
}
else {
    console.log(alert('NOT Divisible'));
}


// Print "You can Drive" or "You cannot Drive" based on age being greater than 18 using Ternanry Operator.

let agex = "You can " , (agex>=18? 'Drive':'Cannot Drive');