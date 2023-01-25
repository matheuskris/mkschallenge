import { RootReducer } from "../store";

export const selectCartItems = (state: RootReducer) =>
  state.cartState.cartItems;

export const selectCartTotalItems = (state: RootReducer) =>
  state.cartState.totalItems;
