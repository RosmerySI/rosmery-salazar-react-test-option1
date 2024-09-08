import { useNavigate } from 'react-router-dom';
import { modalCheck, modalInfo, modalSuccess } from '../utilities/modals';
import { deleteData, readProducts } from '../utilities/providers';



export const useProductActions = () => {
  const navigate = useNavigate();

  const handleEdit = async (product) => {
    localStorage.setItem('productEdit', JSON.stringify(product));
    navigate(`/products/${product.id}`);
  };

  const handleDetails = async (product) => {
    localStorage.setItem('productDetails', JSON.stringify(product));
    navigate(`/details/${product.id}`);
  };

  const handleDelete = async (product) => {
    const result = await modalCheck();
    if (result.isConfirmed) {
      await deleteData(product.id);
      readProducts();
      modalSuccess('Deleted!', 'The product has been deleted', 'success');
    } else {
      modalInfo('Canceled', 'The action was canceled.', 'info');
    }
  };

  return { handleEdit, handleDetails, handleDelete };
};
