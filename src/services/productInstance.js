import axios from "axios";

let productsConfig = {
  baseURL: import.meta.env.VITE_URL_PRODUCTS,
  Headers: {
    "Content-Type": "application/json",
  },
};

const productsInstance = axios.create(productsConfig);
export default productsInstance;
