import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const appStore = configureStore({
  reducer: {
    count: counterSlice,
  },
});

export default appStore;
