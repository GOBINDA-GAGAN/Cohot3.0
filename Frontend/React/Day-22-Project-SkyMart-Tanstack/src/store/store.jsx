import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlices";
import authReducer from "../features/authSlices";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    // cart:cartReducer
  },
});
