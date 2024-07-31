class vehicle {
  constructor() {
    (this.model = "xuv"), (this.wheels = 4);
  }
}
myobj = new vehicle();
console.log(myobj); //vehicle {model: 'xuv',wheels: 4}
console.log(myobj.model, myobj.wheels); //xuv 4

class person {
  constructor(name='default_name') {
    this.person_name = name;
  }
}
myObj1 = new person();
console.log(myObj1); //person { person_name: 'default_name' }
myObj2= new person('anwar')
console.log(myObj2);//person { person_name: 'anwar' }

class newclass{
  name='newname'
  meth(){
    console.log(this.name);
  }
  func=function (params) {
    console.log(params);
  }
  arrowfunc=()=>{
    a='anwar'
    console.log(typeof a);
  }
}
newobj=new newclass()
newobj.meth()//newname
console.log(newobj)
/**newclass {
  name: 'newname',
  func: [Function: func],
  arrowfunc: [Function: arrowfunc]
} */