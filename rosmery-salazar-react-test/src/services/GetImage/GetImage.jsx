import React from 'react';

import './getImage.scss';

function GetImage(props) {
  
  const fr = new FileReader();
  
  const myFileField = React.createRef();  

  const uploadImage = (ev) => { 
    const file = ev.currentTarget.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target.result; 
        props.updateImage(base64Image); 
      };
      reader.readAsDataURL(file); 
    }
  };

  const getImage = () => {    
    const image = fr.result;    
    props.updateImage(image);
  };

  
  return (
    <div className="get-image">
      <label className="get-image__label">
        Add image
        <input
          type="file"
          ref={myFileField}
          className="get-image__upload-field"
          onChange={uploadImage}
        />
      </label>

     
    </div>
  );
}

// GetImage.propTypes = {
//   avatar: PropTypes.string.isRequired,
//   updateAvatar: PropTypes.func.isRequired,
// };

export default GetImage;