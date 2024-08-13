//await limits only for that** async func only remaining out of func statements will work irresp of await
function normal(){
    return 3;
}
function asyncfunc(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("successful asyncfunc")
        },1000)
    })
}
async function test(){
    //only here the sequence is followed
    console.log("inside test1");
    
    x = await normal()
    console.log("after normal in test 1");
    
    y = await asyncfunc()
    console.log("after asyncfunc in test 1");
    return `${x}+${y}`
}
async function test2(){
    console.log("inside test2");
    await normal()//the instruction inside will wait for this not the instructions out side
    console.log("inside test2 after normal");
    
    await asyncfunc()
}

test().then((rsp)=>{
    console.log(rsp);
}).catch((rjt)=>{
    console.log(rjt);
})

test2()

console.log("after test");

for(i=0;i<100;i++)console.log(i);

//inside test1
//inside test2
//after test
// 0 to 99
// after normal in test 1
// inside test2 after normal
// after asyncfunc in test 1
// 3+successful asyncfunc