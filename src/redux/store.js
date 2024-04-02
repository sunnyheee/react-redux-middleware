import { configureStore } from "@reduxjs/toolkit";
import authenticateReducer from "../reducers/authenticateReducer";
import productReducer from "../reducers/productSlice";

const store = configureStore({
  reducer: {
    auth: authenticateReducer,
    product: productReducer,
  },
});

export default store;
