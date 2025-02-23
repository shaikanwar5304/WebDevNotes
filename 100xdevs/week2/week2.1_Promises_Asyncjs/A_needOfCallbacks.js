function cube(a){
    return a*a*a;
}
function square(a){
    return a*a;
}
function quad(a){
    return a*a*a*a;
}
function sumOfCubes(a, b){
    let cubeOfA = cube(a);
    let cubeOfB = cube(b);
    return cubeOfA + cubeOfB;
}
function sumOfSquares(a, b){
    let squareOfA = square(a);
    let squareOfB = square(b);
    return squareOfA + squareOfB;
} 
function sumOfQuads(a, b){
    let quadOfA = quad(a);
    let quadOfB = quad(b);
    return quadOfA + quadOfB;
}
console.log(sumOfSquares(2,3));// 4+9 = 13
console.log(sumOfCubes(2,3));// 8+27 = 35
console.log(sumOfQuads(2,3));// 16 + 81 = 97 
// as you see in the above code we are repeating the code which has similar logic
// i.e we created 3 functions which adds some of something so if we can pass that something we can do it in less lines of code
function someOfSomeThing(a, b, Something){
    let someThingOfA = Something(a);
    let someThingOfB = Something(b);
    return someThingOfA+someThingOfB;
}
console.log(someOfSomeThing(2,3,square));//13
console.log(someOfSomeThing(2,3,cube));//35
console.log(someOfSomeThing(2,3,quad));//97
//we have decreased the lines of code 