let arr = [66,2,29,25,16]
let arr2 = arr
arr2.pop()
// console.log(arr);
// The last element of arr is poped : it means that in arr2 variable the reference of arr is stored not the elements were copied of that array.

let arr3 = [66,2,29,25,16]
let arr4 = [...arr3]
arr4.pop()
console.log(arr3);
// Now as you can see that the last element of arr3 is not poped beacause now elements are copied in arr4 of arr3 using spread operator