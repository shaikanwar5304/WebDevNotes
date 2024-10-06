const fs= require("fs");
//this is also a asynchronous function
fs.readFile("week1/week1.5_AsyncAwaitPromises/A_Async/async.txt","utf-8",(err,data)=>{
    console.log(err);
    console.log(data);
})
console.log("print statement after fs.readfile")

// print statement after fs.readfile
// null
// text in async.txt