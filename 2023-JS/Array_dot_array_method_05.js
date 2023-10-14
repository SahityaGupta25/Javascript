// Ways to check array in JS
function checkarray(num) {

   return Array.isArray(num) 
}

// console.log(checkarray(9));
// console.log(checkarray([9]));


// 2nd way

function checkarray1(num) {

   return num instanceof Array;
    
}
console.log(checkarray1([1,2,3,4]));
console.log(checkarray1("Mathew"));

