// File System is Core Module in Node JS a non global module which means we must import those modules before use 
//  Global - COnsole.log , filename etc
//  LOcal - Buffer , file system etc


let fs = require('fs');
console.log("directory",__dirname);
console.log(`filename`,__filename);


// .writeFileSync is used to create new files in the same module.
let fs = require('fs').writeFileSync;
fs("abc.txt",'xyz');
