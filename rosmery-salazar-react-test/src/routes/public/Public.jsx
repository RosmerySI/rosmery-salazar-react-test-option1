import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../../pages/Public/Login';
import './public.scss';


export const Public = ({ auth, setAuth }) => {
    return (
        <div id='public-container'>
            <Routes>
                <Route path='/login' element={<Login auth={auth} setAuth={setAuth} />} />

                <Route path='/*' element={<Navigate to={'/login'} />} />
            </Routes>
        </div>
    );
};
