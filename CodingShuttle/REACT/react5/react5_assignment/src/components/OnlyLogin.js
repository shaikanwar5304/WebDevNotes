import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Validate from "./Validate";
import InputBox from "./InputBox";
function OnlyLogin() {
  let location = useLocation()
  if (Validate() ) {
    localStorage.setItem("login", "false");
   return location.state?(<Navigate to ="/"/>):<OnlyLogin/>
  }
  function func(b){
    console.log(b,"inside callback")
    if (b) {
      return  <Navigate to="/"/>;
    } else {
      return <OnlyLogin />;
    }
  }
  return (
    <InputBox callBack ={func} />
  );
}

export default OnlyLogin;
