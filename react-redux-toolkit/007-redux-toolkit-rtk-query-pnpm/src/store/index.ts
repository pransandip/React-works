import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter/counterSlice";
import dogsApi from "./slices/dogs/dogsAPI";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    [dogsApi.reducerPath]: dogsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dogsApi.middleware),
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
