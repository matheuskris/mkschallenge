import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/screens/Home";

export type CartItemT = Product & {
  quantity: number;
};

type CartState = {
  readonly cartItems: CartItemT[];
  readonly totalItems: number;
};

const initialState: CartState = {
  cartItems: [],
  totalItems: 0,
};

export const cartSlice = createSlice({
  name: "cartState",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.totalItems++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item?.quantity === 1) {
        const newCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = newCartItems;
      } else if (item) {
        item.quantity--;
      }
      state.totalItems--;
    },
    removeItem: (state, action) => {
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = newCartItems;
      state.totalItems = state.cartItems.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0);
    },
  },
});

export const { addToCart, decrementQuantity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
