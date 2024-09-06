import React from "react";
import Avatar from "../avatar/Avatar";
import "./Post.scss";
import backgroundImg from "../../assets/background.jpg";
import { IoIosHeartEmpty } from "react-icons/io";
function Post({ post }) {
  return (
    <div className="Post">
      <div className="heading">
        <Avatar />
        <h4>Anwar Shaik</h4>
      </div>
      <div className="content">
        <img src={backgroundImg} alt="" />
      </div>
      <div className="footer">
        <div className="like">
          <IoIosHeartEmpty className="icon" />
          <h4>4 likes</h4>
        </div>
        <p className="caption">
          This is nature Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Officiis neque dolorum eligendi alias optio vitae quas
          necessitatibus nihil consequatur nostrum? Eveniet possimus
          perspiciatis
        </p>
        <h6 className="time-ago">4hrs ago</h6>
      </div>
    </div>
  );
}

export default Post;
