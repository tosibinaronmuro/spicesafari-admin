"use client";
import { configureStore } from "@reduxjs/toolkit";
import authStore from "./ToolkitQuery/authStore";
import { registerApi } from "./Api_Slices/authSlice";
import { orderApi } from "./Api_Slices/orderSlice";
import { usersApi } from "./Api_Slices/userSlice";

export const store = configureStore({
  reducer: {
    auth: authStore,
    [registerApi.reducerPath]: registerApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      registerApi.middleware,
      orderApi.middleware,
      usersApi.middleware,
    ]),
});
