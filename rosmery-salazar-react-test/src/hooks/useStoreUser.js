// import { loginWithEmailPassword } from "../../utilities/providers";
// import { getDocFirestore } from "../../utilities/firebaseDB";
import { useDispatch } from "react-redux";
import { modalCharging, modalError } from "../utilities/modals";
import { onLogin } from "../store/authSlice";

 

 
   export const useStoreUser = () => {
    // const manageError = (status, variable) => {
      
    //   switch (status) {
    //     case 400:
    //       return condicionalVariable(variable);
    //     case 403:
    //       return Swal.fire("No está autorizado para realizar esta operación");
    //     case 404:
    //       return Swal.fire("No se encuentra la información requerida");
    //     case 500:
    //       return Swal.fire("Error de Servidor");
    //   }
    // };
    // const condicionalVariable = (variable) => {
    //   if (variable === "") {
    //     Swal.fire("Se produjo un error");
    //   } else {
    //     Swal.fire(variable);
    //   }
    // };
    
    const { status, dataBackend } = useSelector((state) => state.auth);
    // const { dataUsers } = useSelector((state) => state.users);  
    // const { editUser } = useSelector((state) => state.editusers);
    // const { dataRoles } = useSelector((state) => state.roles);  
  
    const dispatch = useDispatch();

    const startLoginWithEmailPassword = async (form, setAuth, navigate) => {
        
        const validationEmail='rosmery.salazar0507@gmail.com'
        const validationPassword='Rosmery123.'
       
       if (form.email===validationEmail && form.password===validationPassword ) {
        dispatch(onLogin({ email: data.email, roles: data.roles[0] }));
        localStorage.setItem("email", JSON.stringify(form))
        setAuth(true)  
        
       } else {
        modalError('This user does not have authorization')
       }
    // const startLogin = async (form,setAuth ) => {
    //   try {
    //     const { data } = await mbControlApi.post("/user/login", form);
    //     localStorage.setItem("token", data.token);
    //     localStorage.setItem("token-init-date", new Date().getTime());
    //     dispatch(onLogin({ email: data.email, roles: data.roles[0] }));
    //     setAuth(true)
    //   } catch (error) {
    //     let status = error.response?.status;
    //     let variable = error.response?.data;
    //     manageError(status, variable);
    //   }
    // };
//     const forgotPassword = async ( {email} ) => {
//       try {
//         const headers = {
//           'Content-Type': 'application/json'
//         };
    
//         // Enviar el correo electrónico como un string dentro de un objeto JSON
//         await mbControlApi.post("/user/changePasswordRequest",  email , { headers });
        
//         Swal.fire(
//           "Excelente!",
//           "Un correo fue enviado a tu cuenta para cambiar tu contraseña",
//           "success"
//         );
//       } catch (error) {
//         let status = error.response.status;
//         let variable = error.response.data;
//         manageError(status, variable);
//       }
//     };
//     const forgotPasswordLink = async ({ linkForgot }) => {
     
//       try {
//         const { data } = await mbControlApi.post(
//           "/users/ConfirmChangePassword",
//           linkForgot
//         );
        
//       } catch (error) {
//         let status = error.response.status;
//         let variable = error.response.data;
//         manageError(status, variable);
//       }
//     };
  
//     const getUsers = async () => {
//       try {
//           const { data } = await mbControlApi.get("/user");
//           dispatch(onGettingUsers({ dataUsers: data }));
//       } catch (error) {
//           let status = error.response.status;
//           let variable = error.response.data;
//           manageError(status, variable);
//       }
//   };
  
  
//     const getRoles = async () => {
//       try {
//         const { data } = await mbControlApi.get("/rol");
  
//         dispatch(onGettingRoles({ roles: data }));
//       } catch (error) {
//         let status = error.response.status;
//         let variable = error.response.data;
//         manageError(status, variable);
//       }
//     };
  
//     const creatingUser = async ({ linkUser }) => {
      
//       try {
//         const { data } = await mbControlApi.post("/user/newUserConfirmation",linkUser);
       
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("token-init-date", new Date().getTime());
//         navigate('/login')
//       } catch (error) {
//         let status = error.response.status;
//         let variable = error.response.data;
//         manageError(status, variable);
//       }
//     };
  
//     const startCreatingUsuario = async ({ dataUser }) => {
    
//       try {
//         await mbControlApi.post( "/user/newUserRequest",dataUser);
//         Swal.fire(
//           "Exitoso",
//           "Se envió un enlace al correo que añadiste",
//           "success"
//         );
        
//       } catch (error) {
//         let status = error.response.status;
//         let variable = error.response.data;
//         manageError(status, variable);
//       }
//     };
//     const startModifyingRolesUser = async ({ modifyroleUser }) => {
//       try {
//         await mbControlApi.post("/user/modifyRoles",modifyroleUser);    
//       } catch (error) {
//         let status = error.response.status;
//         let variable = error.response.data;
//         manageError(status, variable);
//       }
//     };
  
//     const editUsers = async(rowvalue) => {
//       dispatch(onEditUsers(rowvalue));
//     };
//     const activateUsers = async (lockedUser) => {
//       try {
//           await mbControlApi.put(`/user/unlock/${lockedUser}`);
//           // Espera hasta que la operación anterior se complete antes de continuar
//       } catch (error) {
//           let status = error.response.status;
//           let variable = error.response.data;
//           manageError(status, variable);
//           throw error; // Re-lanza el error para que se propague a la función llamadora
//       }
//     };
  
//   const disactivateUsers = async (unlockedUser) => {
//       try {
//           await mbControlApi.put(`/user/lock/${unlockedUser}`);
//           // Espera hasta que la operación anterior se complete antes de continuar
//       } catch (error) {
//           let status = error.response.status;
//           let variable = error.response.data;
//           manageError(status, variable);
//           throw error; // Re-lanza el error para que se propague a la función llamadora
//       }
//   };
  
//     const navigate = useNavigate();
  
    const startLogout = (setAuth) => {
      
      dispatch(onLogout());
      localStorage.clear();
      setAuth(false)
    };
  
    return {
      //* Propiedades
      status,
      dataBackend,
      dataRoles,
      dataUsers,    
      editUser,
      
  
      //* Métodos
  
    //   getUsers,
    //   creatingUser,
    //   startCreatingUsuario,
    //   editUsers,
    //   activateUsers,
    //   disactivateUsers,
    //   getRoles,
    //   startModifyingRolesUser,
    startLoginWithEmailPassword,
      startLogout,
    //   forgotPassword,
    //   forgotPasswordLink,
    };
  };

};