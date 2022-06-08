import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/AuthSlice";
import filterReducer from "./auth/FilterSlice";
export const store = configureStore({
  reducer: { userData: authReducer, filters: filterReducer },
});
