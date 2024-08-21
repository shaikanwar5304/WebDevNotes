import React from "react";
import { Outlet } from "react-router-dom";
import Validate from "./Validate";
import InputBox from "./InputBox";
function Login() {
  if (Validate()) {
    return <Outlet />;
  }
  function func(b){
    console.log(b,"inside callback");
    if(b){
      return <Outlet/>
    }else{
      return <Login/>
    }
  }

  return (
    <InputBox callBack={func} />
  );
}
export default Login;