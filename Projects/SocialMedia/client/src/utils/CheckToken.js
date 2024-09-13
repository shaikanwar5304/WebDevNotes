import React from "react";
import { KEY_ACCESS_TOKEN, getItem } from "../utils/localStorageManager";
import { Navigate, Outlet } from "react-router-dom";

function CheckToken() {
  const user = getItem(KEY_ACCESS_TOKEN);
  {
    /**checking if there is access_token in localstorage */
  }
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default CheckToken;
