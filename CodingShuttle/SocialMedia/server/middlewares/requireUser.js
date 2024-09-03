const jwt = require("jsonwebtoken");
const { error } = require("../utils/responseWrapper");
module.exports = async (req, res, next) => {
  console.log(req.headers);
  if (
    !req.headers ||
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer")
  ) {
    return res.send(error(400, "authorization header is required"));
  }
  const accessToken = req.headers.authorization.split(" ")[1];
  try {
    const decoded = jwt.verify(
      //it throws an error if the token is invalid
      accessToken,
      process.env.ACCESS_TOKEN_PRIVATE_KEY
    );
    req._id = decoded._id;
  } catch (err) {
    return res.send(error(401, "Invalid access key"));
  }
  console.log(accessToken);
  next();
};
