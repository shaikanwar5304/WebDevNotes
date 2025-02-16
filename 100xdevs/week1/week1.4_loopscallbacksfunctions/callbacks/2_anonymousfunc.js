function sumofsomething(a, b, something) {
  console.log(a, b, something); 
  return something(a) + something(b);
}
console.log(sumofsomething(3, 4, function(x){return x*x}));
//3 4 [Function (anonymous)]
//25
console.log(sumofsomething(3, 4, function cube(x){return x*x*x}));
//3 4 [Function: cube]
//91
//console.log(cube(3))//cube not defined
//so as we can't access these type of declared funcs
//naming is not needed