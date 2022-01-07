import axios from "axios";

const api = axios.create({
    baseURL: "http://api-v1-ticsocial.herokuapp.com"
  
})

// const api = axios.create({
//     baseURL: "http://169.57.150.59:8002"
  
// })

export default api;