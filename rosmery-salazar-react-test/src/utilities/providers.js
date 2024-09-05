
import axios from "axios";

export const getData = async () => {  
    
    try {
        const response = await axios.get('/api/products/1');
        console.log(response); 
        
    } catch (error) {
        console.log(error)
    
    }
  };