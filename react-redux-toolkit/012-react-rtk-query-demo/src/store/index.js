import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slices/account/accountSlice";
import bonusReducer from "./slices/bonus/bonusSlice";
import rewardReducer from "./reducers/reward.reducer";
import adminApi from "./apis/adminSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducer,
    reward: rewardReducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),
});

export default store;
