import React, { useEffect, useState } from 'react';
import './login.scss';
import { InputEmail } from '../../Components/Atoms/LoginItems/InputEmail/InputEmail';
import { InputPassword } from '../../Components/Atoms/LoginItems/InputPassword/InputPassword';
import { modalError, modalInfo, modalSuccess } from '../../utilities/modals';
import { ErrorsMessages, UpdateValue } from '../../utilities/validations';

export const Login = () => {
    const [inputList, setInputList] = useState({
        email: { value: '', validationType: 'email', selected: false },
        password: { value: '', validationType: 'password', selected: false },
        confirmPassword: { value: '', validationType: 'password', selected: false },

    })

    const [errorList, setErrorList] = useState({
        email: { value: false, message: 'El formato de correo no es correcto' },
        password: { value: false, message: 'Mayúscula-Minúscula-Número-Caracter Especial' },
        confirmPassword: { value: false, message: 'Mayúscula,minúscula,número,caracter especial' }
    })
    useEffect(() => {
        ErrorsMessages(inputList, errorList, setErrorList)
    }, [inputList])

    const handleLogin = (e) => {
        e.preventDefault()
        modalInfo('No valido')
        if (SubmitValidation(inputList, setInputList)) {
            inputList.password.value !== inputList.confirmPassword.value ?
                modalError('Las contraseñas deben ser iguales') :
                modalSuccess('validado')
            // const form = {
            //     email: inputList.email.value,
            //     password: inputList.password.value
            // }
            // startLoginWithEmailPassword(form, setAuth, setUser, navigate);
        }
    }
    return (
        <form id='login-container' onSubmit={handleLogin} >
            <div className='items-container'>
                <h1 className='greeting-heading'>Hello</h1>
                <h2 className='greeting-heading'>Log in to your account</h2>
                <InputEmail
                    id={'email'}
                    value={inputList.email.value}
                    onChange={(e) => UpdateValue(e, 'email', inputList, setInputList)}
                    error={errorList.email}

                />
                <InputPassword label={'Password:'}
                    id={'password'}
                    value={inputList.password.value}
                    onChange={(e) => UpdateValue(e, 'password', inputList, setInputList)}
                    error={errorList.password}
                />
                <InputPassword 
                    label={'Confirm password:'}
                    id={'confirmPassword'}
                    value={inputList.confirmPassword.value}                  
                    onChange={(e) => UpdateValue(e, 'confirmPassword', inputList, setInputList)}
                    error={errorList.confirmPassword}
                 />
                <div id='button-container'>
                    <button type='submit' id='login-button'> Log in </button>
                </div>
            </div>
        </form>
    );
};
