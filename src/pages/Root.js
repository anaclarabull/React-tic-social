
import Home from "./Home/index";
import Cadastro from "./Cadastro";
import RecuperarSenha from "./RecuperarSenha";
import NovaSenha from "./NovaSenha";
import HistoricoFuncionarios from "../pages/HistoricoFuncionarios"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import AcessarCadastro from "./AcessarCadastro";
import Login from "../pages/Login";


function Routes() {
  return (

  

    <BrowserRouter>
  
      <Switch  >
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/cadastro" exact component={Cadastro} />
        <Route path="/recuperarSenha" exact component={RecuperarSenha} />
        <Route path="/novaSenha" exact component={NovaSenha} />
        <Route path="/listarFuncionarios" exact component={HistoricoFuncionarios} />
        <Route path="/acessarCadastro" exact component={AcessarCadastro}/>
      </Switch> 
      
    </BrowserRouter>
  )
}

export default Routes;