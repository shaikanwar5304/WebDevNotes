import React, { useEffect } from "react";
import "./Feed_.scss";
import Post from "../post/Post";
import { useSelector, useDispatch } from "react-redux";
import Follower from "../follower/Follower";
import { feedInfoFunc, personalInfoFunc } from "../../redux/slices/homeSlice";
import { getItem, USER_ID } from "../../utils/localStorageManager";
function Feed() {
  const dispatch = useDispatch();
  const feedInfo = useSelector((state) => state.homeSlice.feedInfo);
  const personalInfo = useSelector((state) => state.homeSlice.personalInfo);

  useEffect(() => {
    dispatch(feedInfoFunc({ targetUserId: getItem(USER_ID) }));
    dispatch(personalInfoFunc({ targetUserId: getItem(USER_ID) }));
  }, []);

  return (
    <div className="Feed">
      <div className="container">
        <div className="left-part">
          {feedInfo?.posts?.map((post, i) => {
            return <Post key={post._id} post={post} isMyPost={false} />;
          })}
        </div>
      </div>
      <div className="following">
        <h3 className="title">Your Feed is From</h3>
        {personalInfo?.followings?.map((user, i) => (
          <Follower key={i} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
