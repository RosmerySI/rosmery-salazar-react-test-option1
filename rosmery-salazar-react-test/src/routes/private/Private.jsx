import React from 'react';
import { Navigate, Route, Routes} from 'react-router-dom';
import { Products } from '../../pages/Private/Products';
import { NewProduct } from '../../pages/Private/NewProduct';
import { Details } from '../../pages/Private/Details';

export const  Private = ({auth,setAuth}) => {
  
  return (
    <div id='public-container'>
    <Routes>
        <Route path='/product' element={<Products />} />
        <Route path='/newproduct/:id' element={<NewProduct  />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/*' element={<Navigate to={'/product'} />} />
    </Routes>
</div>
  );
};
