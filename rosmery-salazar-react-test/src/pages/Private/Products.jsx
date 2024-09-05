import React, { useEffect } from 'react';
import { getData } from '../../utilities/providers';
import { DataGrid } from '@mui/x-data-grid';
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'instrumentName', headerName: 'Instrument Name', width: 200 },
  { field: 'brand', headerName: 'Brand', width: 150 },
  { field: 'type', headerName: 'Type', width: 150 },
  { field: 'price', headerName: 'Price ($)', type: 'number', width: 110 },
  { field: 'fullDetails', headerName: 'Full Details', width: 300, valueGetter: (params) =>
      `${params.row.instrumentName || ''} by ${params.row.brand || ''} (${params.row.type || ''})`,
  },
];

const initialRows = [
  { id: 1, instrumentName: 'Stratocaster', brand: 'Fender', type: 'Electric Guitar', price: 1200 },
  { id: 2, instrumentName: 'Les Paul', brand: 'Gibson', type: 'Electric Guitar', price: 1500 },
  { id: 3, instrumentName: 'Precision Bass', brand: 'Fender', type: 'Bass Guitar', price: 900 },
  { id: 4, instrumentName: 'D-28', brand: 'Martin', type: 'Acoustic Guitar', price: 2500 },
  { id: 5, instrumentName: 'YFL-222', brand: 'Yamaha', type: 'Flute', price: 400 },
  { id: 6, instrumentName: 'Korg Kronos', brand: 'Korg', type: 'Keyboard', price: 3000 },
  { id: 7, instrumentName: 'DW Collector’s Series', brand: 'DW', type: 'Drum Set', price: 5000 },
  { id: 8, instrumentName: 'C5', brand: 'Cordoba', type: 'Classical Guitar', price: 500 },
  { id: 9, instrumentName: 'Nord Stage 3', brand: 'Nord', type: 'Keyboard', price: 3500 },
];
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
      row.instrumentName.toLowerCase().includes(searchValue) ||
      row.brand.toLowerCase().includes(searchValue)
    );
    setRows(filtered);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const pageSize = 5;
  const paginatedRows = rows.slice((page - 1) * pageSize, page * pageSize);

  return (
    <Paper style={{ padding: '20px', margin: '20px auto', width: '80%' }}>
      <TextField
        label="Search instruments"
        variant="outlined"
        fullWidth
        value={search}
        onChange={handleSearch}
        style={{ marginBottom: '20px' }}
      />

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={paginatedRows}
          columns={columns}
          pageSize={pageSize}
          rowsPerPageOptions={[5]}
          pagination
          disableSelectionOnClick
        />
      </div>

      <Pagination
        count={Math.ceil(rows.length / pageSize)}
        page={page}
        onChange={handlePageChange}
        color="primary"
        showFirstButton
        showLastButton
        siblingCount={2}
        boundaryCount={1}
        style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
      />
    </Paper>
  );
  
};
