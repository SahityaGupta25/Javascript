const { error } = require('console');
const fs = require('fs');
const path = require('path');
                // filenames is the name of the folder I want to check path of a particular directory
let dirpath = path.join(__dirname,'filenames')

// for listing the directories you should use this

fs.readdir(dirpath,(errore,myfiles)=>{
    console.log(myfiles);
})

// we can use this with for each loop to access all elements one by one 

fs.readdir(dirpath,(err,files)=>{
    files.forEach((items)=>{
        console.log("File name is =",items);
    })
})
