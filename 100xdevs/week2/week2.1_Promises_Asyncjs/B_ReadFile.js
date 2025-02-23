const fs = require("fs");
console.log("Demonstration that readFile is async as that reading data is performed by os");
fs.readFile("100xdevs/week2/week2.1_Promises_Asyncjs/AB_ReadFile.txt", "utf-8", function (err, data){
    console.log("inside readFile");
    console.log("error message:",err);    
    console.log("data:",data);    
})
console.log("after readFile");
// Demonstration that readFile is async as that reading data is performed by os
// after readFile
// inside readFile
// error message: null
// data: inside file... 