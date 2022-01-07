import axios from "axios";

const api = axios.create({
    baseURL: "http://api-v1-ticsocial.herokuapp.com"
  
})



// const api = axios.create({
//     baseURL: "http://169.57.150.59:8002"
  
// })

api.interceptors.request.use(
    (config) => {
        const userJWT = localStorage.getItem('usuario');

        if(userJWT) {
            config.headers.Authorization = `Bearer ${userJWT}`;
        }
        return config;
    },
    (e) => {
      return Promise.reject(e);
    }
);

export default api;