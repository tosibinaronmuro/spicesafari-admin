"use client";
import { configureStore } from "@reduxjs/toolkit";
import { orderApi } from "./RTKQUERY/orderSlice";
export const store = configureStore({
  reducer: {
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([orderApi.middleware]),
});
