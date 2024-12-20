import { createAction, createSlice } from "@reduxjs/toolkit";

// Action creators
const incrementByAmount = createAction("account/incrementByAmount");

const initialState = {
  points: 0,
};

const bonusSlice = createSlice({
  name: "bonus",
  initialState,
  reducers: {
    increment: (state) => {
      state.points += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementByAmount, (state, action) => {
      if (action.payload >= 100) {
        state.points++;
      }
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment } = bonusSlice.actions;

export default bonusSlice.reducer;
