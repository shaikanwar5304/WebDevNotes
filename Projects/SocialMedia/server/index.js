const express = require("express");
const cookieParser = require("cookie-parser");
const dbConnect = require("./dbConnect");
const morgan = require("morgan");
const authRouter = require("./routers/authRouter");
const postsRouter = require("./routers/postsRouter");
const userRouter = require("./routers/userRouter");
const dotenv = require("dotenv");
const { success } = require("./utils/responseWrapper");
const app = express();
const cors = require("cors");
const cloudinary = require("cloudinary").v2;

dotenv.config(); //to access the environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY, // Click 'View API Keys' above to copy your API key
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

dbConnect();

//middlewares
app.use(morgan("common")); //to log the requests
app.use(express.json({ limit: "20mb" })); //helps when taking data from the frontend
app.use(cookieParser()); //to parse the cookies
app.use(
  //to allow the frontend to access the backend
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/posts", postsRouter);

app.get("/", (req, res) => {
  return res.send(success(200, "", "", "Home of server"));
});

const PORT = process.env.PORT || 4000; //if the port is not defined in the environment variable, then use 4000
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
