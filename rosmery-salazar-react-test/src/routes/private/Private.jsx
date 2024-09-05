import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Products } from '../../pages/Private/Products';

export const Private = ({auth,setAuth}) => {
  return (
    <div id='public-container'>
    <Routes>
        <Route path='/product' element={<Products auth={auth} setAuth={setAuth} />} />

        <Route path='/*' element={<Navigate to={'/product'} />} />
    </Routes>
</div>
  );
};
