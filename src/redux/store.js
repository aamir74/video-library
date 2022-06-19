import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/AuthSlice";
import filterReducer from "./slices/FilterSlice";
export const store = configureStore({
  reducer: { userData: authReducer, filters: filterReducer },
});
