import React from 'react';
import PropTypes from 'prop-types';
import photo from '../../assets/images/hide.png';
import './productImage.scss';

function ProductImage(props) {
  const avatar = props.avatar === '' ? photo : props.avatar;
  
  return (
    <div className="profile">
      <div
        className="profile__avatar"
        style={{ backgroundImage: `url(${avatar})` }}
      ></div>
    </div>
  );
}

ProductImage.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default ProductImage;