import { configureStore } from "@reduxjs/toolkit";
import appConfigSlice from "./slices/appConfigSlice";
import homeSlice from "./slices/homeSlice";
import profileSlice from "./slices/profileSlice";
export default configureStore({
  reducer: {
    //registering the appConfigReducer
    appConfigSlice,
    homeSlice,
    profileSlice,
  },
});
