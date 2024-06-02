import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Slices/Slice";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});
export default Store;
