let count5=5;
function countDown(){
    console.log(count5)
    count5--;
    if(count5==0){
        clearInterval(intervalId)
    }
}
intervalId=setInterval(countDown,10)
for(i=0;i<100;i++){
    console.log("print")
}
// print
// print
// .
// .
// print (100th time) (after all the work is done then async code will run)
// 5
// 4
// 3
// 2 
// 1