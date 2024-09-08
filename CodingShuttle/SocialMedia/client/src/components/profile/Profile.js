import React, { useEffect, useState } from "react";
import "./Profile.scss";
import Post from "../post/Post";
import userImg from "../../assets/user.png";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CreatePost from "../createPost/CreatePost";
import { getUserProfile } from "../../redux/slices/postsSlice";
import { followAndUnfollowUser } from "../../redux/slices/feedSlice";
function Profile() {
  const navigate = useNavigate();
  const params = useParams();
  const userProfile = useSelector((state) => state.postsReducer.userProfile);
  const myProfile = useSelector((state) => state.appConfigReducer.myProfile);
  const dispatch = useDispatch();
  const [isMyProfile, setIsMyProfile] = useState(false);
  const feedData = useSelector((state) => state.feedReducer.feedData);
  const [isFollowing, setIsFollowing] = useState();
  useEffect(() => {
    if (feedData?.followings?.find((item) => item._id === params.userId)) {
      setIsFollowing(true);
    } else {
      setIsFollowing(false);
    }
  });
  useEffect(() => {
    dispatch(
      getUserProfile({
        userId: params.userId,
      })
    );
    setIsMyProfile(myProfile?._id === params.userId);
  }, [myProfile, params.userId, feedData]);
  function handleUserFollow() {
    dispatch(
      followAndUnfollowUser({
        targetUserId: params.userId,
      })
    );
  }
  return (
    <div className="Profile">
      <div className="container">
        <div className="left-part">
          {isMyProfile && <CreatePost />}
          {userProfile?.posts?.map((post, i) => {
            return <Post key={i} post={post} />;
          })}
        </div>
        <div className="right-part">
          <div className="profile-card">
            <img src={userProfile?.avatar?.url || userImg} alt="" />
            <h3 className="user-name">{userProfile?.name}</h3>
            <p>{userProfile?.bio}</p>
            <div className="follower-info">
              <h4>{userProfile?.followers?.length} Followers</h4>
              <h4>{userProfile?.followings?.length} Following</h4>
            </div>
            {!isMyProfile ? (
              isFollowing ? (
                <button
                  className="follow btn-primary"
                  onClick={handleUserFollow}
                >
                  un Follow
                </button>
              ) : (
                <button
                  className="follow btn-primary"
                  onClick={handleUserFollow}
                >
                  Follow
                </button>
              )
            ) : (
              <button
                className="update-profile btn-secondary"
                onClick={() => navigate("/updateProfile")}
              >
                Update Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
