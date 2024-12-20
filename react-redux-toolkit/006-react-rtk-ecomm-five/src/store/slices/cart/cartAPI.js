import axios from "axios";

export const fetchAllCartItems = async () => {
  return await axios.get("http://localhost:3000/cart");
};

export const addItemToCart = async (item) => {
  return await axios.post("http://localhost:3000/cart", item);
};

export const updateItemToCart = async (id, itemUpdate) => {
  return await axios.patch(`http://localhost:3000/cart/${id}`, itemUpdate);
};

export const deleteItemToCart = async (id) => {
  return await axios.delete(`http://localhost:3000/cart/${id}`);
};
