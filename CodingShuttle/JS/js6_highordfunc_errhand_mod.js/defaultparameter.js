let greet = (name = "shaik") => {
  console.log("hello " + name);
};
greet("anwar");//hello anwar
greet();//hello shaik
let sum = (a, b = 19) => {
  console.log(a + b);
};
sum(9);//28
sum();//NaN
sum(3, 4);//7
