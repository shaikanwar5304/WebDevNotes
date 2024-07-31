const myObj = {
  firstName: "anwar",
  age: 34,
  metaData: {
    college: "sasi",
    branch: "cse",
  },
};
console.log(myObj);
// {
//   firstName: 'anwar',
//   age: 34,
//   metaData: { college: 'sasi', branch: 'cse' }
// }
console.log(myObj.age, myObj.metaData.branch, myObj["firstName"]); //34 cse anwar
