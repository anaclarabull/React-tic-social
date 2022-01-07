import { axiosInstance } from "axios";



export default ()=> {

axiosInstance.get('/api/v1/usuario/listarTodos')
.then((res)=>console.log('data, res.data'))
.catch((err)=> console.log('err',err));

};