import { createSlice } from "@reduxjs/toolkit";

const cartStorage = localStorage.getItem("cartItems");
export const initialState = {
  cartItems: cartStorage ? JSON.parse(cartStorage) : [],
  cartTotalQuantity: 0,
  cartTotalPrice: 0,
};

export const cartStore = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = [
        ...state.cartItems,
        { ...action.payload, quantity: 1 },
      ];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeCartItems: (state, action) => {
      const itemId = action.payload;
      const removeCart = (state.cartItems = state.cartItems.filter(
        (item) => item._id !== itemId,
      ));
      state.cartItems = removeCart;
      localStorage.setItem("foodCart", JSON.stringify(state.cartItems));
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id,
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      }
      localStorage.setItem("foodCart", JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("foodCart");
    },
    getTotals: (state) => {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        },
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalPrice = total;
    },
  },
});

export const {
  addToCart,
  removeCartItems,
  decreaseQuantity,
  getTotals,
  clearCart,
} = cartStore.actions;

export default cartStore.reducer;
