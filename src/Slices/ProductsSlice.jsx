import { createSlice } from "@reduxjs/toolkit";

export const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    getProducts: [],
    cartProducts: [],
    sliderData: [],
    selectData: [],
  },
  reducers: {
    addAllData: (state, action) => {
      return { ...state, getProducts: action.payload };
    },
    addSliderData: (state, action) => {
      return { ...state, sliderData: action.payload };
    },
    addCartData: (state, action) => {
      const checkExist = state.cartProducts.find(
        (i) => i.id == action.payload.id
      );
      if (!checkExist) {
        return {
          ...state,
          cartProducts: [...state.cartProducts, action.payload],
        };
      } else {
        return { ...state };
      }
    },
    removeFromCart: (state, action) => {
      const removeItem = action.payload;
      const findExitItem = state.cartProducts.find((i) => i.id === removeItem);
      if (findExitItem) {
        return {
          ...state,
          cartProducts: state.cartProducts.filter((i) => i.id !== removeItem),
        };
      }
    },
    addSelectData: (state, action) => {
      return { ...state, selectData: action.payload };
    },
  },
});
export const {
  addAllData,
  addCartData,
  addSliderData,
  removeFromCart,
  addSelectData,
} = ProductsSlice.actions;
export default ProductsSlice.reducer;
