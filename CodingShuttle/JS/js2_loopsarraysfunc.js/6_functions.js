function func(a,b){
return a+b
}
console.log(func(3,2))//last declared function is used
function func(a, b) {
  return a - b;
}
//var always to be declared before initialization
 x=function(name){
    console.log(name);
 }
 x('anwar')//'anwar'

 arrowFunc=(a,b)=>{
 return a*b
 }
 console.log(arrowFunc(2,3));//6
 //for single lines we can write
 arrfunc=(a,b)=>a**b
 console.log(arrfunc(2,3));//8