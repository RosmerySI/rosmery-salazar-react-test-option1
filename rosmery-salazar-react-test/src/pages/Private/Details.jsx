import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';



export const Details = () => {

    const [selectedItem, setSelectedItem] = useState(null);

    const { products } = useSelector((state) => state.products);

    const productDetails = JSON.parse(localStorage.getItem('productDetails'));


    useEffect(() => {
        const item = products?.find(item => item.id === productDetails.id);
        setSelectedItem(item);
    }, [products, productDetails.id]);

    return (
        <>
        {selectedItem ? (
          <div style={{border:'5px solid #e02c1c',width:'80%',display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h1>{selectedItem.title}</h1>
            <img src={selectedItem.image} alt={selectedItem.title} style={{height: '500px',width:'500px' }} />
            <p style={{width:'50%'}}> {selectedItem.description}</p>
            <h2>Price: ${selectedItem.price}</h2>
            <h3>Category: {selectedItem.category}</h3>
           
          </div>
        ) : (
          <h2>Cargando detalles del producto...</h2>
        )}
      </>
    );
};
