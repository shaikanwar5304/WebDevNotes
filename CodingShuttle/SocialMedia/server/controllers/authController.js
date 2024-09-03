const User = require("../models/User"); //getting the user model
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); //it takes the data (user login data here) and private key and generates a token
const { error, success } = require("../utils/responseWrapper");
const signupController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!email || !password || !name) {
      return res.send(error(400, "all fields are required"));
    }
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.send(error(400, "User is already registered"));
    }
    const hashedPassword = await bcrypt.hash(password, 10); //to hash the password where 10 is salt
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.send(success(201, { user }));
  } catch (error) {
    console.log(error);
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.send(error(400, "all fields are required"));
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.send(error(400, "User not found"));
    }
    const matched = await bcrypt.compare(password, user.password);
    if (!matched) {
      return res.send(error(401, "Incorrect password"));
    }
    const accessToken = generateAccessToken({
      _id: user._id,
    });
    const refreshToken = generateRefreshToken({
      _id: user._id,
    });
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
    });

    return res.send(success(201, accessToken));
  } catch (err) {
    return res.send(error(400, err));
  }
};

const logoutController = async (req, res) => {
  try {
    res.clearCookie("jwt", {
      httpOnly: true,
      secure: true,
    });
    return res.send(success(200, "user logged out"));
  } catch (e) {
    return res.send(error(400, e.message));
  }
};

//this api will check the refreshToken validity and generate a new access token
const refreshAccessTokenController = async (req, res) => {
  const cookies = req.cookies;
  const refreshToken = cookies.jwt;
  if (!refreshToken) {
    return res.send(error(401, "Refresh token in cookie is required"));
  }

  try {
    const decoded = jwt.verify(
      //it throws an error if the token is invalid
      refreshToken,
      process.env.REFRESH_TOKEN_PRIVATE_KEY
    );
    const _id = decoded._id;
    const accessToken = generateAccessToken({ _id });
    return res.send(success(201, { accessToken }));
  } catch (err) {
    return res.send(error(401, "Invalid REFRESH TOKEN"));
  }
};

//internal functions
const generateAccessToken = (data) => {
  const token = jwt.sign(data, process.env.ACCESS_TOKEN_PRIVATE_KEY, {
    expiresIn: "1d",
  });
  console.log(token);
  return token;
};

const generateRefreshToken = (data) => {
  const token = jwt.sign(data, process.env.REFRESH_TOKEN_PRIVATE_KEY, {
    expiresIn: "1y",
  });
  console.log(token);
  return token;
};

module.exports = {
  signupController,
  loginController,
  refreshAccessTokenController,
  logoutController,
};
