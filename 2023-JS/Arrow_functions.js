// 1.  Syntax 

// let xyz = () => {
//     return console.log("XYZ");
// }

// xyz()


// for single line code we can write like this as well it will automatically returns

// let xyz = () => a+b; // One Liner



// 2.   Arguments are not their in arrow function but we can use spread operator.

// const xyz = (...num) => console.log(num);



// xyz(66,16,25,29,2,93);

// 3.   Hoisting
// It only works on a normal function whether you declare a function later and call first it will works fine. As JS stores function in a memory first than stores call statement.

// xyz()

// function xyz(){
//     console.log("Hello");
// }

// 4.   "This" Keyword

// whenever I use this keyword in a regular function its scope will be local but in arrow function it will target to window Object simply to browser.

let obj1 = {
    value:66,
    name1:"sahtya",
    myfunction: ()=>{
        console.log(this.name1);
    },
};

obj1.myfunction()

