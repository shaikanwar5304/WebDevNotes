arr = ['zebra','anwar','Anwar','Elephant','Yellow'];
console.log(arr)//[ 'zebra', 'anwar', 'Anwar', 'Elephant', 'Yellow' ]
//sorting
arr.sort()
console.log(arr)//[ 'Anwar', 'Elephant', 'Yellow', 'anwar', 'zebra' ]
//checking
x=arr.includes('anwar')
console.log(x);//true
//Index finding
console.log(arr.indexOf('Z'))//-1
console.log(arr.indexOf('Elephant'))//1
//removing (starting element, count,elements to be included)
arr.splice(3,1)
console.log(arr);//[ 'Anwar', 'Elephant', 'Yellow', 'zebra' ]
//replacing
arr.splice(1,3,'siva sai','bhavana','manohar','joy')
console.log(arr);//[ 'Anwar', 'siva sai', 'bhavana', 'manohar', 'joy' ]
//inserting 
arr.splice(1,0,'jagadeesh');
console.log(arr);//[ 'Anwar', 'jagadeesh', 'siva sai', 'bhavana', 'manohar', 'joy' ]