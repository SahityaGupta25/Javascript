let a = {} //Object literal
let ans = Object.create(null) // by using this object create method
function obj() {
this.name = 'krishna';
console.log(this.name);
    
}
new obj();

// 2nd way

class Abcd{
    constructor(){
a=12;
    }
}
let x = new Abcd();
console.log(x);