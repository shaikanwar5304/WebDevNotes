const users = require("../models/users")
const logincontroller = async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    if (!email || !password) {
        res.status(403).send({
            status: "error",
            message: "email/password is required"
        })
        return
    }
    const user = users.find((user) => user.email === email && user.password === password)

    if(!user){
        res.status(403).send({
            status: "error",
            message: "email/password is wrong"
        })
        return
    } 

    res.status(200).send({
        status: "login success"
    })
}

const signupcontroller = async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    if (!email || !password) {
        res.status(403).send({
            status: "error",
            message: "email/password is required"
        })
        return
    }
    const id = Math.floor(Math.random() * 1000)

    users.push({
        id,
        email,
        password
    })

    res.status(200).send({
        status: "signup success",
        user: {
            id,
            email
        }
    })
}


const getUserController = async (req, res) => {
    const id = req.params.id;
    if(!id){
        res.status(403).send({
            status: "error",
            message: "id is required"
        })
        return
    }
    const user = users.find((user)=>{return  user.id == id})
    if(!user){
        res.status(403).send({
            status: "error",
            message: "user not found"
        })
        return
    }
    res.status(200).send({
        status: "success",
        user
    })
}

module.exports = {
    logincontroller,
    signupcontroller,
    getUserController
}