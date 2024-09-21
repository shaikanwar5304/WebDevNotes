import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const e = action.payload?.attributes;
      const curItem = e
        ? {
            title: e.title,
            key: e.key,
            price: e.price,
            image: e.image.data.attributes.url,
          }
        : action.payload;
      console.log("curItem", curItem);
      const index = state.cart.findIndex((item) => item.key === curItem.key);
      if (index === -1) {
        state.cart.push({ ...curItem, quantity: 1 });
      } else {
        state.cart[index].quantity += 1;
      }
    },
    removeFromCart: (state, action) => {
      const curKey = action.payload?.attributes?.key || action.payload.key;
      const index = state.cart.findIndex((item) => item.key === curKey);
      if (index === -1) return;
      if (state.cart[index].quantity === 1) {
        state.cart = state.cart.filter((item) => item.key !== curKey);
      } else {
        state.cart[index].quantity -= 1;
      }
    },
  },
});
export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
