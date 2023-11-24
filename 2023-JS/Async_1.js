console.log("1");
console.log("2");
console.log("3");
setTimeout(function(){
    console.log("4");

},2000)
console.log("5");

//* Synchronous code executes line by line and if first line is not resolved the code execution will not move further.
// * Asynchrounous code waits till sync code gets finished its execution and then async code starts its execution and it can have some delay , it also takes something called as callbacks.