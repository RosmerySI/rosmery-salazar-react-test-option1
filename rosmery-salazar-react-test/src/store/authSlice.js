import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
  name: 'auth',
    initialState: {
        status: 'not-authenticated',       
        
    },
    reducers: {
        onLogin: ( state, { payload } ) => {
            state.status = 'authenticated';
            state.dataBackend = payload;
        
          
        },
       
        onLogout: ( state, { payload } ) => {
            state.status = 'not-authenticated';
            state.dataBackend={};
           
            
        },
      
    }
});


// Action creators are generated for each case reducer function
export const {  onLogin, onLogout } = authSlice.actions;