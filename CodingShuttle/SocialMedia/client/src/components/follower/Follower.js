import React, { useEffect, useState } from "react";
import "./Follower.scss";
import Avatar from "../avatar/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { followAndUnfollowUser } from "../../redux/slices/feedSlice";
import { useNavigate } from "react-router-dom";
function Follower({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const feedData = useSelector((state) => state.feedReducer.feedData);
  const [isFollowing, setIsFollowing] = useState();
  useEffect(() => {
    if (feedData.followings.find((item) => item._id === user._id)) {
      setIsFollowing(true);
    } else {
      setIsFollowing(false);
    }
  });
  function handleUserFollow() {
    dispatch(
      followAndUnfollowUser({
        targetUserId: user._id,
      })
    );
  }
  return (
    <div className="follower">
      <div
        className="user-info"
        onClick={() => navigate(`/profile/${user._id}`)}
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
