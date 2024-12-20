import { createAction, createReducer } from "@reduxjs/toolkit";

// Action creators
export const increment = createAction("reward/increment");
export const incrementByAmount = createAction("reward/incrementByAmount");

const initialState = { points: 1 };

const rewardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.points++;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.points += action.payload;
    });
});

export default rewardReducer;
