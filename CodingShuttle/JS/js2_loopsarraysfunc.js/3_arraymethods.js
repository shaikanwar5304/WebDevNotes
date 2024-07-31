arr = [1, 2, "three", null, true];
arr[6] = "seven";
console.log(arr, typeof arr); //[ 1, 2, 'three', null, true, <1 empty item>, 'seven' ] object
console.log(arr[5]); //undefined
console.log(arr.length); //7

arr.push("pushed");
console.log(arr); //[ 1, 2, 'three', null, true, <1 empty item>, 'seven', 'pushed' ]

arr.pop();
console.log(arr); //[ 1, 2, 'three', null, true, <1 empty item>, 'seven']
//sort will take all the elements as strings and sorts lexicographically
s = arr.sort();
console.log(s);//[ 1, 2, null, 'seven', 'three', true, <1 empty item> ]

arr=[2,10,4]
s=arr.sort()
console.log(s);//[ 10, 2, 4 ]
//customized sort
//ascending order
s=arr.sort((p,q)=>{
    return p-q
})
console.log(s);//[ 2, 4, 10 ]
//descending order 
s = arr.sort((p, q) => {
  return q-p;
});
console.log(s);//[ 10, 4, 2 ]
//another method
newarr=[6,2,6,8,2,8]
p=newarr.sort((k,l)=>{
    if (k>l)
        return 1
    else if (k<l)return -1
    return 0
    //these are jst to know what is small and big in two elements
})
console.log(p)//[ 2, 2, 6, 6, 8, 8 ]