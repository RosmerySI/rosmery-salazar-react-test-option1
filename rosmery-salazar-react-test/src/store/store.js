import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './authSlice';
import { newProductSlice } from './newProductSlice';
import { productsSlice } from './productsSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    newProduct: newProductSlice.reducer,  
    products: productsSlice.reducer  
  
  },
})