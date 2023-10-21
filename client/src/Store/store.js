"use client";
import { configureStore } from "@reduxjs/toolkit";
import authStore from "./ToolkitQuery/authStore";
import { registerApi } from "./Api_Slices/authSlice";
import { productApi } from "./Api_Slices/productSlice";

export const store = configureStore({
  reducer: {
    authStore,
    [registerApi.reducerPath]: registerApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      registerApi.middleware,
      productApi.middleware,
    ]),
});
