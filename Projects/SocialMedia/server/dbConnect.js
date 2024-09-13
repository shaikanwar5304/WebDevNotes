const mongoose = require("mongoose");
module.exports = async () => {
  const mongoUrl =
    "mongodb+srv://anwarshaik5304:Password%4012345@cluster0.cnhds.mongodb.net/";
  try {
    const connect = await mongoose.connect(mongoUrl);
    console.log("Connected to MongoDB", connect.connection.host);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
