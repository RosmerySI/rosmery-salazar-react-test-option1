import { createSlice } from '@reduxjs/toolkit';
export const newProductSlice = createSlice({
  name: 'newProduct',
    initialState: {
        status: 'not added',     
        newProduct:{}
    },
    reducers: {
        onAddingNewProduct: ( state, { payload } ) => {
            state.status = 'added';
            state.newProduct=payload;           
            localStorage.setItem('newProduct', JSON.stringify(state,payload));       
        },
       
        
      
    }
});

export const {  onAddingNewProduct } = newProductSlice.actions;