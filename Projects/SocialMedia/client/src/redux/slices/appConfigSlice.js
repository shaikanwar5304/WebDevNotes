import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";
//getMyInfo is an action creator that returns a promise
export const likeAndUnlikeFunc = createAsyncThunk(
  "post/likeAndUnlike",
  async (body) => {
    try {
      const resp = await axiosClient.post("/posts/likeUnlike", body);
      return resp.data.result.post;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

const appConfigSlice = createSlice({
  name: "appConfigSlice",
  initialState: {
    isLoading: false,
    myProfile: {},
    toastData: { type: "", message: "Welcome" },
  },
  reducers: {
    //by using reducers, we can change the state of the appConfigSlice
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    showToast: (state, action) => {
      state.toastData = action.payload;
    },
  },
});
export default appConfigSlice.reducer;
export const { setLoading, showToast } = appConfigSlice.actions;
