// Write a program using prompt function to take input of age as a value from the user and we alert to tell him that he can drive or not.

let a = prompt("Enter your Age")
Number.parseInt(a)
if (a>=18){
  alert("You can Drive");
}
else{
  alert("You can't drive");
}

// 2. In Q1 use confirm to ask user if he wants to see prompt again.

// 3. Use Console.error in first question and log error if age entered in -ve.

let b = prompt("Enter your Age")
Number.parseInt(b)

if (b >= 18) {
  alert("You can Drive");
}
else if (b < 0) {
  console.error("Invalid Age")
} else {
  alert("You can't drive");
}


// 4 . If User Enters a Number greater than 5 than Re-direct him/her to replit.com

let c = prompt("Enter a Number")
Number.parseInt(c)
if (c>5){
  location.href = "https://replit.com"
}

//   5. Change Background colour according to the input of a user by prompt.