import React from "react";
import { useParams } from "react-router-dom";

function Profile() {
  let parameters = useParams();
  return <div>Hello {parameters.userId}</div>;
}

export default Profile;
