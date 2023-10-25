import { createSlice } from "@reduxjs/toolkit";

const cartStorage = localStorage.getItem("cart");
const initialState = {
  cartItems: cartStorage ? JSON.parse(cartStorage) : [],
  cartTotalQuantity: 0,
  cartTotalPrice: 0,
};

export const cartStore = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const updatedCartItems = state.cartItems.map((item) => {
        if (item._id === action.payload._id) {
          return {
            ...item,
            cartQuantity: item.cartQuantity + 1,
          };
        }
        return item;
      });

      state.cartItems = updatedCartItems;
      localStorage.setItem("cart", JSON.stringify(updatedCartItems));
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
