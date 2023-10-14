let x = [34, 67, 89, 90, 23, 12, 45, 56, 64]
for (let i = 0; i < x.length; i++) {
  console.log(x[i])
}  // General Pattern of Loop

// Using Arrow Function
x.forEach((element)=>{
  console.log(element*element)
})

// Array.from()
let nam = 'Mathew'
let arr = Array.from(nam)
console.log(arr)

// for of
for (let i of x){
  console.log(i)
}


// for in
for (let item of x){
  console.log(item)
}
// It gives the key means index number
