import React, { useState } from "react";
import "./CreatePost.scss";
import Avatar from "../avatar/Avatar";
import postImg from "../../assets/post.png";
import { IoImageOutline } from "react-icons/io5";
import { axiosClient } from "../../utils/axiosClient";
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/slices/appConfigSlice";
import { getUserProfile } from "../../redux/slices/postsSlice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
function CreatePost() {
  const [postImg2, setPostImg] = useState("");
  const [caption, setCaption] = useState("");
  const dispatch = useDispatch();
  const params = useParams();
  const myProfile = useSelector((state) => state.appConfigReducer.myProfile);
  function handleImageChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPostImg(reader.result);
    };
  }
  async function handlePostSubmit() {
    try {
      const result = await axiosClient.post("/posts", {
        caption,
        postImg: postImg2,
      });
      console.log(result);
      dispatch(
        getUserProfile({
          userId: params.userId,
        })
      );
    } catch (error) {
      console.log(error);
    } finally {
      setCaption("");
      setPostImg("");
    }
  }
  return (
    <div className="CreatePost">
      <div className="left-part">
        <Avatar src={myProfile?.avatar?.url} />
      </div>
      <div className="right-part">
        <div className="img-container">
          <img src={postImg2 || postImg} className="post-img" alt="" />
        </div>
        <input
          type="text"
          className="captionInput"
          value={caption}
          placeholder="what's on your mind?"
          onChange={(e) => {
            setCaption(e.target.value);
          }}
        />
        <div className="bottom-part">
          <div className="input-post-img">
            <label htmlFor="inputImg" className="labelImg">
              <IoImageOutline />
            </label>
            <input
              className="inputImg"
              type="file"
              id="inputImg"
              accept="image/*"
              onChange={handleImageChange}
            />
            <button className="post-btn btn-primary" onClick={handlePostSubmit}>
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreatePost;
