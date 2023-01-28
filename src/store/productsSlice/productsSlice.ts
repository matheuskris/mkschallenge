import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { Product } from "@/screens/Home";
import { api } from "@/lib/axios";

type ProductsState = {
  readonly mksProducts: Product[];
  readonly loading: boolean;
  readonly error: boolean;
};

const initialState: ProductsState = {
  mksProducts: [],
  loading: false,
  error: false,
};

type getProductsParams = {
  page: string;
  rows: number;
  sortBy: string;
  orderBy: string;
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (params: getProductsParams, { rejectWithValue }) => {
    try {
      const data = await api
        .get("/products", {
          params,
        })
        .then((response) => {
          return response.data.products as Product[];
        });
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    updateProducts(state, action) {
      state.mksProducts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.mksProducts = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const { updateProducts } = productsSlice.actions;

export default productsSlice.reducer;
