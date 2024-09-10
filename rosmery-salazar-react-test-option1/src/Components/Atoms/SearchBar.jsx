import React, { useState } from 'react';

export const SearchBar = ({rows, setFilteredProducts}) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = rows.filter(product =>
          product.title.toLowerCase().includes(term)
        );
        setFilteredProducts(filtered);
      };
    
  return (
    
      <div className='search-container'>
        <input
          className='input'
          type="text"
          placeholder="Search by name"
          onChange={handleSearch}
          value={searchTerm}
        />
      </div>
   
  );
};
