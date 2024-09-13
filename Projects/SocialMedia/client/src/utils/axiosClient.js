import store from "../redux/store";
import { TOAST_FAILURE, TOAST_SUCCESS, TOAST_CUSTOM } from "../App";
import { setLoading, showToast } from "../redux/slices/appConfigSlice";
import axios from "axios"; //for making http requests
import {
  getItem,
  KEY_ACCESS_TOKEN,
  removeItem,
  setItem,
  USER_ID,
} from "./localStorageManager"; //for managing local storage

export const axiosClient = axios.create({
  //creating an axios instance on a base url
  baseURL: process.env.REACT_APP_SERVER_BASE_URL, //base url of the server
  withCredentials: true, //to send cookies with the request
});

axiosClient.interceptors.request.use((request) => {
  //while sending request
  const accessToken = getItem(KEY_ACCESS_TOKEN); //get access token from local storage
  request.headers["Authorization"] = `Bearer ${accessToken}`; //set access token in the header
  store.dispatch(setLoading(true)); //starting the loading bar
  return request;
});

axiosClient.interceptors.response.use(async (response) => {
  if (response.data.status === "ok") {
    store.dispatch(setLoading(false));
    if (response.data.statusCode == 202) {
      store.dispatch(
        showToast({
          type: TOAST_SUCCESS,
          message: response.data.message,
        })
      );
    }
    return Promise.resolve(response);
  }
  const originalRequest = response.config;
  const error = response.data.message;
  const statusCode = response.data.statusCode;

  if (
    //when refresh token expires send user to login page
    originalRequest.url === `/auth/refresh`
  ) {
    removeItem(KEY_ACCESS_TOKEN);
    store.dispatch(setLoading(false));
    window.location.replace("/login", "_self");
  } else {
    if (statusCode == 401) {
      const response = await axiosClient.get("/auth/refresh");
      if (response.data?.status === "ok") {
        setItem(KEY_ACCESS_TOKEN, response.data.result.accessToken);
        originalRequest.headers[
          "Authorization"
        ] = `Bearer ${response.data.result.accessToken}`;
        const resp = await axios(originalRequest);
        store.dispatch(setLoading(false));
        if (resp.data.statusCode == 202) {
          store.dispatch(
            showToast({
              type: TOAST_SUCCESS,
              message: response.data.message,
            })
          );
        }
        return Promise.resolve(resp);
      }
    } else {
      store.dispatch(
        showToast({
          type: TOAST_FAILURE,
          message: error + " from : " + response.config.url,
        })
      );
      store.dispatch(setLoading(false));
      return Promise.reject("error");
    }
  }
});
