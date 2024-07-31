arr=['anwar',true,[5.6]]
arr.forEach((e,i,a) => {
    console.log('index',i,'element',e,'arr',a);
});
/**
index 0 element anwar arr [ 'anwar', true, [ 5.6 ] ]
index 1 element true arr [ 'anwar', true, [ 5.6 ] ]
index 2 element [ 5.6 ] arr [ 'anwar', true, [ 5.6 ] ]
 */
func=(e)=>{
    console.log(e);
}
arr.forEach(func)
/*
anwar
true
[ 5.6 ]
*/
function newfunc(e,i){
    console.log(i,e);
}
arr.forEach(newfunc)
/*
0 anwar
1 true
2 [ 5.6 ]
*/
console.log(newfunc);//[Function: newfunc]
console.log(func);//[Function: func]