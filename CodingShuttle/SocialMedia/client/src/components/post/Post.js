import React from "react";
import Avatar from "../avatar/Avatar";
import "./Post.scss";
import backgroundImg from "../../assets/background.jpg";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { useDispatch } from "react-redux";
import { likeAndUnlikePost } from "../../redux/slices/postsSlice";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../redux/slices/appConfigSlice";
import { TOAST_SUCCESS } from "../../App";
function Post({ post }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function handlePostLiked() {
    dispatch(
      showToast({
        type: TOAST_SUCCESS,
        message: "liked or unliked",
      })
    );
    dispatch(likeAndUnlikePost({ postId: post?._id }));
  }
  return (
    <div className="Post">
      <div className="heading">
        <Avatar src={post?.owner?.avatar?.url} />
        <h4>{post?.owner?.name}</h4>
      </div>
      <div className="content">
        <img src={post?.image?.url || backgroundImg} alt="" />
      </div>
      <div className="footer">
        <div className="like">
          {post?.isLiked ? (
            <IoIosHeart className="icon" onClick={handlePostLiked} />
          ) : (
            <IoIosHeartEmpty className="icon" onClick={handlePostLiked} />
          )}

          <h4>{post?.likesCount} likes</h4>
        </div>
        <p className="caption">{post?.caption}</p>
        <h6 className="time-ago">{post?.timeAgo}</h6>
      </div>
    </div>
  );
}

export default Post;
