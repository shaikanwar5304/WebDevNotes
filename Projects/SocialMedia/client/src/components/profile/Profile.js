import React, { useEffect, useState } from "react";
import "./Profile.scss";
import Post from "../post/Post";
import userImg from "../../assets/user.png";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CreatePost from "../createPost/CreatePost";
import { getUserInfoFunc, getUserPosts } from "../../redux/slices/profileSlice";
import { getItem, USER_ID } from "../../utils/localStorageManager";
import {
  followAndUnfollowfunc,
  personalInfoFunc,
  suggestionsInfoFunc,
} from "../../redux/slices/homeSlice";
import FollowList from "../followList/FollowList";

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const [isFollowing, setIsFollowing] = useState();
  const personalInfo = useSelector((state) => state.homeSlice.personalInfo);
  const followingsInfo = useSelector((state) => state.homeSlice.followingsInfo);
  const userInfo = useSelector((state) => state.profileSlice.userInfo);
  const userPosts = useSelector((state) => state.profileSlice.userPosts);
  const isMyProfile = getItem(USER_ID) == params.userId;
  const [viewListFollowers, setViewListFollowers] = useState(false);
  const [viewListFollowings, setViewListFollowings] = useState(false);
  useEffect(() => {
    if (personalInfo?.followings?.find((item) => item._id == params.userId)) {
      setIsFollowing(true);
    } else {
      setIsFollowing(false);
    }
  }, [followingsInfo]);
  useEffect(() => {
    dispatch(
      getUserInfoFunc({
        targetUserId: params.userId,
      })
    );
    dispatch(
      personalInfoFunc({
        targetUserId: getItem(USER_ID),
      })
    );
    dispatch(
      suggestionsInfoFunc({
        targetUserId: getItem(USER_ID),
      })
    );
    dispatch(
      getUserPosts({
        targetUserId: params.userId,
      })
    );
  }, [isFollowing, params.userId]);
  async function handleUserFollow() {
    await dispatch(
      followAndUnfollowfunc({
        targetUserId: params.userId,
      })
    );
    setIsFollowing(!isFollowing);
  }
  function handleListFollowers() {
    setViewListFollowers(!viewListFollowers);
  }
  function handleListFollowings() {
    setViewListFollowings(!viewListFollowings);
  }
  return (
    <div className="Profile">
      <div className="left-part">
        <div className="profile-card">
          <img className="img" src={userInfo?.avatar?.url || userImg} alt="" />
          <h3 className="user-name">{userInfo?.name}</h3>
          <p>{userInfo?.bio}</p>
          <h4>{userInfo?.posts?.length} Posts</h4>
          <div className="follower-info">
            <h3 onClick={handleListFollowers}>
              {userInfo?.followers?.length} Followers
              {viewListFollowers && (
                <div className="popup">
                  <FollowList list={userInfo.followers} />
                  <button className="btn-primary" onClick={handleListFollowers}>
                    X
                  </button>
                </div>
              )}
            </h3>
            <h3 onClick={handleListFollowings}>
              {userInfo?.followings?.length} Following
              {viewListFollowings && (
                <div className="popup">
                  <FollowList list={userInfo.followings} />
                  <button
                    className="btn-primary"
                    onClick={handleListFollowings}
                  >
                    X
                  </button>
                </div>
              )}
            </h3>
          </div>

          {!isMyProfile ? (
            <button className="follow btn-primary" onClick={handleUserFollow}>
              {isFollowing ? "UnFollow" : "Follow"}
            </button>
          ) : (
            <button
              className="update-profile btn-primary"
              onClick={() => navigate("/updateProfile")}
            >
              Update Profile
            </button>
          )}
        </div>
      </div>
      <div className="right-part">
        <div className="create-post">{isMyProfile && <CreatePost />}</div>
        <div className="posts">
          {userPosts?.posts?.map((post, i) => {
            return <Post key={i} post={post} isMyPost={isMyProfile} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;
