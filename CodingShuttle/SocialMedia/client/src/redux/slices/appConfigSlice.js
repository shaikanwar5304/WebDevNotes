import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";

//getMyInfo is an action creator that returns a promise
export const getMyInfo = createAsyncThunk(
  "user/getMyInfo",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const resp = await axiosClient.get("/user/getMyInfo");
      return resp.result;
    } catch (error) {
      return Promise.reject(error);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

export const UpdateMyProfile = createAsyncThunk(
  "user/updateProfile",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const resp = await axiosClient.put("/user/", body);
      console.log("resp", resp);
      return resp.result;
    } catch (error) {
      console.log("error in client", error);
      return Promise.reject(error);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

const appConfigSlice = createSlice({
  name: "appConfigSlice",
  initialState: {
    isLoading: false,
    myProfile: {},
    toastData: {},
  },
  reducers: {
    //by using reducers, we can change the state of the appConfigSlice
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    showToast: (state, action) => {
      state.toast = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMyInfo.fulfilled, (state, action) => {
        state.myProfile = action.payload;
      })
      .addCase(UpdateMyProfile.fulfilled, (state, action) => {
        state.myProfile = action.payload?.user;
      });
  },
});
export default appConfigSlice.reducer;
export const { setLoading, showToast } = appConfigSlice.actions;
