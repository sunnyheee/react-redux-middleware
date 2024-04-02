import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
  productList: [],
  selectedItem: null,
  isLoaging: false,
  error: null,
};
export const featchProducts = createAsyncThunk(
  "product/fetchAll",
  async (searchQuery, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/sunnyheee/react-webshopping/products?q=${searchQuery}`;
      let res = await fetch(url);
      return await res.json();
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchDetailProduct = createAsyncThunk(
  "product/fetchDetail",
  async (id, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/sunnyheee/react-webshopping/products/${id}`;
      let response = await fetch(url);
      let data = await response.json();
      console.log(data, "data");
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getSingleProduct(state, action) {
      state.selectedItem = action.payload.data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(featchProducts.pending, (state) => {
        state.isLoaging = true;
      })
      .addCase(featchProducts.fulfilled, (state, action) => {
        state.isLoaging = false;
        state.productList = action.payload;
      })
      .addCase(featchProducts.rejected, (state, action) => {
        state.isLoaging = false;
        state.error = action.payload;
      })
      .addCase(fetchDetailProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedItem = action.payload;
      })
      .addCase(fetchDetailProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
