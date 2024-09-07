import React from 'react';
import { useStore } from 'react-redux';

export const Details = () => {

    const{product} = useStore()

    const productEdit = JSON.parse(localStorage.getItem('productEdit'));
    
    console.log(product,productEdit);
   

    return (
        <div>
            dfgdfgdf
        </div>
    );
};
