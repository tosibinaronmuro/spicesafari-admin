import { createSlice } from "@reduxjs/toolkit";
const user = localStorage.getItem("adminAuthFood");
const initialState = {
  User: user ? JSON.parse(user) : null,
};

export const authStore = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isSuccess: (state, action) => {
      state.User = action.payload;
      localStorage.setItem("adminAuthFood", JSON.stringify(action.payload));
    },
    isLogOut: (state) => {
      state.User = null;
      localStorage.removeItem("adminAuthFood");
    },
  },
});

export const { isSuccess, isLogOut } = authStore.actions;

export default authStore.reducer;
