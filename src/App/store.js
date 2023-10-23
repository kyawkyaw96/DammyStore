import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../Slices/ProductsSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});
