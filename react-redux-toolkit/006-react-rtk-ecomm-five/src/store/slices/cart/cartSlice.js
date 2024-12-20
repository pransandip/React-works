import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllCartItems,
  addItemToCart,
  updateItemToCart,
  deleteItemToCart,
} from "./cartAPI";

const initialState = {
  items: [],
};

// Action creators thunks
export const getCartItems = createAsyncThunk("cart/fetchItems", async () => {
  const response = await fetchAllCartItems();
  return response.data;
});

export const addCartItem = createAsyncThunk("cart/addItem", async (item) => {
  const { id, title, brand, thumbnail, price } = item;
  const response = await addItemToCart({
    id,
    title,
    brand,
    thumbnail,
    price,
    quantity: 1,
  });
  return response.data;
});

export const deleteCartItem = createAsyncThunk(
  "cart/deleteItem",
  async (id) => {
    await deleteItemToCart(id);
    return id;
  }
);

export const updateCartItem = createAsyncThunk(
  "cart/updateItem",
  async ({ id, change }) => {
    const response = await updateItemToCart(id, change);
    return response.data;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.pending = false;
      })
      .addCase(getCartItems.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error.message;
      })
      .addCase(addCartItem.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
        state.pending = false;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload
        );
        state.items.splice(index, 1);
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        console.log(index, action.payload);
        state.items.splice(index, 1, action.payload);
      });
  },
});

export default cartSlice.reducer;
