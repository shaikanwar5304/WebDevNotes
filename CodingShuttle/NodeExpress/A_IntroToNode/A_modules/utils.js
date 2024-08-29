function multiply(a,b){
    return a*b
}
log={
    warning: (msg)=>{
        console.log("warning msg : ",msg)
    },
    err:(msg)=>{
        console.log("error msg : ", msg)
    }
}
module.exports= {multiply,log}