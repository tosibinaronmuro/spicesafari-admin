"use client";
import { configureStore } from "@reduxjs/toolkit";
import authStore from "./ToolkitQuery/authStore";
import { registerApi } from "./Api_Slices/authSlice";
import { productApi } from "./Api_Slices/productSlice";
import { orderApi } from "./Api_Slices/orderSlice";

export const store = configureStore({
  reducer: {
    auth: authStore,
    [registerApi.reducerPath]: registerApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      registerApi.middleware,
      productApi.middleware,
      orderApi.middleware,
    ]),
});
