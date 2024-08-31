const { logincontroller } = require('../controllers/auth');
const {signupcontroller} = require('../controllers/auth');
const {getUserController} = require('../controllers/auth');
const route = require('express').Router();
route.get("/",(req,res)=>{
    res.send({
        current:"api/auth",
        available:"/api/auth/login /api/auth/signup"
    }) 
})
route.post("/login",logincontroller)
route.post("/signup",signupcontroller)
route.get("/user/:id",getUserController)
module.exports = route;