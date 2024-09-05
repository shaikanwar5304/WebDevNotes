import React, { useEffect } from "react";
import { axiosClient } from "../../utils/axiosClient";
function Home() {
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    var response;
    try {
      response = await axiosClient.get("/user/getMyPosts");
    } catch (error) {
      console.log(error);
    }
    console.log("got the response", response);
  }
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
