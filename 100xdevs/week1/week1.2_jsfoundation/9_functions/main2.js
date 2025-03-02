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
//i.e if there is an error in function in any line the whole function will not be executed
//js:
//in case of js for functions if there is an error in function the code below the error will not be executed