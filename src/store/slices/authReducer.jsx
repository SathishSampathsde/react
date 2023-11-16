// const initialState = {
//   isLoggedIn: false,
// };

// const authReducer = (state = initialState, action) => {
//   if (action.type === "login") {
//     return {
//       isLoggedIn: true,
//     };
//   }
//   if (action.type === "logout") {
//     return {
//       isLoggedIn: false,
//     };
//   }

//   return state;
// };
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
    },
    logout(state, action) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
