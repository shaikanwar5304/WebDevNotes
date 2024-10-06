const fs = require("fs")
function  readit(){
    console.log("inside readit before promise")
    return new Promise((res,rej)=>{
        fs.readFile("week1/week1.5_AsyncAwaitPromises/A_Async/async.txt",'utf-8',(err,data)=>{
            console.log("inside promise before res");
            res(data)
            console.log("inside promise after res");
        });
    })
    //console.log("inside readit after promise") //not reachable
}
function printdata(data){
    console.log(data)
    console.log(p)
}
console.log("before readit")
let p=readit()
console.log(p)
p.then(printdata)
console.log(p)
console.log("after readit")
for(let i=0;i<10000;i++){
    console.log(i)
}

// before readit
// inside readit before promise
// Promise { <pending> }
// Promise { <pending> }
// after readit
// 0
// 1
// .
// .
// 9999
// inside promise before res
// inside promise after res
// data inside the async.txt file
// Promise { 'data inside the async.txt file' }