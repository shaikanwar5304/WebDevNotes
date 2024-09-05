const success = (statusCode, username, result) => {
  return {
    status: "ok",
    statusCode,
    username,
    result,
  };
};
const error = (statusCode, username, message) => {
  return {
    status: "error",
    statusCode,
    username,
    message,
  };
};
module.exports = {
  success,
  error,
};
