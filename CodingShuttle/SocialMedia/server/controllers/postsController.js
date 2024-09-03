const { success } = require("../utils/responseWrapper");
const { error } = require("../utils/responseWrapper");
const User = require("../models/User");
const Post = require("../models/Post");
const getAllPostsController = async (req, res) => {
  return res.send(
    success(201, { id: req._id, msg: "these are all the posts" })
  );
};

const createPostController = async (req, res) => {
  try {
    const { caption } = req.body;
    const owner = req._id;
    const user = await User.findById(req._id);
    const post = await Post.create({
      owner,
      caption,
    });
    user.posts.push(post._id);
    await user.save();
    return res.send(success(201, post));
  } catch (err) {
    res.send(error(500, err.message));
  }
};

const likeAndUnlikePost = async (req, res) => {
  try {
    const { postId } = req.body;
    const curUserId = req._id;
    const post = await Post.findById(postId);
    if (!post) {
      return res.send(error(404, "post not found"));
    }
    if (post.likes.includes(req._id)) {
      const index = post.likes.indexOf(curUserId);
      post.likes.splice(index, 1);
      await post.save();
      return res.send(success(200, "Post unliked"));
    } else {
      post.likes.push(curUserId);
      await post.save();
      return res.send(success(200, "post Liked"));
    }
  } catch (err) {
    res.send(error(500, err.message));
  }
};

const updatePostController = async (req, res) => {
  try {
    const { postId, caption } = req.body;
    const curUserId = req._id;
    const post = await Post.findById(postId);
    if (!post) {
      return res.send(error(404, "post not found"));
    }
    if (post.owner.toString() !== curUserId) {
      return res.send(error(403, "only owners can update their posts"));
    }
    if (caption) {
      post.caption = caption;
    }
    await post.save();
    return res.send(success(200, post));
  } catch (err) {
    return res.send(error(200, err.message));
  }
};
const deletePost = async (req, res) => {
  try {
    const { postId } = req.body;
    const curUserId = req._id;
    const user = await User.findById(curUserId);
    const post = await Post.findById(postId);
    if (!post) {
      return res.send(error(404, "post not found"));
    }
    if (post.owner.toString() !== curUserId) {
      return res.send(error(403, "only owners can update their posts"));
    }
    const index = user.posts.indexOf(postId);
    user.posts.splice(index, 1);
    await user.save();
    await post.deleteOne();
    return res.send(success(200, "post deleted"));
  } catch (e) {
    return res.send(error(400, e.message));
  }
};
module.exports = {
  getAllPostsController,
  createPostController,
  likeAndUnlikePost,
  updatePostController,
  deletePost,
};
