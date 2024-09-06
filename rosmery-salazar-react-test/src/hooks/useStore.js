import { useDispatch, useSelector } from "react-redux";
import { modalError } from "../utilities/modals";
import { onLogin } from "../store/authSlice";
import { onAddingNewProduct } from "../store/newProductSlice";
import { createData } from "../utilities/providers";



export const useStore = () => {

    const { status} = useSelector((state) => state.auth);
    const { data } = useSelector((state) => state.newProduct);  
  
    const dispatch = useDispatch();

    const startLoginWithEmailPassword = async (form, navigate) => {

        const validation = {
            email: 'rosmery.salazar0507@gmail.com',
            password: 'Rosmery123.'
        }


        if (form.email === validation.email && form.password === validation.password) {
            const authData = {
                email: form.email,
                status: 'authenticated',
            };
            localStorage.setItem('authState', JSON.stringify(authData));
            dispatch(onLogin());
            navigate('/products');
        } else {
            let status = error.response?.status;
            let variable = error.response?.data;
            manageError(status, variable);
            modalError('This user does not have authorization')
        }
    }

    const startLogout = (setAuth) => {
        dispatch(onLogout());
        localStorage.clear();
        setAuth(false)
    };

    const startAddingNewProduct = async (form, navigate) => {
        createData(form)
        dispatch(onAddingNewProduct(form));
        navigate('/products');
    }

    return {
        //* Propierties
        status,
        data,

        //*methods
        startLoginWithEmailPassword,
        startLogout,
        startAddingNewProduct,

    };


};