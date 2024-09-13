import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";
import { useNavigate } from "react-router-dom";
export const getUserPosts = createAsyncThunk(
  "/user/getUserPosts",
  async (body) => {
    try {
      const response = await axiosClient.post("/user/getUserPosts", body);
      return response.data.result;
    } catch (error) {}
  }
);
export const deleteProfileFunc = createAsyncThunk(
  "/posts/deleteUser",
  async (body) => {
    try {
      const resp = await axiosClient.delete("/user/deleteUser");
      return resp.data.result;
    } catch (error) {}
  }
);
export const deletePostFunc = createAsyncThunk(
  "/posts/deletePost",
  async (body) => {
    try {
      const resp = await axiosClient.post("/posts/deletePost", body);
      return resp.data.result;
    } catch (error) {}
  }
);
export const getUserInfoFunc = createAsyncThunk(
  "user/getUserProfile",
  async (body) => {
    try {
      const response = await axiosClient.post("/user/getUserProfile", body);
      return response.data.result;
    } catch (error) {}
  }
);
export const createPostFunc = createAsyncThunk(
  "post/createPost",
  async (body) => {
    try {
      const response = await axiosClient.post("/post/", body);
    } catch (error) {}
  }
);

export const updateProfileFunc = createAsyncThunk(
  "user/updateProfile",
  async (body) => {
    try {
      const response = await axiosClient.put("/user/updateProfile", body);
    } catch (e) {}
  }
);
export const updatePostFunc = createAsyncThunk(
  "posts/deletePost",
  async (body) => {
    try {
      const response = await axiosClient.post("/posts/updatePost", body);
    } catch (error) {}
  }
);

const profileSlice = createSlice({
  name: "profileSlice",
  initialState: {
    userPosts: {},
    userInfo: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserPosts.fulfilled, (state, action) => {
        state.userPosts = action.payload;
      })
      .addCase(getUserInfoFunc.fulfilled, (state, action) => {
        state.userInfo = action.payload;
      });
  },
});

export default profileSlice.reducer;
