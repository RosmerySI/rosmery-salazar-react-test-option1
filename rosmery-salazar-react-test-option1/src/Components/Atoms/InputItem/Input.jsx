import React, { useState } from 'react';
import show from '../../../assets/images/show.png';
import hide from '../../../assets/images/hide.png';
import './inputStyle.scss';

export const Input = ({ type, id, value, onChange, label, error,name}) => {

  const [shownPassword, setShownPassword] = useState(true)

  return (
    <>
      <div className='input-container'>
        <label htmlFor="">{label}</label>
        <input
          type={type==='password'?shownPassword ? 'password' : "text":type}
          placeholder={type==='email'?'email@domain.com' : ''}
          value={value}
          id={id}
          name={name}
          onChange={onChange}
          
        />
        {
          type==='password'&&
          <div className='image-container'>
            <img onClick={() => setShownPassword(!shownPassword)} src={!shownPassword ?hide  : show} />
          </div>
        }


      </div>
      {
        error?.value &&
        <>

          <span>{error?.message}</span>
        </>
      }
    </>
  );
};
