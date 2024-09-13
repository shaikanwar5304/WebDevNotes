import React from "react";
import "./FollowList.scss";
import Follower from "../follower/Follower";
function FollowList({ list }) {
  return (
    <div className="followlist">
      {list.map((item) => (
        <Follower key={item._id} user={item} />
      ))}
    </div>
  );
}

export default FollowList;
