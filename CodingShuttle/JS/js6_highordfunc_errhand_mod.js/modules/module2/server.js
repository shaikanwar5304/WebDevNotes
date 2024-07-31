import { add as addition, sub, dollar } from "../module1/utility.js";
import random_name from "../module1/utility.js"; //defaults
//to import all in a single statement
import * as random_name2 from "../module1/utility.js"
//and use it as random_name.function_name()
//in module type js file we have to declare every variable unlike normal file
let b = 3;
let a = 10;
console.log(addition(a, b));//13
sub(a, b);//7
console.log(dollar("anwar")); //hello anwar
random_name[0](3, 4, 5); //60
console.log(addition);//[Function: add]
console.log(random_name);//[ [Function: mul], [Function: mul2] ]
console.log(random_name2);
/**
[Module: null prototype] {
  add: [Function: add],
  default: [ [Function: mul], [Function: mul2] ],
  dollar: [Function: dollar],
  sub: [Function: sub]
}
 */
random_name2.default[1](1,2,3)//2
random_name2.sub(4,3)//1