import React, { useState } from "react";
import "./CreatePost.scss";
import postImg from "../../assets/uploadImg.jpg";
import { axiosClient } from "../../utils/axiosClient";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
function CreatePost() {
  const [postImg2, setPostImg] = useState("");
  const [caption, setCaption] = useState("");
  const dispatch = useDispatch();
  const params = useParams();
  const myProfile = useSelector((state) => state.homeSlice.personalInfo);
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
      const result = await axiosClient.post("/posts/createPost", {
        caption,
        postImg: postImg2,
      });
    } catch (error) {
    } finally {
      setCaption("");
      setPostImg("");
    }
  }
  return (
    <div className="CreatePost">
      <div className="label">
        <label htmlFor="inputImg" className="labelImg">
          <img src={postImg2 || postImg} className="post-img" alt="" />
        </label>
        <input
          className="inputImgBox"
          type="file"
          id="inputImg"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <div className="rightOfCreatePost">
        <textarea
          className="captionInput"
          placeholder="what's in your mind?"
          onChange={(e) => {
            setCaption(e.target.value);
          }}
        />
        <button className="post-btn btn-primary" onClick={handlePostSubmit}>
          Post
        </button>
      </div>
    </div>
  );
}
export default CreatePost;
