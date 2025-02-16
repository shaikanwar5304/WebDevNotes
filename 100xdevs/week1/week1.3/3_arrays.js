//push->adds element at the last
let arr = [true, "second"];
console.log(arr.push("new ele"), arr); //3 [ true, 'second', 'new ele' ]
//pop->deletes element at the last
console.log(arr.pop(), arr); //new ele [ true, 'second' ]

//shift->shifts the array to the left
//<-----
console.log(arr.shift(), arr); //true [ 'second' ]
//unshift->shifts the array to right and adds the arguments at the start
//----->
console.log(arr.unshift("unshift"), arr); //2 [ 'unshift', 'second' ]
let x=[3, 4, 5]
x.unshift(1,2)
console.log(x);//[1,2,3,4,5]

//concat->adds two arrays
console.log(arr.concat([4, 5]), arr); //[ 'unshift', 'second', 4, 5 ] [ 'unshift', 'second' ]

//forEach->iterates over an array
["first", 2, 3].forEach(function (val, ind, arr) {
  console.log(val, ind, arr);
});
/*
first 0 [ 'first', 2, 3 ]
2 1 [ 'first', 2, 3 ]
3 2 [ 'first', 2, 3 ]
*/

//map->iterates over an array and will push the return values into array
let newarr = [1, 2, 3].map(function (val, ind, arr) {
  if (ind == 0) {
    return ind;
  } else if (ind == 1) {
    return val;
  } else {
    return arr;
  }
});
console.log(newarr); //[ 0, 2, [ 1, 2, 3 ] ]

//filter->wll push the values that returns true in the call back functions
newarr=[1,2,3,4,5].filter(function(val,ind,arr){
    return val%2==1
})
console.log(newarr);//[ 1, 3, 5 ]

//find->gives the first element that satisfies the condition
newarr=[1,2,3,4,5].find(function(val,ind,arr){
    return val%2==1
})
console.log(newarr);//1

//sort
arr = [1, 3, 2, 4, 5];
arr.sort();//ascending order
console.log(arr)//[ 1, 2, 3, 4, 5 ]
arr = [1, 3, 2, 4, 5];
console.log(arr.sort(function(a,b){
    return b-a
}));//[ 5, 4, 3, 2, 1 ]