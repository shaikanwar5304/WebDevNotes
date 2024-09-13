import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useDispatch } from "react-redux";
// import { getMyInfo } from "../../redux/slices/appConfigSlice";
import Follower from "../../components/follower/Follower";
import { useSelector } from "react-redux";
import "./Home.scss";
import {
  personalInfoFunc,
  suggestionsInfoFunc,
} from "../../redux/slices/homeSlice";
import { getItem, USER_ID } from "../../utils/localStorageManager";
function Home() {
  const personalInfo = useSelector((state) => state.homeSlice.personalInfo);
  const suggestionsInfo = useSelector(
    (state) => state.homeSlice.suggestionsInfo
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(personalInfoFunc({ targetUserId: getItem(USER_ID) }));
    dispatch(suggestionsInfoFunc());
  }, []);
  return (
    <div className="home">
      <Navbar pInfo={personalInfo} />
      <div className="outlet">
        <Outlet />
      </div>
      <div className="suggestions">
        <h3 className="title">Suggestions for you</h3>
        {suggestionsInfo?.map((user, i) => (
          <Follower key={i} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Home;
