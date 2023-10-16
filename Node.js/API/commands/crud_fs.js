const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'CRUD_fs');
const filepath = `${dirpath}/apple.txt`;

//          CREATE
// fs.writeFileSync(filepath,"This is a simple text file");


//          READ
// fs.readFile(filepath,'utf8',(err,items)=>{
//     console.log(items);
// })


//          APPEND
// fs.appendFile(filepath,'and file name is apple.txt',(err)=>{
//     if (!err) {
//         console.log("file is updated");
//     }
// });

//          RENAME
// fs.rename(filepath,`${dirpath}/fruit.txt`,(err)=>{
//     if (!err) console.log('File is renamed');
// })



//          DELETE
fs.unlinkSync(`${dirpath}/fruit.txt`);

// Buffer is a small amount of memory which is required to do a process of a Node.js.
