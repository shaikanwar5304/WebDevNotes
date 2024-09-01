const mongoose = require("mongoose");
const User = require("./models/User");
async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://anwarshaik5304:Password%4012345@cluster0.cnhds.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Failed to connect to MongoDB", err);
  }
}
connectDB();

async function createUser(newUser) {
  const user = new User(newUser); //in memory use document created
  const data = await user.save(); //user saved inside database
  console.log(data);
}

// createUser({
//   email: "nafeesa@gmail.com",
//   password: "12345",
//   newfeild: "noworries only the fields in schema are taken",
//   marks: 40,
// });

//find user via email
async function findUser(email) {
  const users = await User.find({ email });
  //const users = await User.findOne({ email: "anwar@gmail.com" });//gives first object
  console.log(users);
}
// findUser("fatima@gmail.com");
//missing field won't throws an error

async function findusers(mark, emailpart) {
  // const users = await User.find({ marks: { $gt: mark } });
  // const users = await User.find({ marks: { $gt: mark } }).select("email marks"); //selects only email
  // const users = await User.find({ marks: { $gt: mark } }).select("email marks").limit(1); //selects only one user
  const users = await User.findOne({ email: { $regex: emailpart } }); //finds the users whose email contains an
  console.log(users);
  return users;
}

async function updateUser(emailpart, newMarks) {
  const user = await User.findOne({ email: { $regex: emailpart } });
  user.marks = newMarks;
  const updatedUser = await user.save();
  console.log(user);
}

//updateUser("an", 49); //returns the users whose marks are greater than 44
//gt => greaterthan
//lt => less than
//gte => greater than or equal to
//lte => less than or equal to
//eq => equal to
async function deleteUser(emailpart) {
  const user = await User.findOne({ email: { $regex: emailpart } });
  if (!user) return;
  await user.deleteOne();
  console.log(user);
}

deleteUser("fe");
