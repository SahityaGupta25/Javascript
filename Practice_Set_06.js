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

let a = prompt("Enter your Age")
Number.parseInt(a)

if (a >= 18) {
  alert("You can Drive");
}
else if (a < 0) {
  console.error("Invalid Age")
} else {
  alert("You can't drive");
}