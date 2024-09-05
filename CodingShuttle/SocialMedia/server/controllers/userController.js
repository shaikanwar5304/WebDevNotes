const { success, error } = require("../utils/responseWrapper");
const User = require("../models/User");
const Post = require("../models/Post");

const followOrUnfollowUserController = async (req, res) => {
  try {
    const { targetUserId } = req.body;
    const curUserId = req._id;
    const targetUser = await User.findById(targetUserId);
    const curUser = await User.findById(curUserId);
    if (targetUserId === curUserId) {
      return res.send(error(400, req.username, "can't follow yourself"));
    }
    if (!targetUser) {
      return res.send(error(400, req.username, "User to follow not found"));
    }
    var msg;
    if (curUser.followings.includes(targetUserId)) {
      const followingIndex = curUser.followings.indexOf(targetUserId);
      curUser.followings.splice(followingIndex, 1);
      const followerIndex = targetUser.followers.indexOf(curUserId);
      targetUser.followers.splice(followerIndex, 1);
      msg = "user unfollowed";
    } else {
      curUser.followings.push(targetUserId);
      targetUser.followers.push(curUserId);
      msg = "user followed";
    }
    const posts = await Post.find({
      owner: targetUserId,
    });
    if (posts) {
      for (let i = 0; i < posts.length; i++) {
        if (posts[i].likes.includes(curUserId)) {
          const index = posts[i].likes.indexOf(curUserId);
          posts[i].likes.splice(index, 1);
          await posts[i].save();
        }
      }
    }
    await targetUser.save();
    await curUser.save();
    return res.send(success(200, req.username, msg));
  } catch (err) {
    return res.send(error(400, req.username, err.message));
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
    return res.send(success(200, req.username, posts));
  } catch (err) {
    res.send(error(400, req.username, err.message));
  }
};

const getMyPosts = async (req, res) => {
  try {
    const curUserId = req._id;
    const posts = await Post.find({
      owner: curUserId,
    }).populate("likes");
    return res.send(success(200, req.username, posts));
  } catch (err) {
    res.send(error(400, req.username, err.message));
  }
};

const deleteUser = async (req, res) => {
  try {
    const curUserId = req._id;
    const curUser = await User.findById(curUserId);
    if (!curUser) {
      return res.send(error(400, req.username, "user not found"));
    }
    const followers = curUser.followers;
    const followings = curUser.followings;
    for (let i = 0; i < followers.length; i++) {
      var follower = await User.findById(followers[i]);
      var ind = follower.followings.indexOf(curUserId);
      follower.followings.splice(ind, 1);
      await follower.save();
    }
    for (let i = 0; i < followings.length; i++) {
      var person = await User.findById(followings[i]);
      const posts = await Post.find({
        owner: person._id,
      });
      for (let j = 0; j < posts.length; j++) {
        if (posts[j].likes.includes(curUserId)) {
          const index = posts[j].likes.indexOf(curUserId);
          posts[j].likes.splice(index, 1);
          await posts[j].save();
        }
      }
      var ind = person.followers.indexOf(curUserId);
      person.followers.splice(ind, 1);
      await person.save();
    }
    const posts = await Post.find({
      owner: curUserId,
    });
    // for (let i = 0; i < posts.length; i++) {
    //   await posts[i].deleteOne();
    // }
    await Post.deleteMany({
      owner: curUserId,
    });
    await curUser.deleteOne();
    res.clearCookie("jwt", {
      httpOnly: true,
      secure: true,
    });
    return res.send(success(200, req.username, "successfully deleted"));
  } catch (e) {
    return res.send(error(400, req.username, e.message));
  }
};

module.exports = {
  followOrUnfollowUserController,
  getPostsOfFollowing,
  deleteUser,
  getMyPosts,
};
