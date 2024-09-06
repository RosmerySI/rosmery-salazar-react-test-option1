export const columns = [
 
  { field: 'title', headerName: 'Name', width: 180, sortable: true },
  { field: 'description', headerName: 'Description', width: 250, sortable: true },
  { field: 'category', headerName: 'Category', width: 150, sortable: true },
  { field: 'price', headerName: 'Price ($)',  width: 150, sortable: true ,type: 'number'},
  {
      field: 'details', headerName: 'Details', width: 300, sortable: true,
      valueGetter: (params) => {
          if (!params?.row) return '';
          return `${params.row?.title || ''}: ${params.row?.description || ''} (${params.row?.category || ''})`;
      },
  },
];

export const initialRows = [
  { id: 1, title: 'MacBook Pro', description: 'Apple 16-inch laptop', category: 'Electronic', price: 2400 },
  { id: 2, title: 'Samsung Galaxy S21', description: 'Samsung flagship smartphone', category: 'Electronic', price: 999 },
  { id: 3, title: 'Sony WH-1000XM4', description: 'Noise-cancelling headphones', category: 'Electronic', price: 350 },
  { id: 4, title: 'LG OLED CX', description: '4K OLED TV', category: 'Electronic', price: 1800 },
  { id: 5, title: 'PlayStation 5', description: 'Sony gaming console', category: 'Electronic', price: 499 },
  { id: 6, title: 'NVIDIA RTX 3080', description: 'Graphics card for gaming', category: 'Electronic', price: 699 },
  { id: 7, title: 'Apple Watch Series 6', description: 'Smartwatch with fitness tracking', category: 'Electronic', price: 399 },
  { id: 8, title: 'GoPro HERO9', description: 'Action camera', category: 'Electronic', price: 449 },
  { id: 9, title: 'Amazon Echo', description: 'Smart speaker with Alexa', category: 'Electronic', price: 99 },
];
