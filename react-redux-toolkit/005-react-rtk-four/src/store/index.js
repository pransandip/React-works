import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slices/account.slice";
import bonusReducer from "./slices/bonus.slice";
import rewardReducer from "./reducers/reward.reducer";
import { adminApi } from "./api/admin.slice";

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
