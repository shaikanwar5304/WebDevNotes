const fs = require("fs");
// readFileSync is synchronous i.e it stops the execution of the code until the file is read
// alterative for readFileSync is readFile which is async
// it takes callback func which it executes after the file is read
// but not suggested as it blocks the thread and prevents the code from executing
let data = fs.readFileSync("100xdevs/week2/week2.1_Promises_Asyncjs/AB_ReadFile.txt", "utf-8");
console.log(data);
console.log("after reading file");
// inside file...
// after reading file
