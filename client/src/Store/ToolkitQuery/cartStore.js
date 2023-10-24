import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
};
export const cartStore = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const newproduct = action.payload;
      const product = state.cart.find(
        (cart) => cart.product.id === newproduct.id,
      );
      if (product) {
        product.quantiy += 1;
      } else {
        state.cart.push({ product: newproduct, quantiy: 1 });
      }
    },

    CartQuantity: (state, action) => {
      const { productId, amount } = action.payload;
      const cartItem = state.cart.find((cart) => cart.product.id === productId);
      if (cartItem) {
        cartItem.quantiy += amount;
      }
      if (cartItem.quantiy > 0) {
        state.cart = state.cart.filter((item) => item === cartItem);
      }
    },

    totalPriceCart: (state, action) => {},
  },
});
