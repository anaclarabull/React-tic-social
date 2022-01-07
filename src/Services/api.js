import axios from "axios";

const api = axios.create({
    baseURL: "http://api-v1-ticsocial.herokuapp.com"
  
})

export default api;