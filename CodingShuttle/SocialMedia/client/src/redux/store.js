import { configureStore } from "@reduxjs/toolkit";
import appConfigReducer from "./slices/appConfigSlice";
import postsReducer from "./slices/postsSlice";
import feedReducer from "./slices/feedSlice";
export default configureStore({
  reducer: {
    //registering the appConfigReducer
    appConfigReducer,
    postsReducer,
    feedReducer,
  },
});
