function  bakePizza() {
    console.log("baking!");
    setTimeout(() => {
        console.log("🍕 is ready")
    }, 1000);
}
function getDough(bakePizza) {
    console.log("getting 🍞");
    setTimeout(() => {
        bakePizza()
    }, 1000);
}

function getToppings(getDough,bakePizza) {
    console.log("getting 🍅");
    setTimeout(() => {
        getDough(bakePizza)
    }, 1000);
}
function orderPizza() {
    console.log("order placed!");
    setTimeout(()=>{
        getCheese(getToppings,getDough,bakePizza);
    },1000)
}

orderPizza()
function getCheese(getToppings,getDough,bakePizza) {
    console.log("getting 🧀");
    setTimeout(() => {
        getToppings(getDough,bakePizza)
    }, 1000);
}
// order placed!
// getting 🧀
// getting 🍅
// getting 🍞
// baking!
// 🍕 is ready