function orderPizza(){
    return new Promise(function (res,rej){
        //isAvailable=true;
        isAvailable=false;
        setTimeout(()=>{
            if (isAvailable) {
              res("here is your pizza");
            }
            rej("pizza unavailble");//if resolved then rej won't works but the code after it executes
            console.log("this runs");//this runs
            
        },1000) 
    })
}
const ordered = orderPizza()
console.log(ordered,"before then")// Promise { <pending> } before then
ordered.then((res)=>{
  console.log(res); // here is your pizza
  console.log(ordered, "in then"); // Promise { 'here is your pizza' } in then
}).catch((rejection)=>{
  console.log(rejection); // pizza unavailble
  console.log(ordered, "in catch"); // Promise { <rejected> 'pizza unavailble' } in catch
})
console.log(ordered,"after then")// Promise { <pending> } after then