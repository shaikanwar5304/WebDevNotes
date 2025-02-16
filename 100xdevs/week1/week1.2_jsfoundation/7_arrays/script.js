let arr=[1,2,false,34.2,'string',[1,5.6]]
console.log(arr.length);//6
console.log(arr[2]);//false
console.log(arr[-1]);//undefined
console.log(arr[5]);//[1,5.6]
console.log(arr[5][1]);//5.6
//negative indexes won't work