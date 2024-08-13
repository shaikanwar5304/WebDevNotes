let x = "anwar";
console.log(x, typeof x); //anwar string
x = { key: "value" };
console.log(x, typeof x); //{key:'value'} 'object'
x = 4;
console.log(x, typeof x); //4 'number'
x = true;
console.log(x, typeof x); //true 'boolean'
//type conversion
x = Number(x);
console.log(x, typeof x); //1 'number'
x = String(x);
console.log(x, typeof x); //true string
x = Number("34");
console.log(x, typeof x); //34 'number'
x = Boolean("string");
console.log(x, typeof x); //true 'boolean'
x++;
console.log(x);//2
x = prompt("enter your name:");
console.log("hello " + x);
alert('this is alert')