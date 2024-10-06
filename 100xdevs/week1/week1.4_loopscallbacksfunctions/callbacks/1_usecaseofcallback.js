function sumofsomething(a,b,something){
//by using 'something' we needn't to write separate funcs for sumofcubes and sumofsquares separately
  console.log(a, b, something);
  return something(a) + something(b);
}
function square(x){
    return x*x
}
function cube(x){
    return x*x*x
}
sumofsomething(3,4,square)//3 4 [Function: square]
sumofsomething (3,4,cube)//3 4 [Function: cube]