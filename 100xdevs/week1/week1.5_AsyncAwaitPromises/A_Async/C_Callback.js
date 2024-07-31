const fs= require("fs")
function afterRead(data){
    console.log(data)
}
function readfile(fun){
    fs.readFile("week1/week1.5_AsyncAwaitPromises/A_Async/async.txt","utf-8",(err,data)=>{
        fun(data);
    });
}
readfile(afterRead);
console.log("hi there")

// hi there
// Async functions vs sync functions:
// sync func means one after other or sequential execution of code
// async func means parallel execution of code