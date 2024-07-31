Name = "outside";
myObj = {
  Name: "inside",
  func: function () {
    console.log(this.Name); //inside
    console.log(Name); //outside//Reference error if there is no global variable
  },
};
myObj.func();