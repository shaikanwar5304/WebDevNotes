// if there is a promise that returns a promise then we can chain the promises instead of nesting them
// or if we have to use another async operation after the first 
// this is called promise chaining
// promise chaining is done using the then method
function greet(name){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("hello "+name)
        }, 1000)
    })
}
greet("siva sai").then((data)=>{
    console.log(data)
    return greet("anwar")
}).then((data)=>{
    console.log(data)
    return greet("inwrsk")
}).then((data)=>{
    console.log(data)
})
// hello siva sai
// hello anwar
// hello inwrsk