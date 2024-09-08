import React from 'react';
import './productImage.scss';

function ProductImage(props) {
  
  
  return (
    <div className="image">
      <div
        className="item__image"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
    </div>
  );
}


export default ProductImage;