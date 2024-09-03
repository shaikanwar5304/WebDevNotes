import React from "react";
import { KEY_ACCESS_TOKEN } from "../utils/localStorageManager";
import { Navigate, Outlet } from "react-router-dom";
import { getItem } from "../utils/localStorageManager";

function RequireUser() {
  const user = getItem(KEY_ACCESS_TOKEN);
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default RequireUser;
