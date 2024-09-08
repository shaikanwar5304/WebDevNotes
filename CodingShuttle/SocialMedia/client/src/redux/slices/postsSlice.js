import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";
import { setLoading } from "./appConfigSlice";
//getMyInfo is an action creator that returns a promise
export const getUserProfile = createAsyncThunk(
  "user/getUserProfile",
  async (body) => {
    try {
      const resp = await axiosClient.post("/user/getUserProfile", body);
      return resp.result;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const likeAndUnlikePost = createAsyncThunk(
  "post/likeAndUnlike",
  async (body) => {
    try {
      const resp = await axiosClient.post("/posts/like", body);
      console.log("resp from backend::", resp);
      return resp.result.post;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

const postsSlice = createSlice({
  name: "postsSlice",
  initialState: {
    userProfile: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.fulfilled, (state, action) => {
        console.log("inside fulfilled::", action.payload);
        state.userProfile = action.payload;
      })
      .addCase(likeAndUnlikePost.fulfilled, (state, action) => {
        const post = action.payload;
        console.log("post::", post);
        console.log("state.userProfile::", state.userProfile);
        const index = state?.userProfile.posts?.findIndex(
          (item) => item._id == post._id
        );
        if (index != undefined && index != -1) {
          console.log("state.userProfile::", state.userProfile);
          state.userProfile.posts[index] = post;
        }
      });
  },
});
export default postsSlice.reducer;
