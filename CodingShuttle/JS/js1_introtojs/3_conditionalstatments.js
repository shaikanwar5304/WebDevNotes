console.log("2" == 2); //true
console.log("2" === 2); //false
console.log("2" > 2); //false
console.log("2" < 2); //false
let a = "4";
console.log(a ** 3); //64
console.log(a + a); //44
if (a == 4) {
  console.log(a * 2); //8
} else if (a == 5) {
  console.log(a);
} else {
  console.log(a);
}
//day=4//thursday
//if we don't put break it will continue to next case
day = 5; //friday//saturday
switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
  case 6:
    console.log("saturday");
    break;
  default:
    console.log("sunday");
}
