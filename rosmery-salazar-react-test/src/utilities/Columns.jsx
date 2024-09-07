import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import { deleteData, readData } from './providers';
import { useNavigate } from 'react-router-dom';
import { modalCheck, modalError, modalInfo, modalSuccess } from './modals';


export const Columns = () =>{ 

  const navigate = useNavigate()

  const handleDelete = async (id) => { 

    const result = await modalCheck();
    
    if (result.isConfirmed) {
      try {
        await deleteData(id);  
        readData();     
        modalSuccess('Deleted!', 'The product has been deleted', 'success');
      } catch (error) {
        
        modalError('Error', 'There was a problema trying to delete the product.', 'error');
      }
    } else {
     
      modalInfo('Canceled', 'The action was canceled.', 'info');
    }
    
  };

  const handleEdit = async(row) => { 
    localStorage.setItem('productEdit', JSON.stringify(row));   
    navigate(`/newproduct/${row.id}`);
  };
  const handleDetails = async(row) => { 
    localStorage.setItem('productDetails', JSON.stringify(row));   
    navigate(`/details/${row.id}`);
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
            onClick={() => handleDetails(params.row)}
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

