import axios from "axios";

const baseURL = {
  local: process.env.REACT_APP_LOCAL_API,
  prod: process.env.REACT_APP_PROD_API,
};

export default axios.create({
  baseURL:
    process.env.REACT_APP_NODE_ENV === "development"
      ? baseURL.local
      : baseURL.prod,
});
