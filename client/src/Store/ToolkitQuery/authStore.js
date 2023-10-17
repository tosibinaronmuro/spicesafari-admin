import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  User: null,
};

export const authStore = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isSuccess: (state, action) => {
      state.User = action.payload;
    },
    isLogOut: (state) => {
      state.User = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { isSuccess, isLogOut } = authStore.actions;

export default authStore.reducer;
