import React from 'react';
import {Pagination } from '@mui/material';

export const TablePagination = ({rows,pageSize, page,handlePageChange}) => {
  
  return (
    <Pagination
          count={Math.ceil(rows?.length / pageSize)}
          page={page}
          onChange={handlePageChange}
          color="error"
          showFirstButton
          showLastButton
          siblingCount={2}
          boundaryCount={1}
          style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
        />
  );
};
