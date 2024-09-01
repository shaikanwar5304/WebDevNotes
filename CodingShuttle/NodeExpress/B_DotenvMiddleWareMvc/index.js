const express = require("express");

const dotenv = require("dotenv"); //for env file which stores sensitive data

const route = require("./routes/"); //by default it takes index.js if we dont specify file name
//routes is a folder which contains all the routes

const connectDB = require("./dbConnect");
const dbConnect = require("./dbConnect");

dotenv.config({ path: "./.env" }); //to use env file

const app = express();

app.use(express.json()); //

// app.use((req,res,next)=>{//middleware global
//     console.log(req.url, req.method, new Date())
//     if(req.body.name==="anwar"){//to access req.body, we need to use middleware to parse json data
//         console.log("anwar is here")
//         next()
//     }else{
//         res.send("you are not anwar")
//     }
// })

app.use("/api", route); //when we hit the /api, it will go to routes folder

app.get("/", (req, res) => {
  res.send({
    current: "/",
    available: "/api",
    requrl: req.url,
  });
});

app.post("/", (req, res) => {
  res.send({
    post: true,
    requrl: req.url,
  });
});

const PORT = process.env.PORT;
dbConnect();

app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}`);
});
