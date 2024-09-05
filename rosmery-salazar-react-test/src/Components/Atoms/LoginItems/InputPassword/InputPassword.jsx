import React, { useState } from 'react';
import show from '../../../../assets/images/show.png';
import hide from '../../../../assets/images/hide.png';
import '../inputStyle.scss'

export const InputPassword = ({ label, id, value, onChange, error }) => {

  const [shownPassword, setShownPassword] = useState(true)

  return (
    <>
    <div className='input-container'>
      <label htmlFor="">{label}</label>   
      <input
        type={shownPassword ? 'password' : "text"}
        placeholder='Password'
        id={id}
        value={value}
        onChange={onChange}      
      />     
      <div className='image-container'>
        <img onClick={() => setShownPassword(!shownPassword)} src={!shownPassword ? show : hide} />
      </div>
    </div>
    {
      error?.value &&
      <div>
        <span>{error?.message}</span>
      </div>
    }
    </>
  );
};
