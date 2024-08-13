//call back is a function which executes after another function has finished executing
function orderPizza(serve){//serve is a callback func
    setTimeout(() => {
        serve('🍕')
    }, 1000);
}
function eat(food){
    console.log(`eating ${food}`);
}
orderPizza(eat)//eating 🍕