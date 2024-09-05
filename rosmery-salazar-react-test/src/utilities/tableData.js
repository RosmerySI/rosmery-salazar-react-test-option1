export const columns = [
    { field: 'id', headerName: 'ID', width: 70, sortable: true },
    { field: 'instrumentName', headerName: 'Instrument Name ', width: 150, sortable: true },
    { field: 'brand', headerName: 'Brand', width: 150, sortable: true },
    { field: 'type', headerName: 'Type', width: 200, sortable: true },
    { field: 'price', headerName: 'Price ($)', type: 'number', width: 110, sortable: true },
    {
      field: 'fullDetails', headerName: 'Full Details', width: 300, sortable: true,
      valueGetter: (params) => {
        if (!params?.row) return '';
        return `${params.row?.instrumentName || ''} by ${params.row?.brand || ''} (${params.row?.type || ''})`;
      },
    },
  ];
  
export  const initialRows = [
    { id: 1, type: 'Stratocaster', brand: 'Fender', instrumentName: 'Electric Guitar', price: 1200 },
    { id: 2, type: 'Les Paul', brand: 'Gibson', instrumentName: 'Electric Guitar', price: 1500 },
    { id: 3, type: 'Precision Bass', brand: 'Fender', instrumentName: 'Bass Guitar', price: 900 },
    { id: 4, type: 'D-28', brand: 'Martin', instrumentName: 'Acoustic Guitar', price: 2500 },
    { id: 5, type: 'YFL-222', brand: 'Yamaha', instrumentName: 'Flute', price: 400 },
    { id: 6, type: 'Korg Kronos', brand: 'Korg', instrumentName: 'Keyboard', price: 3000 },
    { id: 7, type: 'DW Collector’s Series', brand: 'DW', instrumentName: 'Drum Set', price: 5000 },
    { id: 8, type: 'C5', brand: 'Cordoba', instrumentName: 'Classical Guitar', price: 500 },
    { id: 9, type: 'Nord Stage 3', brand: 'Nord', instrumentName: 'Keyboard', price: 3500 },
  ];