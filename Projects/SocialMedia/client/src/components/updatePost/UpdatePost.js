import React, { useRef } from "react";
import "./UpdatePost.scss";
import { useParams } from "react-router-dom";
import { updatePostFunc } from "../../redux/slices/profileSlice";
import { getItem, USER_ID } from "../../utils/localStorageManager";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
function UpdatePost() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const captionRef = useRef();
  async function handleSubmit(e) {
    e.preventDefault();
    await dispatch(
      updatePostFunc({
        postId: params.postId,
        caption: captionRef.current.value,
      })
    );
    navigate("/profile/" + getItem(USER_ID));
  }
  return (
    <div className="UpdatePost">
      <div className="box">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="enter new caption" ref={captionRef} />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default UpdatePost;
