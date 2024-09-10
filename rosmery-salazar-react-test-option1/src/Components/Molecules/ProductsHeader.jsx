import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useServices } from '../../hooks/useServices';

export const ProductsHeader = () => {

  const navigate = useNavigate()

  const handleNewProduct = () => {
    navigate('/products/create');
  };
  const {startLogout} = useServices()
  const handleLogout = () =>{
    startLogout()
  }

  return (
    <div className='product-header-container'>
      
      <div style={{display:'flex',flexDirection:'rows'}}>
        <button onClick={handleLogout} className='button' 
        style={{height:'40px',marginRight:'5px', fontSize:'16px'}}>Log Out</button>
        <h1>Products</h1>
        </div>
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
