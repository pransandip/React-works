import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/products/productsSlice";
import cartReducer from "./slices/cart/cartSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
