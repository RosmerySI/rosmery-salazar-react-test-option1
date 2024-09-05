import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Product } from '../../pages/Private/Product';

export const Private = ({auth,setAuth}) => {
  return (
    <div id='public-container'>
    <Routes>
        <Route path='/product' element={<Product auth={auth} setAuth={setAuth} />} />

        <Route path='/*' element={<Navigate to={'/product'} />} />
    </Routes>
</div>
  );
};
