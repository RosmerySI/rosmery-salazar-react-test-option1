import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import { deleteData, readData } from './providers';
import { useNavigate } from 'react-router-dom';


export const Columns = () =>{ 

  const navigate = useNavigate()

  const handleDelete = async (id) => {    
    await deleteData(id)
    readData()
  };
  const handleEdit = async(row) => { 
    localStorage.setItem('productEdit', JSON.stringify(row));   
    navigate(`/newproduct/${row.id}`);
  };
  
 const columns = [ 
 
  { field: 'title', headerName: 'Name', width: 180, sortable: true },
  { field: 'description', headerName: 'Description', width: 250, sortable: true },
  { field: 'category', headerName: 'Category', width: 150, sortable: true },
  { field: 'price', headerName: 'Price ($)',  width: 150, sortable: true ,type: 'number'},
  
  {
    field: 'actions',
    headerName: 'Actions',
    width: 200,
    sortable: false,
    renderCell: (params) => {
      return (
        <>
          <IconButton
            color="primary"
            onClick={() => handleDetails(params.row.id)}
          >
            <InfoIcon />
          </IconButton>
          <IconButton
            color="primary"
            onClick={() => handleEdit(params.row)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => handleDelete(params.row.id)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      );
    },
  },
];
  return columns;
}

