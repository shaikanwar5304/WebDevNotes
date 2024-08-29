const express = require("express")
const app = express()
const path = require('path');
app.use(express.json())
app.get("/",(req,res)=>{
    console.log("server is running")
    // res.sendFile(path.join(__dirname, 'index.html'));
    //.json is similar to send
    res.json({
        json: true
    })
})
app.post("/",(req,res)=>{
    console.log(req.body)
    res.send({
        post: true,
        multiply: req.body.a * req.body.b
    })
})
app.get("/user",(req,res)=>{
    console.log("/user was called")
    res.send({
        name: 'anwar'
    })
})
app.listen(4000,(req,res)=>{
    console.log("listening on port 4000")
})