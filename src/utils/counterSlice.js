import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "count",
  initialState: {
    counter: 0,
    inputValue: 1,
  },
  reducers: {
    incrementCounter: (state) => {
      state.counter = state.counter + state.inputValue;
    },
    decrementCounter: (state) => {
      state.counter = state.counter - state.inputValue;
    },
    resetCounter: (state) => {
      state.counter = 0;
    },
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

export const {
  incrementCounter,
  decrementCounter,
  resetCounter,
  setInputValue,
} = counterSlice.actions;

export default counterSlice.reducer;
