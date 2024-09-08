import React, { useEffect } from "react";
import "./Feed.scss";
import Post from "../post/Post";
import Follower from "../follower/Follower";
import { useSelector, useDispatch } from "react-redux";
import { getFeedData } from "../../redux/slices/feedSlice";
function Feed() {
  const dispatch = useDispatch();
  const feedData = useSelector((state) => state.feedReducer.feedData);
  useEffect(() => {
    dispatch(getFeedData());
  }, [dispatch]);

  return (
    <div className="Feed">
      <div className="container">
        <div className="left-part">
          {console.log(feedData, feedData?.posts, "sdflsdf")}
          {feedData?.posts?.map((post, i) => {
            return <Post key={post._id} post={post} />;
          })}
        </div>
        <div className="right-part">
          <div className="following">
            <h3 className="title">You are following</h3>
            {feedData?.followings?.map((user, i) => (
              <Follower key={i} user={user} />
            ))}
          </div>
          <div className="suggestions">
            <h3 className="title">Suggestions for you</h3>
            {feedData?.suggestions?.map((user, i) => (
              <Follower key={i} user={user} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
