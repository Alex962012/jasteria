import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";

export const fetchProducts: any = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const data = await axios.get("/newProducts/getAll");
    return data;
  }
);

export const createProduct: any = createAsyncThunk(
  "products/createProducts",
  async (params: any) => {
    const { data } = await axios.post("/newProducts/add", params);
    return data;
  }
);

const initialState = {
  products: {
    items: [],
    status: "loading",
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.products.status = "loading";
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.products.items = action.payload.data;
      state.products.status = "loaded";
    },
    [fetchProducts.rejected]: (state) => {
      state.products.items = [];
      state.products.status = "error";
    },
  },
});

export const productsReducer = productsSlice.reducer;
