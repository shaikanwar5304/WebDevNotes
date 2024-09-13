import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";

export const personalInfoFunc = createAsyncThunk(
  "user/getPersonalProfile",
  async (body) => {
    try {
      const response = await axiosClient.post("/user/getUserProfile", body);
      return response.data.result;
    } catch (error) {}
  }
);
export const followAndUnfollowfunc = createAsyncThunk(
  "user/followAndUnFollow",
  async (body) => {
    try {
      const response = await axiosClient.post("/user/follow", body);
      return response.data.result;
    } catch (error) {}
  }
);

export const feedInfoFunc = createAsyncThunk(
  "/user/getFeedData",
  async (body) => {
    try {
      const response = await axiosClient.get("/user/getFeedData", body);
      return response.data.result;
    } catch (error) {}
  }
);

export const suggestionsInfoFunc = createAsyncThunk(
  "/user/getSuggestions",
  async () => {
    try {
      const response = await axiosClient.get("/user/getSuggestions");
      return response.data.result;
    } catch (error) {}
  }
);

const homeSlice = createSlice({
  name: "homeslice",
  initialState: {
    personalInfo: {},
    feedInfo: {},
    suggestionsInfo: [],
    followingsInfo: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(personalInfoFunc.fulfilled, (state, action) => {
        state.followingsInfo = action.payload?.followings;
        state.personalInfo = action.payload;
      })
      .addCase(feedInfoFunc.fulfilled, (state, action) => {
        state.feedInfo = action.payload;
      })
      .addCase(suggestionsInfoFunc.fulfilled, (state, action) => {
        state.suggestionsInfo = action.payload;
      });
  },
});

export default homeSlice.reducer;
