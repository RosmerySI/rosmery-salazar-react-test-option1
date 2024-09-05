
import api from "../api/Api";




export const getData = async () => {
    console.log('get data')
    
    try {
        const response = await api.get('/api/products/1');
        console.log(response); 
        
    } catch (error) {
        console.log(error)
    //   let status = error.response.status;
    //   let variable = error.response.data;
    //   manageError(status, variable);
    }
  };