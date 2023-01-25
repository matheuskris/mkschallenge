import { RootReducer } from "../store";

export const selectProducts = (state: RootReducer) =>
  state.productsState.mksProducts;

export const selectIsLoading = (state: RootReducer) =>
  state.productsState.loading;
