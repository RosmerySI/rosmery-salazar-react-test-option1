import React, { useState } from 'react';
import { Input } from '../../Components/Atoms/InputItem/Input';
import { useForm } from '../../hooks/useForm';
import { modalError } from '../../utilities/modals';
import ProductImage from '../../services/ProductImage/ProductImage';
import GetImage from '../../services/GetImage/GetImage';
import '../../pages/pagesStyle.scss';

export const NewProduct = () => {

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    type: '',
    price: ''
  })

  const [avatar, setAvatar] = useState();
  const updateAvatar = (avatar) => {
    setAvatar(avatar);

};

  const nameForm = /^[A-Z][a-zA-Z\s!@#$%^&*()-_+=<>?]{1,}$/;
  const descriptionForm = /^[A-Z][a-zA-Z\s!@#$%^&*()-_+=<>?]{1,}$/;
  const priceForm = /^(1[1-9]|[3-9][0-9]|\d{3,})$/;
  const typeForm = /^[A-Z][a-zA-Z\s!@#$%^&*()-_+=<>?]{1,}$/;

  const formValidations = {
    name: [(value) => value.match(nameForm), 'Start with upercase letter and have more than one.'],
    description: [(value) => value.match(descriptionForm), 'Start with upercase letter and have more than one.'],
    type: [(value) => value.match(typeForm), 'Start with upercase letter and have more than one.'],
    price: [(value) => value.match(priceForm), 'Add a number bigger than 10 '],
  }
  const { name, description, type, price, onInputChange, nameValid, descriptionValid, typeValid, priceValid } = useForm(formData, formValidations);

  const handleSubmit = (e) => {
    console.log(nameValid, descriptionValid, typeValid, priceValid);
    e.preventDefault();
    if (nameValid === null && descriptionValid === null &&
      typeValid === null && priceValid === null) {

      const newProductForm = {
        title: name,
        price: price,
        description: description,
        image: image,
        category: '',

      }
      console.log(newProductForm)
    } else {
      modalError('You must complete the form.Start with upercase letter and have more than one. Also add a three digit number and bigger than zero')
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
          <ProductImage avatar={avatar} />
          <GetImage avatar={avatar} updateAvatar={updateAvatar} />
        </div>
        <Input
          type={'text'}
          id={'name'}
          value={name}
          onChange={onInputChange}
          label={'Instrument Name'}
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
