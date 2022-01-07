import Login from "../components/Login";
import Home from "./Home/index";
import Cadastro from "./Cadastro";
import RecuperarSenha from "./RecuperarSenha";
import NovaSenha from "./NovaSenha";
import ListarFuncionarios from "../components/ListaFuncionarios";
import {BrowserRouter, Switch, Route} from "react-router-dom";



function Routes() {
  return (

  

    <BrowserRouter>
  
      <Switch  >
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/cadastro" exact component={Cadastro} />
        <Route path="/recuperarSenha" exact component={RecuperarSenha} />
        <Route path="/novaSenha" exact component={NovaSenha} />
        <Route path="/listarFuncionarios" exact component={ListarFuncionarios} />
      </Switch> 
      
    </BrowserRouter>
  )
}

export default Routes;