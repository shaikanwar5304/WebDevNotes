import {configureStore} from "@reduxjs/toolkit"
import productReducer from "./slices/productSlice"
import cartSlice from "./slices/cartSlice"
export default configureStore({
    reducer:{
        productReducer,
        cartSlice
    }
})