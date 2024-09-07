import React, { useState } from 'react';
import { Input } from '../../Components/Atoms/InputItem/Input';
import { useForm } from '../../hooks/useForm';
import { modalError } from '../../utilities/modals';
import ProductImage from '../../services/ProductImage/ProductImage';
import GetImage from '../../services/GetImage/GetImage';
import { useStore } from '../../hooks/useStore';
import { useNavigate, useParams } from 'react-router-dom';
import '../../pages/pagesStyle.scss';

export const NewProduct = () => {

  const productEdit= JSON.parse(localStorage.getItem('productEdit'));

  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: productEdit ? productEdit.title : '',
    description: productEdit ? productEdit.description : '',
    price: productEdit ? productEdit.price : 0,
   })
   
  const [image, setImage] = useState(() => {
    const savedImage = localStorage.getItem('productImage');
    return savedImage ? savedImage : null;
  });

  const updateImage = (image) => {
    setImage(image);

  };
  const { startAddingNewProduct ,startEditingNewProduct} = useStore()

  const nameForm = /^[A-Z][a-zA-Z\s!@#$%^&*()-_+=<>?]{1,}$/;
  const descriptionForm = /^[A-Z][a-zA-Z\s!@#$%^&*()-_+=<>?]{1,}$/;

  const formValidations = {
    name: [(value) => value.match(nameForm), 'Start with upercase letter and have more than one.'],
    description: [(value) => value.match(descriptionForm), 'Start with upercase letter and have more than one.'],
    price: [(value) => !isNaN(value) && Number(value) >= 90, 'Add a number bigger than 90'],
  }
  const { name, description, price, onInputChange, nameValid, descriptionValid, priceValid } = useForm(formData, formValidations);
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    console.log(nameValid, descriptionValid, priceValid);
    e.preventDefault();
    if (nameValid === null && descriptionValid === null && priceValid === null) {

      const newProductForm = {
        title: name,
        price: parseInt(price),
        description: description,        
        image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg', 
        category: 'Electronic',
        
      }
      localStorage.setItem("productImage", image)
      !id?
      
      startAddingNewProduct(newProductForm, navigate)
      :    
      startEditingNewProduct(id,newProductForm, navigate)
      
 
    } else {
      modalError('You must complete the form. Add a word with  two or more letters that starts with upercase. Add a number equal or bigger than 90')
    }
  };

  return (

    <form className='new-product-container' onSubmit={handleSubmit}>
      <div className='items-container'>
        <h1 className='greeting-heading'>New Product</h1>
        <div style={{
          width: '100%', height: '30%', display: 'flex',
          flexDirection: 'column', justifyContent: 'center',
        }}>
          <ProductImage image={image} />
          {/* <GetImage image={image} updateImage={updateImage} /> */}
          <GetImage image={image} updateImage={updateImage} />
        </div>
        <Input
          type={'text'}
          id={'name'}
          value={name}
          onChange={onInputChange}
          label={'Name'}
          error={''}
          name={'name'}
        />
        <Input
          type={'text'}
          id={'description'}
          value={description}
          onChange={onInputChange}
          label={'Description'}
          error={''}
          name={'description'}
        />

        <Input
          type={'number'}
          id={'price'}
          value={price}
          onChange={onInputChange}
          label={'Price'}
          error={''}
          name={'price'}
        />

        <div id='button-container'>
          <button type='submit' id='login-button'> Submit </button>
        </div>
      </div>
    </form>


  );
};
