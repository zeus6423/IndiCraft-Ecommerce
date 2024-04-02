import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/ProductListSlice';

import counterReducer from '../features/cart/CartSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    counter: counterReducer,
    
  },
});
