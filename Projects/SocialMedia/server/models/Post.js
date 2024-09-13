const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    image: {
      publicId: String,
      url: String,
    },
    caption: {
      type: String,
      required: true,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user", //by using ref we are telling mongoose that this field is related to the user model
        //helpful in populating the data i.e when we want to get the user details of the likes
        //by using .populate("likes") in the query
      },
    ],
  },
  { timestamps: true } //created at and updated at fields will be added to the schema
);
module.exports = mongoose.model("post", postSchema);
