import React, { useRef, useState } from "react";
import "./Navbar.scss";
import Avatar from "../avatar/Avatar";
import { useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { axiosClient } from "../../utils/axiosClient";
import { KEY_ACCESS_TOKEN, removeItem } from "../../utils/localStorageManager";
import { setLoading } from "../../redux/slices/appConfigSlice";
function Navbar() {
  const navigate = useNavigate();
  const myProfile = useSelector((state) => state.appConfigReducer.myProfile);
  async function handleLogout() {
    try {
      await axiosClient.post("/auth/logout");
      removeItem(KEY_ACCESS_TOKEN);
      navigate("/login");
    } catch (e) {}
  }
  return (
    <div className="Navbar">
      <div className="container">
        <h2
          className="banner hover-link"
          onClick={() => {
            navigate("/");
          }}
        >
          Social Media
        </h2>
        <div className="right-side">
          <div
            className="profile"
            onClick={() => {
              navigate(`/profile/${myProfile?._id}`);
            }}
          >
            <Avatar src={myProfile?.avatar?.url} />
          </div>
          <div className="logout hover-link" onClick={handleLogout}>
            <IoIosLogOut />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
