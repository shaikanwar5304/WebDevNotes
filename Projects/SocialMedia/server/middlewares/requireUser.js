const jwt = require("jsonwebtoken");
const { error } = require("../utils/responseWrapper");
const User = require("../models/User");
module.exports = async (req, res, next) => {
  try {
    if (
      !req.headers ||
      !req.headers.authorization ||
      !req.headers.authorization.startsWith("Bearer")
    ) {
      return res.send(error(400, "", "authorization header issue"));
    }
    const accessToken = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(
      //it throws an error if the token is invalid
      accessToken,
      process.env.ACCESS_TOKEN_PRIVATE_KEY
    );
    req._id = decoded._id; //combining the _id with the request object for further use
    const user = await User.findById(req._id);
    if (!user) {
      return res.send(error(400, "req.username", "user not found"));
    }
    req.username = user.name;
  } catch (err) {
    return res.send(error(401, req.username, "access token expired"));
  }
  next();
};
