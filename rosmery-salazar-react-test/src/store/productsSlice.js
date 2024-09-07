import { createSlice } from '@reduxjs/toolkit';
export const productsSlice = createSlice({
  name: 'productsSlice',
    initialState: {
           
        products:{}
    },
    reducers: {
        onGettingProducts: ( state, { payload } ) => {
            
            state.products=payload;           
            localStorage.setItem('products', JSON.stringify(payload));       
        },   
        
      
    }
});


export const {  onGettingProducts } = productsSlice.actions;