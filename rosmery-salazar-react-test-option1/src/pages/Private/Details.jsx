import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



export const Details = () => {

    const [selectedItem, setSelectedItem] = useState(null);

    const { products } = useSelector((state) => state.products);

    const productDetails = JSON.parse(localStorage.getItem('productDetails'));

    const navigate= useNavigate()

    useEffect(() => {
      if (!productDetails || !productDetails.id) {
        console.error("No product details found in localStorage");
        return;
      }
  
      if (Array.isArray(products)) {
        const item = products.find((item) => item.id === productDetails.id);
        setSelectedItem(item || null); // Set selectedItem or null if no item found
      }
    }, [products, productDetails]);
    
    if (!selectedItem && productDetails && products.length > 0) {
      return <h2>Producto no encontrado</h2>;
    }

    return (
        <>
        {selectedItem ? (
          <div className='details-container' >
            <h1 style={{textAlign:'center'}}>{selectedItem.title}</h1>
            <img 
            src={selectedItem.image} 
            alt={selectedItem.title}
            style={{height: '200px',width:'200px' }} 
            />
            <p style={{width:'70%',textAlign:'justify',margin:0}}> {selectedItem.description}</p>
            <h2 style={{margin:'0px'}}>Price: ${selectedItem.price}</h2>
            <h3 style={{margin:'0px'}} >Category: {selectedItem.category}</h3>
            <button 
            style={{
              height:'50px',
              width:'100px',
              border:'1px solid #e02c1c', 
              borderRadius:'5px',
              cursor:'pointer',
              fontSize:'18px'
            }} 
            onClick={()=>navigate('/products')}> 
              Back 
            </button>
          </div>
        ) : (
          <h2>Cargando detalles del producto...</h2>
        )}
        
      </>
    );
};
