import CheckToken from "./utils/CheckToken";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/profile/Profile";
import Feed from "./components/feed/Feed_";
import UpdateProfile from "./components/updateProfile/UpdateProfile";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import toast, { Toaster } from "react-hot-toast";
import UpdatePost from "./components/updatePost/UpdatePost";
export const TOAST_SUCCESS = "toast_success";
export const TOAST_FAILURE = "toast_failure";
export const TOAST_CUSTOM = "toast_custom";
function App() {
  const loadingref = useRef(null);
  const isLoading = useSelector((state) => state.appConfigSlice.isLoading);
  const toastData = useSelector((state) => state.appConfigSlice.toastData);
  useEffect(() => {
    if (isLoading) {
      loadingref.current?.continuousStart(0, 2);
    } else {
      loadingref.current?.complete();
    }
  }, [isLoading]);
  {
    /**when the isLoading variable changes the func inside useEffect will executes */
    // continuousStart = method to start the loading
    // complete = method to stop
  }
  useEffect(() => {
    switch (toastData.type) {
      case TOAST_SUCCESS:
        toast.success(toastData.message, {
          duration: 1000,
        });
        break;
      case TOAST_FAILURE:
        toast.error(toastData.message, {
          duration: 1500,
        });
        break;
      case TOAST_CUSTOM:
        toast(toastData.message, {
          duration: 1500,
          icon: toastData.icon,
        });
        break;
      default:
        toast(toastData?.message || "Something went wrong", {
          duration: 15000,
        });
        break;
    }
  }, [toastData]);
  return (
    <div>
      <LoadingBar height={2} color="#00ADFF" ref={loadingref} />
      {/** accessing element with variable loadingref */}
      {/** an element which we use to denote loading */}
      <Toaster />
      {/** for getting popups through out the app */}
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route element={<CheckToken />}>
          <Route element={<Home />}>
            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="/" element={<Feed />} />
            <Route path="/updateProfile" element={<UpdateProfile />} />
            <Route path="/updatePost/:postId" element={<UpdatePost />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
