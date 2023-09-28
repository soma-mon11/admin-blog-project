import axios from 'axios';

export default axios.create({
   // baseURL: `http://localhost:9000/`,
    baseURL: `http://3.143.38.212:5004/`,
  
    // headers:{
    //     'Content-Type': 'application/json',
    // }
});