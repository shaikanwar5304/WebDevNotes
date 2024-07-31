let greet = (...a) => {
  console.log("hello " , a);
};
greet("anwar", 67, "vishnu", "pramod");//hello  [ 'anwar', 67, 'vishnu', 'pramod' ]

let a = [1, "tad", 2];
let variable = 23;
let b = [2, "anwar", ...a, variable];
console.log(b);//[ 2, 'anwar', 1, 'tad', 2, 23 ]

let animals = {
  name: "elephant",
  age: "4",
};
let birds = {
  name: "eagle",
  age2: 20,
};
const nonhumans = {
  ...animals,
  ...birds,
  name3: "peacock",
  age3: 10,
}; //observe what happened to the same variable names
//latest value is updated
console.log(nonhumans);
/*
{ name: 'eagle', age: '4', age2: 20, name3: 'peacock', age3: 10 }
 */