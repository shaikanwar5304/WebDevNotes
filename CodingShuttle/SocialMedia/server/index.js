const express = require("express");
const cookieParser = require("cookie-parser");
const dbConnect = require("./dbConnect");
const morgan = require("morgan");
const authRouter = require("./routers/authRouter");
const postsRouter = require("./routers/postsRouter");
const userRouter = require("./routers/userRouter");
const dotenv = require("dotenv");
const success = require("./utils/responseWrapper");
const app = express();
const cors = require("cors");
dotenv.config(); //to access the environment variables
dbConnect();

//middlewares
app.use(morgan("common")); //to log the requests
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/posts", postsRouter);

app.get("/", (req, res) => {
  return res.send(success(201, "Home"));
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
