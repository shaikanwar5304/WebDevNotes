myObj = {
  Name: "myobj",
  func: function () {
    console.log("this is my function");
  },
  arrowfunc: ()=>{
    console.log('this is my arrowfunc');
  },
  fun(){
    console.log('another type of declaration');
  }
};
myObj.func(); //this is my function
myObj.arrowfunc()//this is my arrowfunc
myObj['func']()//this is my function
myObj.fun()//another type of declaration