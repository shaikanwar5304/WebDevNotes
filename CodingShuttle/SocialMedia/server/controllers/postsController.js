const { success } = require("../utils/responseWrapper");
const { error } = require("../utils/responseWrapper");
const User = require("../models/User");
const Post = require("../models/Post");
const cloudinary = require("cloudinary").v2;
const { mapPostOutput } = require("../utils/Utils");
const createPostController = async (req, res) => {
  try {
    const { caption, postImg } = req.body;
    if (!caption || !postImg) {
      return res.send(
        error(400, req.username, "caption and image are required")
      );
    }
    const cloudImg = await cloudinary.uploader.upload(postImg, {
      folder: "PostImg",
    });
    const owner = req._id;
    const user = await User.findById(req._id);
    const post = await Post.create({
      owner,
      caption,
      image: {
        publicId: cloudImg.public_id,
        url: cloudImg.url,
      },
    });
    user.posts.push(post._id);
    await user.save();
    return res.send(success(201, req.username, post));
  } catch (err) {
    res.send(error(500, req.username, err.message));
  }
};

const likeAndUnlikePost = async (req, res) => {
  try {
    const { postId } = req.body;
    const curUserId = req._id;
    const post = await Post.findById(postId).populate("owner");
    if (!post) {
      return res.send(error(404, req.username, "post not found"));
    }
    var msg;
    if (post.likes.includes(req._id)) {
      const index = post.likes.indexOf(curUserId);
      post.likes.splice(index, 1);
      msg = "post Unliked";
    } else {
      post.likes.push(curUserId);
      msg = "post Liked";
    }
    await post.save();
    return res.send(
      success(200, req.username, { post: mapPostOutput(post, req._id) })
    );
  } catch (err) {
    res.send(error(400, req.username, err.message));
  }
};

const updatePostController = async (req, res) => {
  try {
    const { postId, caption } = req.body;
    const curUserId = req._id;
    const post = await Post.findById(postId);
    if (!post) {
      return res.send(error(400, req.username, "post not found"));
    }
    if (post.owner.toString() !== curUserId) {
      return res.send(
        error(400, req.username, "only owners can update their posts")
      );
    }
    if (caption) {
      post.caption = caption;
    }
    await post.save();
    return res.send(success(200, req.username, post));
  } catch (err) {
    return res.send(error(400, req.username, err.message));
  }
};

const deletePost = async (req, res) => {
  try {
    const { postId } = req.body;
    const curUserId = req._id;
    const user = await User.findById(curUserId);
    const post = await Post.findById(postId);
    if (!post) {
      return res.send(error(400, req.username, "post not found"));
    }
    if (post.owner.toString() !== curUserId) {
      return res.send(
        error(400, req.username, "only owners can update their posts")
      );
    }
    const index = user.posts.indexOf(postId);
    user.posts.splice(index, 1);
    await user.save();
    await post.deleteOne();
    return res.send(success(200, req.username, "post deleted"));
  } catch (e) {
    return res.send(error(400, req.username, e.message));
  }
};

const getUserPosts = async (req, res) => {
  try {
    const curUserId = req._id;
    const reqUserId = req.params.id;
    const curUser = await User.findById(curUserId);
    const curUserFollowings = await curUser.followings;
    var postUser;
    try {
      postUser = await User.findById(reqUserId);
    } catch (e) {
      return res.send(error(400, req.username, "invalid user"));
    }
    if (!postUser) {
      return res.send(error(400, req.username, "invalid user"));
    }

    if (curUserId == reqUserId || curUserFollowings.includes(reqUserId)) {
      const posts = await Post.find({
        owner: reqUserId,
      });
      return res.send(success(200, req.username, posts));
    } else {
      return res.send(
        error(404, req.username, "can't see the posts without following")
      );
    }
  } catch (err) {
    res.send(error(400, req.username, err.message));
  }
};

module.exports = {
  createPostController,
  likeAndUnlikePost,
  updatePostController,
  deletePost,
  getUserPosts,
};
