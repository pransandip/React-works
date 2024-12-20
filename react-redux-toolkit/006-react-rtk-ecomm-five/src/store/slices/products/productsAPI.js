import axios from "axios";

export const fetchAllProducts = async () => {
  return await axios.get("http://localhost:3000/products");
};
