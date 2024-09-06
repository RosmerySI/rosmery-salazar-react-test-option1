import axios from "axios";

export const readData = async () => {  
    
    try {
        const response = await axios.get('/api/products/1');
        return response.data;
        
    } catch (error) {
        console.log(error)
    
    }

    
    
};
export const createData = async (form) => { 
   
    // try {
    //     const response = await axios.post('/api/product/1');
    //     console.log(response); 
        
    // } catch (error) {
    //     console.log(error)
    
    // }
};
export const editData = async () => {  
    
    // try {
    //     const response = await axios.put('/api/product/1');
    //     console.log(response); 
        
    // } catch (error) {
    //     console.log(error)
    
    // }
};
export const deleteData = async () => {  
    
    // try {
    //     const response = await axios.delete('/api/product/1');
    //     console.log(response); 
        
    // } catch (error) {
    //     console.log(error)
    
    // }
};