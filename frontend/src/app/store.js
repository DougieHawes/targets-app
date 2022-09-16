import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import targetReducer from "../features/target/targetSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    target: targetReducer,
  },
});
