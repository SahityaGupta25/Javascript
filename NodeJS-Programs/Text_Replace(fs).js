const fs = require('fs')
let text = fs.readFileSync('Demo.txt',"utf-8")
console.log(text);
text = text.replace("text","Ujjwal")
const write = fs.writeFileSync('Demo.txt',text)
console.log(text);