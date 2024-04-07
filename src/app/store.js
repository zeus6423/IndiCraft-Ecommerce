import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/ProductListSlice';
import authReducer from '../features/auth/authSlice'
import counterReducer from '../features/cart/CartSlice';
import { useReducer } from 'react';

export const store = configureStore({
  reducer: {
    product: productReducer,
    counter: counterReducer,
    auth:authReducer,
  },
});
