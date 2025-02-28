// if there is a promise that returns a promise then we can chain the promises instead of nesting them
// or if we have to use another async operation after the first 
// this is called promise chaining
// promise chaining is done using the then method
function greet(name){
    // Promise takes a function as an argument which contains the work that is to be done
    // this function takes two arguments res and rej which are used to resolve and reject the promise
    // if the work is done successfully we call res and pass the data to
    // if the work is not done successfully we call rej and pass the error to it
    return new Promise((res, rej)=>{
        console.log("inside promise");// upto this point the promise is not async
        setTimeout(()=>{
            res("hello "+name)
        }, 1000)
    })
}
// here we are chaining the promises
greet("siva sai").then((data)=>{
    console.log(data)
    return greet("anwar")
}).then((data)=>{
    console.log(data)
    return greet("inwrsk")
}).then((data)=>{
    console.log(data)
})
console.log("end of script");
// inside promise
// end of script
// hello siva sai
// inside promise
// hello anwar
// inside promise
// hello inwrsk
// here we can see that promises are not acting as async functions until a specific async function is called