try {
  console.log("before first error in try block");//before first error in try block
  console.log(x);
  //after a first error the try block breaks
  //syntactical errors are not supported
  console.log("after first error in try block");
  y = 0 + k;
  //even though we didnot declare y it is not a error it defaultly declared as var
  //k throughs the error
  console.log("after second error");
} catch (e) {
  console.log(e)//Reference Error
  console.log("error occured");//error occured
} finally {
  console.log("finally will always execute");//finally will always execute
}
