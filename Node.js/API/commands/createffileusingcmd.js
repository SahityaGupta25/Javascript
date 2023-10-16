const fs = require("fs");

const input = process.argv;
// (Used to create file ,second parameter is used to enter data in the file )

// 2nd way

if (input[2] == "add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] == "remove") {
  fs.unlinkSync(input[3]);
} else {
  console.log("Invalid Input");
}
