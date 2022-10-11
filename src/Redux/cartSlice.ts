import { createSlice } from "@reduxjs/toolkit";
import { CartType } from "../@type/cart";

const initialState: CartType[] = [];
export const CartSlide = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addCart: (state, action) => {
      // if (state) {
        state = [action.payload, ...state];
      // } else {
      //   state = [action.payload];
      // }
      return state;
    },
  },
});

export const CartAciton = CartSlide.actions;
