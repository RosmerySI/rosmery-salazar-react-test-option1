import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../../pages/Public/Login';
import './public.scss';


export const Public = () => {

    return (
        <div id='public-container'>
            <Routes>
                <Route path='/login' element={<Login  />} />

                <Route path='/*' element={<Navigate to={'/login'} />} />
            </Routes>
        </div>
    );
};
