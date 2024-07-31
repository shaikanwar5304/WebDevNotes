a = [1, 2, 3, 4, 5];

//filter is used to select elements
let evennumbers;
evennumbers=a.filter((elemt,ind,arr)=>{
  elemt % 2 == 0 ? (s = "yes") : (s = false);
  //console.log(evennumbers);undefined(5)
  //all the elements are filtered or mapped and then pushed at a time
  return s;
})
console.log(evennumbers);//[ 2, 4 ]

//map is used to perform operations on each element
doublethenumbers=a.map((e,i,a)=>{
    return e*2
})
console.log(doublethenumbers);//[ 2, 4, 6, 8, 10 ]

//find will return the first element that satisfies the condition
a = [
  { name: "chaitanya", age: 15 },
  { name: "pramod", age: 19 },
  { name: "gowtham", age: 10 },
  { name: "seshadri", age: 17 },
  { name: "gowtham", age: 15 }
];
e=a.find((e,i,a)=>{
    if (e.name =='gowtham'){
        return 1;
    }
})
console.log(e);//{ name: 'gowtham', age: 10 }