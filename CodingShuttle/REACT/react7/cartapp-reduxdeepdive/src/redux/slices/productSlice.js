import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchData = createAsyncThunk("products/fetch", async (e) => {
  console.log(e);
  const resp = await fetch("https://api.escuelajs.co/api/v1/products");
  return await resp.json();
});

const productSlice = createSlice({
  name: "productSlice", 
  initialState: {
    products: [],
    status: "idle", //pending, fulfilled, rejected
    err: null,
  },
  extraReducers: (builder)=> {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.products = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "rejected";
        state.err = action.error.message;
      });
  },
});
export default productSlice.reducer;
