import { createSlice } from "@reduxjs/toolkit";
const user = localStorage.getItem("authFood");
const initialState = {
  User: user ? JSON.parse(user) : null,
};

export const authStore = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isSuccess: (state, action) => {
      state.User = action.payload;
      localStorage.setItem("authFood", JSON.stringify(action.payload));
    },
    isLogOut: (state) => {
      state.User = null;
      localStorage.removeItem("authFood");
    },
  },
});

export const { isSuccess, isLogOut } = authStore.actions;

export default authStore.reducer;
