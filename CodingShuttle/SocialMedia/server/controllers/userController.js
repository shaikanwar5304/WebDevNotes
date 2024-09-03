const { success, error } = require("../utils/responseWrapper");
const User = require("../models/User");
const Post = require("../models/Post");

const followOrUnfollowUserController = async (req, res) => {
  try {
    const { userIdToFollow } = req.body;
    const curUserId = req._id;
    const userToFollow = await User.findById(userIdToFollow);
    const curUser = await User.findById(curUserId);
    if (userIdToFollow === curUserId) {
      return res.send(error(409, "can't follow yourself"));
    }
    if (!userToFollow) {
      return res.send(error(404, "User to follow not found"));
    }
    var msg;
    if (curUser.followings.includes(userIdToFollow)) {
      const followingIndex = curUser.followings.indexOf(userIdToFollow);
      curUser.followings.splice(followingIndex, 1);
      const followerIndex = userToFollow.followers.indexOf(curUserId);
      userToFollow.followers.splice(followerIndex, 1);
      msg = "user unfollowed";
    } else {
      curUser.followings.push(userIdToFollow);
      userToFollow.followers.push(curUserId);
      msg = "user followed";
    }
    await userToFollow.save();
    await curUser.save();
    return res.send(success(200, msg));
  } catch (err) {
    return res.send(error(400, err.message));
  }
};

const getPostsOfFollowing = async (req, res) => {
  try {
    const curUserId = req._id;
    const curUser = await User.findById(curUserId);
    const posts = await Post.find({
      owner: {
        $in: curUser.followings,
      },
    });
    return res.send(success(200, posts));
  } catch (err) {
    res.send(error(400, err.message));
  }
};

module.exports = {
  followOrUnfollowUserController,
  getPostsOfFollowing,
  //getmyposts
  //deleteprofile
  //getuserpost
};
