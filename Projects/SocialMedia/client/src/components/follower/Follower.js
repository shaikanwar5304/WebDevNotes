import React, { useEffect, useState } from "react";
import "./Follower.scss";
import Avatar from "../avatar/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserInfoFunc } from "../../redux/slices/profileSlice";
import {
  followAndUnfollowfunc,
  personalInfoFunc,
  suggestionsInfoFunc,
} from "../../redux/slices/homeSlice";
import { getItem, USER_ID } from "../../utils/localStorageManager";
function Follower({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const personalInfo = useSelector((state) => state.homeSlice.personalInfo);
  const [isFollowing, setIsFollowing] = useState();
  useEffect(() => {
    if (personalInfo?.followings?.find((item) => item._id === user._id)) {
      setIsFollowing(true);
    } else {
      setIsFollowing(false);
    }
  });
  async function handleUserFollow() {
    await dispatch(
      followAndUnfollowfunc({
        targetUserId: user._id,
      })
    );
    await dispatch(personalInfoFunc({ targetUserId: getItem(USER_ID) }));
    await dispatch(suggestionsInfoFunc({ targetUserId: getItem(USER_ID) }));
  }
  async function navigateToUser() {
    try {
      navigate(`/profile/${user._id}`);
    } catch (element) {}
  }
  return (
    <div className="follower">
      <div
        className="user-info"
        onClick={() => {
          navigateToUser();
        }}
      >
        <Avatar src={user?.avatar?.url} />
        <h4 className="name">{user?.name}</h4>
      </div>
      <h5 onClick={handleUserFollow} className="hover-link follow-link">
        {isFollowing ? "unFollow" : "follow"}
      </h5>
    </div>
  );
}

export default Follower;
