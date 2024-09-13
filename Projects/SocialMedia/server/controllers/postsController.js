const { success } = require("../utils/responseWrapper");
const { error } = require("../utils/responseWrapper");
const User = require("../models/User");
const Post = require("../models/Post");
const cloudinary = require("cloudinary").v2;
const { mapPostOutput } = require("../utils/Utils");
const createPost = async (req, res) => {
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
    return res.send(success(202, req.username, post, "post created"));
  } catch (err) {
    res.send(error(500, req.username, err.message));
  }
};

const likeUnLike = async (req, res) => {
  try {
    const { postId } = req.body;
    const curUserId = req._id;
    const curUser = await User.findById(curUserId);
    const post = await Post.findById(postId).populate("owner");
    if (!post) {
      return res.send(error(404, req.username, "post not found"));
    }
    if (
      !curUser.followings.includes(post.owner._id) &&
      post.owner._id != curUserId
    ) {
      return res.send(
        success(
          200,
          req.username,
          { post: mapPostOutput(post, req._id) },
          "Follow to like"
        )
      );
    }
    var msg;
    if (post.likes.includes(req._id)) {
      const index = post.likes.indexOf(curUserId);
      post.likes.splice(index, 1);
      msg = "Unliked";
    } else {
      post.likes.push(curUserId);
      msg = "Liked";
    }
    await post.save();
    return res.send(
      success(202, req.username, { post: mapPostOutput(post, req._id) }, msg)
    );
  } catch (err) {
    res.send(error(400, req.username, err.message));
  }
};

const updatePost = async (req, res) => {
  try {
    const { postId, caption } = req.body;
    const curUserId = req._id;
    var post = await Post.findById(postId);
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
    post = mapPostOutput(post, curUserId);
    return res.send(success(202, req.username, { post }, "Post Updated"));
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
    return res.send(success(202, req.username, "post deleted", "Post Deleted"));
  } catch (e) {
    return res.send(error(400, req.username, e.message));
  }
};

module.exports = {
  createPost,
  likeUnLike,
  updatePost,
  deletePost,
};
