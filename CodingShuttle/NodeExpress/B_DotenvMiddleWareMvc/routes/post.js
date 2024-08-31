const route = require('express').Router();
route.get("/",(req,res)=>{
    res.send({
        current:"api/post",
    })
})
module.exports = route;