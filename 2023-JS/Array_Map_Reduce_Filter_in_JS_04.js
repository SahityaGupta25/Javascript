let arrrr = [25, 16, 07];
console.log(arrrr)

// MAP 
let a = arrrr.map((value) => {
  console.log(value)
  return value
})
console.log(a)

//  we can write index and array in the arrow function just like this 

let b = arrrr.map((value, index, array) => {
  console.log(value, index, array)
  return value
})

// Filter
let c = arrrr.filter((a) => {
  return a < 20
})
console.log(c)

// Reduce
let d = arrrr.reduce((value1, value2) => {
  return value1 + value2
})
console.log(d);

