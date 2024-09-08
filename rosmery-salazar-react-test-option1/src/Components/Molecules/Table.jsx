import React, { useState } from 'react';
import deleteIcon from '../../assets/images/delete.png'
import editIcon from '../../assets/images/edit.png'
import detailsIcon from '../../assets/images/details.png'
import { useProductActions } from '../../hooks/useProductAtions';

export const Table = ({filteredProducts,currentPage,setCurrentPage}) => {

    const { handleEdit, handleDetails, handleDelete } = useProductActions();

    const productsPerPage = 5;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    const renderPageNumbers = () => {
      const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, currentPage + 2);
      const pageNumbers = [];
  
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <button
            key={i}
            style={{ marginLeft: '5px', fontSize: '18px' }}
            onClick={() => paginate(i)}
            className={i === currentPage ? 'active button-active' : 'button'}>
            {i}
          </button>
        );
      }
      return pageNumbers;
    };
    const [sortConfig, setSortConfig] = useState(null);
  
    const sortedProducts = [...currentProducts].sort((a, b) => {
      if (sortConfig !== null) {
        const { key, direction } = sortConfig;
        if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
        if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
        return 0;
      }
      return 0;
    });
  
    const requestSort = (key) => {
      let direction = 'ascending';
      if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    };
  
  return (
    <>
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th style={{ textAlign: 'left' }} onClick={() => requestSort('title')}>Name</th>
              <th style={{ textAlign: 'left' }} onClick={() => requestSort('title')}>Category</th>
              <th onClick={() => requestSort('price')}>Price</th>
              <th>Detalles</th>
              <th>Editar</th>
              <th>Borrar</th>
            </tr>
          </thead>
          <tbody>
            {sortedProducts.map((product) => (
              <tr key={product.id} >
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>
                  <div className='iconContainer'>
                    <img
                      src={detailsIcon}
                      style={{ width: '20px', height: '20px', margin: 'auto' }}
                      onClick={() => handleDetails(product)}
                    />
                  </div>
                </td>
                <td>
                  <div className='iconContainer'>
                    <img
                      src={editIcon}
                      style={{ width: '20px', height: '20px', margin: 'auto' }}
                      onClick={() => handleEdit(product)} />
                  </div>

                </td>
                <td>
                  <div className='iconContainer'>
                    <img
                      src={deleteIcon}
                      style={{ width: '20px', height: '20px', margin: 'auto' }}
                      onClick={() => handleDelete(product)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      <div className='page-numbers-container'  >{renderPageNumbers()}</div>
    </>
  );
};
