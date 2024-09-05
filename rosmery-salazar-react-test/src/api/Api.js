import axios from 'axios';
//import { getEnvVariables } from '../helpers/getEnvVariables';


//const { VITE_API_URL } = getEnvVariables()

const api = axios.create({
    baseURL: 'https://fakestoreapi.com'
});


api.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        // 'Authorization': 'Bearer ' + localStorage.getItem('token')
    }    
    
    return config;
})


export default api;