const {multiply} = require("./utils")
const {log} = require("./utils")
//or
const utils = require("./utils")//getting all the exports from utils

console.log(multiply(3,4))//12

log.warning("destructing")//warning msg :  destructing

utils.log.err("by utils")//error msg :  by utils

console.log(utils.multiply(4,5))//20