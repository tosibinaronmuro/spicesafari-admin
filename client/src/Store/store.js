"use client";
import { configureStore } from "@reduxjs/toolkit";
import authStore from "./ToolkitQuery/authStore";
export const store = configureStore({
  reducer: {
    authStore,
  },
});
