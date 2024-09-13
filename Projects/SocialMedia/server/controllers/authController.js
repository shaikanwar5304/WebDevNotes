const User = require("../models/User"); //getting the user model
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); //it takes the data (user login data here) and private key and generates a token
const { error, success } = require("../utils/responseWrapper");
const signupController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!email || !password || !name) {
      return res.send(error(400, req.username, "All fields are required!!!"));
    }
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.send(error(400, req.username, "Email already registered!"));
    }
    const hashedPassword = await bcrypt.hash(password, 10); //to hash the password where 10 is salt
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.send(success(202, req.username, { user }, "User created"));
  } catch (err) {
    return res.send(error(400, req.username, err.message));
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //checking if the email and password are provided
    if (!email || !password) {
      return res.send(
        error(400, req.username, "Both Email and Password are required!!!")
      );
    }
    const user = await User.findOne({ email }).select("+password");
    //checking if the email is registered
    if (!user) {
      return res.send(error(400, req.username, "Email not registered"));
    }
    const matched = await bcrypt.compare(password, user.password);
    //checking if the password is correct
    if (!matched) {
      return res.send(error(400, req.username, "Incorrect password"));
    }
    //if the email and password are correct, then generate the access token and refresh token
    const accessToken = generateAccessToken({
      _id: user._id,
    });
    const refreshToken = generateRefreshToken({
      _id: user._id,
    });
    //setting the refresh token in the cookie
    res.cookie("jwt", refreshToken, {
      //setting the refresh token in the cookie
      httpOnly: true, //only accessible by the server
      secure: true,
    });
    //sending the access token in the response
    return res.send(
      success(202, req.username, accessToken, "Successful Login", user._id)
    );
  } catch (err) {
    return res.send(error(400, req.username, err.message));
  }
};

const logoutController = async (req, res) => {
  try {
    res.clearCookie("jwt", {
      httpOnly: true,
      secure: true,
    });
    return res.send(success(202, req.username, "success", "user logged out"));
  } catch (e) {
    return res.send(error(400, req.username, e.message));
  }
};

//this api will check the refreshToken validity and generate a new access token
const refreshAccessTokenController = async (req, res) => {
  try {
    const cookies = req.cookies;
    const refreshToken = cookies.jwt;
    if (!refreshToken) {
      return res.send(
        error(400, req.username, "Refresh token in cookie is required")
      );
    }
    const decoded = jwt.verify(
      //it throws an error if the token is invalid
      refreshToken,
      process.env.REFRESH_TOKEN_PRIVATE_KEY
    );
    const _id = decoded._id;
    const accessToken = generateAccessToken({ _id });
    return res.send(
      success(200, req.username, { accessToken }, "Access token generated")
    );
  } catch (err) {
    return res.send(error(400, req.username, err.message));
  }
};

//internal functions
const generateAccessToken = (data) => {
  const token = jwt.sign(data, process.env.ACCESS_TOKEN_PRIVATE_KEY, {
    expiresIn: "300s",
  });
  return token;
};

const generateRefreshToken = (data) => {
  const token = jwt.sign(data, process.env.REFRESH_TOKEN_PRIVATE_KEY, {
    expiresIn: "3600s",
  });
  return token;
};

module.exports = {
  signupController,
  loginController,
  refreshAccessTokenController,
  logoutController,
};
