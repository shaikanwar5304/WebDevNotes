function sum(a,b,func){
    func(a+b);
}
function display(data){
    console.log(data);
}
sum(3,4,display)//7
//passing function as arguments or we can say calling another func inside a function