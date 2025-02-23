// what is a promise?
// its a replacement for callback functions
// usually we call the callback function when the async operation is completed
// if there are multiple async operations depending on each other then we have to nest the callbacks
// this is called callback hell
// to avoid this we use promises
// promises will return a promise first
// and then if the async operation completed it resolves and sends the data 
// if the async operation fails it rejects and sends the error
// promises have 3 states
// pending
// resolved
// rejected
// inorder to do the async operation or any work promise takes a function as an argument
// this function takes 2 arguments (resolve, reject) which are functions 
// resolve is called when the async operation is completed
// reject is called when the async operation fails
// these funtions help in changing the state of the promise and also sending the data or error
function func(){
    return new Promise((res, rej)=>{
        console.log("inside promise before setTimeout");
        setTimeout(()=>{
            res("hello")
        }, 2000)
        console.log("inside promise after setTimeout");
    })
}
let p = func()
console.log("outside promise before then");
console.log(p)
p.then((data)=>{
    console.log(data)
})
console.log("outside promise after then");
console.log(p)
// inside promise before setTimeout
// inside promise after setTimeout
// outside promise before then
// Promise { <pending> }
// outside promise after then
// Promise { <pending> }
// hello