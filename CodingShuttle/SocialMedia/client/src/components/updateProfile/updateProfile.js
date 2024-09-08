import React, { useState, useEffect } from "react";
import "./updateProfile.scss";
import userImg from "../../assets/user.png";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../../redux/slices/appConfigSlice";
import { UpdateMyProfile } from "../../redux/slices/appConfigSlice";
function UpdateProfile() {
  const myProfile = useSelector((state) => state.appConfigReducer.myProfile);
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
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(UpdateMyProfile({ name, bio, userImg2 }));
  }
  return (
    <div className="UpdateProfile">
      <div className="container">
        <div className="left-part">
          <div className="input-user-img">
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
        </div>
        <div className="right-part">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
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
          <button className="delete-account btn-primary">Delete Account</button>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;
