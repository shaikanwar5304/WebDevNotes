//forEach is effected by poping
arr=[1,2,3,4,5]
arr.forEach(function(val,ind,arr){
    console.log(val,arr);
    arr.pop();
})
/**
1 [ 1, 2, 3, 4, 5 ]
2 [ 1, 2, 3, 4 ]
3 [ 1, 2, 3 ] 
*/
//forEach is not effected by pushing
arr = [1, 2, 3];
arr.forEach(function (val, ind, arr) {
  console.log(val, arr);
  arr.push(val+3);
});
/*
1 [ 1, 2, 3 ]
2 [ 1, 2, 3, 4 ]
3 [ 1, 2, 3, 4, 5 ]
*/