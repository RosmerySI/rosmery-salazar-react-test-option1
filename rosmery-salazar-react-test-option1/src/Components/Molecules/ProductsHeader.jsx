import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ProductsHeader = () => {

  const navigate = useNavigate()

  const handleNewProduct = () => {
    navigate('/products/create');
  };

  return (
    <div className='product-header-container'>
        <h1>Products</h1>
        <button
          style={{
            height: '50px',
            width: '100px',
            border: '1px solid #e02c1c',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '18px',
            backgroundColor:'white'
          }}
          onClick={() => navigate('/users')}>
          Users
        </button>
        <div style={{ height: '60%', width: '200px', fontSize: '16px', }}>

          <button
            style={{ fontSize: '16px', float: 'right' }}
            className='button'
            onClick={handleNewProduct}
          >
            New Product
          </button>
        </div>
      </div>
  );
};
