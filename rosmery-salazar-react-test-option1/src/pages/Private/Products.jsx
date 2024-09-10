import React, { useEffect, useState } from 'react';
import { useServices } from '../../hooks/useServices';
import { Table } from '../../Components/Molecules/Table';
import { ProductsHeader } from '../../Components/Molecules/ProductsHeader';
import { SearchBar } from '../../Components/Atoms/SearchBar';


export const Products = () => {

  const [rows, setRows] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
 

  const { products, startGettingProducts } = useServices()
  

  useEffect(() => {
    startGettingProducts()
  }, []);


  useEffect(() => {
    if (products?.length > 0) {
      setRows(products);
      setFilteredProducts(products);
    }
  }, [products]); 

  

  return (
    <div className='products-container'>
      <ProductsHeader/>
      <SearchBar rows={rows} setFilteredProducts={setFilteredProducts}/>
      <Table filteredProducts={filteredProducts} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );

};
