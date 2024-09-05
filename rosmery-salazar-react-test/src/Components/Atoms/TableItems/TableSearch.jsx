import { TextField } from '@mui/material';
import React from 'react';

export const TableSearch = ({search,handleSearch}) => {
  return (
    <TextField
          label="Search instruments"
          variant="outlined"
          fullWidth
          value={search}
          onChange={handleSearch}
          style={{ marginBottom: '20px' }}         
          sx={{           
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'gray', 
              },
              '&:hover fieldset': {               
                borderColor: '#e02c1c', 
              },
              '&.Mui-focused fieldset': {               
                borderColor: '#e02c1c', 
              },
              
             
            
            },
          }}
        />
  );
};
