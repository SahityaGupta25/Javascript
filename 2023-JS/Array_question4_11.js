//  High Order Function 

function Abcd(inp){
    return (function (inp2) {return inp+inp2});
    }
console.log(Abcd(10)(20));
