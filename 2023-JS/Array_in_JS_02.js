

let x = [34, 67, 89, 45, 56, 76, 43, 32, 41]
delete x[0]
console.log(x)
// Array Length will not Change after deleting element

let x1 = [3, 6, 7, 8, 9, 23];
let nw_array = x.concat(x1)
console.log(nw_array);
// Returns a New Array without changing its existing Array

// Sort Method
let z = x1.sort()
console.log(z)
// It Sort in Alphabetical Order one , two ,three...........


let compare = (a, b) => {
  return a - b
}
let num = [3, 6, 7, 8, 9, 23, 66]
num.sort(compare)
console.log(num)

let a_1 = num.reverse()
console.log(a_1)

let num_1 = [36, 25, 66, 93, 16, 2, 29]
num_1.splice(0, 1, 20)
// (Index No, How many elements, which element to add)
console.log(num_1)

let num_2 = num_1.slice(2,5);
console.log(num_2)