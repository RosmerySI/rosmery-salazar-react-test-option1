import { createSlice } from '@reduxjs/toolkit';
export const productsSlice = createSlice({
  name: 'productsSlice',
    initialState: {
        status: 'no data',     
        products:{}
    },
    reducers: {
        onGettingProducts: ( state, { payload } ) => {
            state.status = 'data';
            state.products=payload;           
            localStorage.setItem('products', JSON.stringify(state,payload));       
        },   
        
      
    }
});


export const {  onGettingProducts } = productsSlice.actions;