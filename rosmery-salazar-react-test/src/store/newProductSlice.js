import { createSlice } from '@reduxjs/toolkit';
export const newProductSlice = createSlice({
  name: 'newProduct',
    initialState: {
        status: 'not added',     
        newProduct:{},
        newProductEdited:{}
    },
    reducers: {
        onAddingNewProduct: ( state, { payload } ) => {
            state.status = 'added';
            state.newProduct=payload;           
            localStorage.setItem('newProduct', JSON.stringify(state,payload));       
        },
        onEditingNewProduct: ( state, { payload } ) => {
            state.status = 'edited';
            state.newProductEdited=payload;           
                  
        },
       
        
      
    }
});

export const {  onAddingNewProduct,onEditingNewProduct } = newProductSlice.actions;