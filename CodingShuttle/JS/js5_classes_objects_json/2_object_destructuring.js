firstobj = {
  name: "anwar",
  college: "sasi",
  internalobj: {
    year: 3,
    section: "c",
  },
};
const {name: a,college:b,unknown:unknown_variable}=firstobj
//we are creating variables a,b and unknown_variable contain the corresponding values in the object

console.log(a,b,unknown_variable)//anwar sasi undefined
let {name,internalobj,year}=firstobj
//we are creating vars (globally) which are equivalent to the vars in the obj

console.log(name,internalobj,year)//anwar {year: 3,section: 'c'} undefined
name='new_name'
console.log(name,firstobj.name)//new_name anwar
//the redeclaration of global var will not affect the object

firstobj.name='sivasai'
console.log(name,firstobj.name)//new_name sivasai