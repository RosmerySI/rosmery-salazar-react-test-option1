import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
  name: 'auth',
    initialState: {
        status: 'not-authenticated',     
        
    },
    reducers: {
        onLogin: ( state, { payload } ) => {
            state.status = 'authenticated';           
            localStorage.setItem('authState', JSON.stringify(state));       
        },
       
        onLogout: ( state, { payload } ) => {
            state.status = 'not-authenticated';       
            state.dataBackend={};
            localStorage.removeItem('authState');
        },
      
    }
});

export const {  onLogin, onLogout } = authSlice.actions;