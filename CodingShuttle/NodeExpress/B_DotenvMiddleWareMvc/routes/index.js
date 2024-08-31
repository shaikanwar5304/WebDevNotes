const route = require('express').Router();//it is like a mini express app
const postRoute = require("./post")
const authRoute = require("./auth")
const logger = require('../middlewares/Logger');
route.get("/",(req,res)=>{
    res.send({
        current: "api/",
        available:"/api/auth, /api/post"
    }) 
})
route.use("/auth",logger,authRoute)//logger is a middleware
route.use("/post",postRoute)
module.exports = route;