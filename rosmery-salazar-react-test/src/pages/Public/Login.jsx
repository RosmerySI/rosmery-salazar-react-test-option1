import React, { useEffect, useState } from 'react';
import { InputEmail } from '../../Components/Atoms/LoginItems/InputEmail/InputEmail';
import { InputPassword } from '../../Components/Atoms/LoginItems/InputPassword/InputPassword';
import { modalError, modalInfo, modalSuccess } from '../../utilities/modals';
import { ErrorsMessages, SubmitValidation, UpdateValue } from '../../utilities/validations';
import { useNavigate } from 'react-router-dom';
import  {useStoreUser}  from '../../hooks/useStoreUser.js'
import './login.scss';

export const Login = () => {

    const [inputList, setInputList] = useState({
        email: { value: 'rosmery.salazar0507@gmail.com', validationType: 'email', selected: false },
        password: { value: 'Rosmery123.', validationType: 'password', selected: false },
        confirmPassword: { value: 'Rosmery123.', validationType: 'password', selected: false },

    })

    const [errorList, setErrorList] = useState({
        email: { value: false, message: 'The email format is not correct' },
        password: { value: false, message: 'Maximum twelve characters and at least six characters containing an uppercase letter, a lowercase letter, a number and a special character' },
        confirmPassword: { value: false, message: 'Maximum twelve characters and at least six characters containing an uppercase letter, a lowercase letter, a number and a special character' }
    })

    const{startLoginWithEmailPassword} = useStoreUser();

    useEffect(() => {
        ErrorsMessages(inputList, errorList, setErrorList)
    }, [inputList])
    const navigate=useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()

        if (SubmitValidation(inputList, setInputList)) {
            inputList.password.value !== inputList.confirmPassword.value
                ?
                modalError('Passwords must be the same')
                :
                modalSuccess('The data was send')
            const form = {
                email: inputList.email.value,
                password: inputList.password.value
            }
            startLoginWithEmailPassword(form, navigate);
        } else {
            modalInfo('Enter your email and password')
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
