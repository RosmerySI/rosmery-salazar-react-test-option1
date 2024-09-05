import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './products.scss';

export const TableHeader = () => {
  return (
    <div className='title-create-container'>
        <h1>Products</h1>
        <div >
          <Link to='/newproduct'>
            <Button
              sx={{
                background: '#e02c1c',
                textTransform: 'none',
                color: 'white',
                "&:hover": {
                  border: "1px solid #e02c1c",
                  color: '#e02c1c',
                  backgroundColor: 'white'
                },
              }}
            >New Product
            </Button>
          </Link>
        </div>
      </div>
  );
};
