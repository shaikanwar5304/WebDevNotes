// const users=[
//     {id:1,name:'John'},
//     {id:2,name:'Jane'},
//     {
//         id:3,
//         email: "anwar.shaik@gmail.com",
//         password: "anwar123"
//     }
// ]
// module.exports = users

const mongoose = require("mongoose");
const newuserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: String,
    marks: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", newuserSchema);
