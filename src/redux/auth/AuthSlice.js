import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.auth = action.payload;
    },
    removeUserToken: (state, action) => {
      state.auth = false;
    },
  },
});
export const { setUserToken, removeUserToken } = authSlice.actions;
export default authSlice.reducer;