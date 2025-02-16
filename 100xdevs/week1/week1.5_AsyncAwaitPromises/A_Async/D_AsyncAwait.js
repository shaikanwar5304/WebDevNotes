//await stops the execution of the function until the promise is resolved
//await must be wrapped inside async
//the synchronous code after the function call is not blocked by the await
function promFunc()
{
    return new Promise((res,rej)=>{
        console.log("before settimeout");
        setTimeout(()=>{
            res("resolved")
        },2000)
        console.log("after settimeout");
    })
}
async function main(){
    console.log("inside main before await");
    let x= await promFunc();
    console.log(x);
    console.log("inside main after await");
}

main();
for(let i=0;i<10000;i++){
    console.log(i)
}
// inside main before await
// before settimeout
// after settimeout
// 0
// 1
// .
// .
// .
// 9999
// resolved
// inside main after await