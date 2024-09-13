const success = (statusCode, username, result, message, adminId) => {
  return {
    status: "ok",
    statusCode,
    username,
    result,
    message,
    adminId,
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
