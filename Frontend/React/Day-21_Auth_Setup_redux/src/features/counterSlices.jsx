import { createSlice } from "@reduxjs/toolkit";

const counterSlices = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count++;
    },

    decrement: (state) => {
      state.count--;
    },

    incrementByValue: (state, action) => {
      state.count += Number(action.payload);
    },
  },
});

export const {
  increment,
  decrement,
  incrementByValue,
} = counterSlices.actions;

export default counterSlices.reducer;