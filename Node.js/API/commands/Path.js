const fs = require('fs');
const path = require('path');
                // I want to check path of a particular directory
let dirpath = path.join(__dirname,'filenames')


// creating 10 files using loop in a particular directory
for (let index = 0; index < 10; index++) {
    fs.writeFileSync(`${dirpath}/myfile${index}.txt`,"it's a simple text file");
    
}
