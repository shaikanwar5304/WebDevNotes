import React, { useState, useRef } from "react";
import Avatar from "../avatar/Avatar";
import "./Post.scss";
import backgroundImg from "../../assets/background.jpg";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { useDispatch } from "react-redux";
import { likeAndUnlikeFunc } from "../../redux/slices/appConfigSlice";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { IoIosMore } from "react-icons/io";
import DeletePost from "../deletePost/DeletePost";
import { deletePostFunc } from "../../redux/slices/profileSlice";
import { getUserPosts } from "../../redux/slices/profileSlice";
function Post({ post, isMyPost }) {
  const dispatch = useDispatch();
  const optionRef = useRef();
  const deleteRef = useRef();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(post?.isLiked);
  const [likeCount, setLikeCount] = useState(post?.likesCount);
  async function handlePostLiked() {
    await dispatch(likeAndUnlikeFunc({ postId: post?._id }));
    setIsLiked(!isLiked);
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
  }
  const handleDeletePost = () => {
    dispatch(deletePostFunc({ postId: post._id }));
    <Navigate to={`/profile/${post.owner._id}`} />;
  };
  const handleMore = () => {
    optionRef.current.classList.toggle("options-hidden");
  };
  function handleNavigateUser() {
    navigate("/profile/" + post?.owner?._id);
  }
  return (
    <div className="Post">
      <div className="heading">
        <div onClick={handleNavigateUser}>
          <Avatar src={post?.owner?.avatar?.url} />
          <h4>{post?.owner?.name}</h4>
        </div>
        {isMyPost ? (
          <div className="more">
            <IoIosMore onClick={handleMore} />
            <div className="options-hidden options" ref={optionRef}>
              <div
                className="edit"
                onClick={() => {
                  navigate("/updatePost/" + post._id);
                }}
              >
                edit
              </div>
              <div className="delete" onClick={handleDeletePost}>
                delete
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="content">
        <img src={post?.image?.url || backgroundImg} alt="" />
      </div>
      <div className="footer">
        <div className="like">
          {isLiked ? (
            <IoIosHeart className="icon" onClick={handlePostLiked} />
          ) : (
            <IoIosHeartEmpty className="icon" onClick={handlePostLiked} />
          )}

          <h4>{likeCount} likes</h4>
        </div>
        <p className="caption">{post?.caption}</p>
        <h6 className="time-ago">{post?.timeAgo}</h6>
      </div>
    </div>
  );
}

export default Post;
