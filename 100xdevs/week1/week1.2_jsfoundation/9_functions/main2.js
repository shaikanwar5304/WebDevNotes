function check(){
    console.log('check1');//check1
    console.log(error_1);
    console.log('check2');
}
console.log('start');//start
check()
console.log('end');

//python:
//the above code will also not considered in case of error in function
//js:
//the code below the error will only effected