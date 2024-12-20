import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts } from "./productsAPI";

const initialState = {
  products: [],
};

// create the thunk
export const getProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await fetchAllProducts();
    return response.data;
  }
);

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.pending = false;
      })
      .addCase(getProducts.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
