var ta = require("time-ago");
const mapPostOutput = (post, userId) => {
  return {
    _id: post._id,
    owner: {
      _id: post.owner._id,
      name: post.owner.name,
      avatar: post.owner.avatar,
    },
    image: post.image,
    caption: post.caption,
    likesCount: post.likes.length,
    isLiked: post.likes.includes(userId),
    createdAt: post.createdAt,
    updatedAt: post.updatedAt,
    timeAgo: ta.ago(post.createdAt),
  };
};
module.exports = {
  mapPostOutput,
};
