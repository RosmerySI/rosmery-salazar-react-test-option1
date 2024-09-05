import React from 'react';
import '../inputStyle.scss'

export const InputEmail = ({ id, value, onChange, error }) => {
  return (
    <>
    <div className='input-container'>
      <label htmlFor="">Email:</label>
      <input
        type="email"
        placeholder='email@domain.com'
        value={value}
        id={id}
        onChange={onChange}
      />
      
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
