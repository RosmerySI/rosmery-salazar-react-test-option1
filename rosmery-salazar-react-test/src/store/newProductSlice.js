import { createSlice } from '@reduxjs/toolkit';
export const newProductSlice = createSlice({
  name: 'newProduct',
    initialState: {
        status: 'not added',     
        data:{}
    },
    reducers: {
        onAddingNewProduct: ( state, { payload } ) => {
            state.status = 'added';
            state.data=payload;           
            localStorage.setItem('newProduct', JSON.stringify(state,payload));       
        },
       
        
      
    }
});


// Action creators are generated for each case reducer function
export const {  onAddingNewProduct } = newProductSlice.actions;