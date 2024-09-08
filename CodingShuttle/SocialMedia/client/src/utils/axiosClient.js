import axios from "axios";
import {
  getItem,
  KEY_ACCESS_TOKEN,
  removeItem,
  setItem,
} from "./localStorageManager";

import store from "../redux/store";
import { TOAST_FAILURE } from "../App";
import { setLoading, showToast } from "../redux/slices/appConfigSlice";
export const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
  withCredentials: true,
});

axiosClient.interceptors.request.use((request) => {
  const accessToken = getItem(KEY_ACCESS_TOKEN);
  request.headers["Authorization"] = `Bearer ${accessToken}`;
  store.dispatch(setLoading(true));
  return request;
});

axiosClient.interceptors.response.use(async (response) => {
  const data = response.data;
  store.dispatch(setLoading(false));
  if (data.status === "ok") {
    return data;
  }
  const originalRequest = response.config;
  const error = data.message;
  const statusCode = data.statusCode;
  store.dispatch(
    showToast({
      type: TOAST_FAILURE,
      message: error,
    })
  );
  if (
    //when refresh token expires send user to login page
    originalRequest.url === `/auth/refresh`
  ) {
    removeItem(KEY_ACCESS_TOKEN);
    window.location.replace("/login", "_self");
  }
  if (statusCode == 401) {
    console.log("calling refresh token");
    const response = await axiosClient.get("/auth/refresh");
    if (response.status === "ok") {
      setItem(KEY_ACCESS_TOKEN, response.result.accessToken);
      originalRequest.headers[
        "Authorization"
      ] = `Bearer ${response.result.accessToken}`;
      const resp = await axios(originalRequest);
      return resp.data;
    }
  }
  return Promise.reject(error);
});
