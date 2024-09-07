import axios from "axios";

export const readData = async () => {  
    
    try {
        const response = await axios.get('/api/products');
       
        return response.data;
       
    } catch (error) {
        console.log(error)
    
    }  
    
};
export const createData = async (form) => { 
   
    try {
        const response = await axios.post('/api/products',form);
       
        
        
    } catch (error) {
        console.log(error)
    
    }
};
export const editData = async () => {  
    
    // try {
    //     const response = await axios.put('/api/product/1');
    //     console.log(response); 
        
    // } catch (error) {
    //     console.log(error)
    
    // }
};
export const deleteData = async (id) => {  
    
    try {
        const response= await axios.delete(`/api/products/${id}`);
          
        readData();
    
      } catch (error) {
        console.error('Error eliminando el producto:', error);
      }
};