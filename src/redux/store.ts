import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { baseApi } from "./api/baseApi";
import cartReducer from "./slices/cartSlice";
const rootReducer = combineReducers({
  cart: cartReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
