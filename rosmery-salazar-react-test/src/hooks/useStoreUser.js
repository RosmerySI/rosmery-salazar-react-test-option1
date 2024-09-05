// import { loginWithEmailPassword } from "../../utilities/providers";
// import { getDocFirestore } from "../../utilities/firebaseDB";
import { useDispatch, useSelector } from "react-redux";
import { modalCharging, modalError } from "../utilities/modals";
import { onLogin } from "../store/authSlice";




export const useStoreUser = () => {


    const { status, dataBackend } = useSelector((state) => state.auth);
    // const { dataUsers } = useSelector((state) => state.users);  
    // const { editUser } = useSelector((state) => state.editusers);
    // const { dataRoles } = useSelector((state) => state.roles);  

    const dispatch = useDispatch();

    const startLoginWithEmailPassword = async (form, navigate) => {

        const validationEmail = 'rosmery.salazar0507@gmail.com'
        const validationPassword = 'Rosmery123.'

        if (form.email === validationEmail && form.password === validationPassword) {
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

    return {
        //* Propierties
        status,
        dataBackend,

        //*methods
        startLoginWithEmailPassword,
        startLogout,

    };


};