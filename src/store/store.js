import { configureStore } from "@reduxjs/toolkit";
import roleSlice from "./slices/role-slice";

export const store = configureStore({
  reducer: {
    role: roleSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
