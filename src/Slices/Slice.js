import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingCart) {
        state.cart = state.cart.map((item) => {
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item;
        });
      } else {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      console.log("object", action);
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
