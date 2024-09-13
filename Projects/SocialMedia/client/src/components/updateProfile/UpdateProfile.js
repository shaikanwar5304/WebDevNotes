import React, { useState, useEffect } from "react";
import "./updateProfile.scss";
import userImg from "../../assets/user.png";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteProfileFunc,
  updateProfileFunc,
} from "../../redux/slices/profileSlice";
import { KEY_ACCESS_TOKEN, removeItem } from "../../utils/localStorageManager";
function UpdateProfile() {
  const myProfile = useSelector((state) => state.homeSlice.personalInfo);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [userImg2, setUserImg] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    setName(myProfile?.name || "");
    setBio(myProfile?.bio || "");
    setUserImg(myProfile?.avatar?.url);
  }, [myProfile]);
  function handleImageChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setUserImg(reader.result);
    };
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await dispatch(updateProfileFunc({ name, bio, userImg2 }));
    } catch (error) {}
  }

  async function handleDelete() {
    try {
      dispatch(deleteProfileFunc());
      removeItem(KEY_ACCESS_TOKEN);
    } catch (error) {}
  }
  return (
    <>
      <div className="UpdateProfile">
        <div className="container">
          <div className="left-part">
            <label htmlFor="inputImg" className="labelImg">
              <img src={userImg2 || userImg} alt="" />
            </label>
            <input
              id="inputImg"
              className="userImg"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div className="right-part">
            <form onSubmit={handleSubmit}>
              <h3 className="title">Update Profile</h3>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <textarea
                className="bio"
                type="text"
                value={bio}
                onChange={(e) => {
                  setBio(e.target.value);
                }}
              />
              <input
                type="submit"
                className="btn-primary"
                onClick={handleSubmit}
              />
            </form>
          </div>
        </div>
      </div>
      <div className="deleteProfile">
        <button className="btn-primary" onClick={handleDelete}>
          Delete Profile
        </button>
      </div>
    </>
  );
}

export default UpdateProfile;
