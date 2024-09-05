import React, { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import { getData } from '../../utilities/providers';
import { DataTable, TableSearch, TablePagination } from '../../Components/Atoms/TableItems';
import { columns, initialRows } from '../../utilities/tableData';
import { TableHeader } from '../../Components/Atoms/TableItems/TableHeader';


export const Products = () => {
  
  const [rows, setRows] = useState(initialRows);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getData()
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
    const filtered = initialRows.filter(row =>
      row.instrumentName.toLowerCase().includes(searchValue)
    );
    setRows(filtered);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const pageSize = 5;
  const paginatedRows = rows?.slice((page - 1) * pageSize, page * pageSize);

  return (
    <>
      <TableHeader />
      <Paper style={{ padding: '20px', margin: '20px auto', width: '80%' }}>

        <TableSearch search={search} handleSearch={handleSearch} />

        <DataTable paginatedRows={paginatedRows} columns={columns} pageSize={pageSize} />

        <TablePagination rows={rows} pageSize={pageSize} page={page} handlePageChange={handlePageChange} />
      </Paper>
    </>
  );

};
