import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/Products/productSlice';
import cartReducer from '../features/Cart/cartSlice';

const rootReducer = {
  products: productReducer,
  carts: cartReducer,
}

const store = configureStore({
  reducer: rootReducer,
});

export default store; 