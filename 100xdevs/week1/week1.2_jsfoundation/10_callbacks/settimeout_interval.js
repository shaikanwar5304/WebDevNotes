function greet1(){
    console.log('hello 1');
}
function greet() {
  console.log("hello");
}
setTimeout(greet1,1000)//calls the function after 1000ms
setInterval(greet,1000)//calls the function regularly after 1000ms