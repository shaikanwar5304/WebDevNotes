const mongoose = require("mongoose");
module.exports = async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://anwarshaik5304:Password%4012345@cluster0.cnhds.mongodb.net/"
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Failed to connect to MongoDB", err);
  }
};
