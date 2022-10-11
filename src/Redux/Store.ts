import { configureStore } from "@reduxjs/toolkit";
import { CartSlide } from "./cartSlice";

export const store = configureStore({
  reducer: {
    products: CartSlide.reducer,
  },
});
