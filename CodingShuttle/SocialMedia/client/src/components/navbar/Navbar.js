import React, { useRef, useState } from "react";
import "./Navbar.scss";
import Avatar from "../avatar/Avatar";
import { useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import LoadingBar from "react-top-loading-bar";
function Navbar() {
  const navigate = useNavigate();
  const loadingref = useRef();
  const [loading, setLoading] = useState(false);
  function toggleLoadingBar() {
    if (loading) {
      setLoading(false);
      loadingref.current.complete();
    } else {
      setLoading(true);
      loadingref.current.continuousStart();
    }
  }

  return (
    <div className="Navbar">
      <LoadingBar color="#5f9fff" ref={loadingref} />
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
              navigate("/profile/adfsdf");
            }}
          >
            <Avatar />
          </div>
          <div className="logout hover-link" onClick={toggleLoadingBar}>
            <IoIosLogOut />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
