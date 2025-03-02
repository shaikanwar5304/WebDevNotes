function greet1(){
    console.log('setTimeout calls only once');
}
function greet2() {
  console.log("setInterval calls regularly");
}
setTimeout(greet1,1000)//calls the function after 1000ms
setInterval(greet2,1000)//calls the function regularly after 1000ms
// setTimeout calls only once
// setInterval calls regularly
// setInterval calls regularly
// setInterval calls regularly
// ..
// ..