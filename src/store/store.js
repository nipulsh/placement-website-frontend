import { configureStore } from "@reduxjs/toolkit";
import roleSlice from "./slices/role-slice";

export const store = configureStore({
  reducer: {
    role: roleSlice,
  },
});

export default store;
