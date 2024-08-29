import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import { reliefGoodsApi } from "../api/reliefGoodsApi";
import userReducer from "./userSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer,
    [reliefGoodsApi.reducerPath]: reliefGoodsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      reliefGoodsApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
