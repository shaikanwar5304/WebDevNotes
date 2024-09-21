import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import cartSlice from "./cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { thunk } from "redux-thunk"; // Named import

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  categorySlice,
  cartSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export const persistor = persistStore(store);
