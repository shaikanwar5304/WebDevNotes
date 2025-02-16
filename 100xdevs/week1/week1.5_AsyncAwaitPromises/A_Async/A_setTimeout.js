
setTimeout(() => {
  console.log("function inside settimeout")  
}, 1);//lets say a seperate thread is created and the main thread continues to next instructions

console.log("after setTimeout 1sec")

for(let i=0;i<10000;i++){
  console.log(i);
}//after all the synchronous steps completed the settimeout's function will be executed

// after setTimeout 1sec
//0
//1
//.
//.
//9999
// function inside settimeout