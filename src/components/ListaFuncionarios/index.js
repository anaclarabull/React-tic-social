import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogImage } from '../../assets/images/logomedio.svg';
import api from "../../Services/api";
import "./index.scss";

import { Button } from "../../components/PrimaryButton/styles";


function Funcionarios() {
    // const [newRepo, setNewRepo] = useState("");
    const [usuario, setUsuario] = useState([]);

   

    // useEffect(() => {
        
        async function fetchData() {


           const token = await api.get(`/api/v1/usuario/listarTodos`);
            api.interceptors.request.use(
                async (config) => {
                  if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                  }
                  return config;
                },
                (e) => {
                  return Promise.reject(e);
                }
              );
           
           setUsuario(token.data);
            console.log(token.data);
        }
    
        fetchData();

        console.log(usuario);
        
    // });

    // function deletarUsuario(e) {
    //     e.preventDefault();
    //    var response = api.delete(`/usuario/${e}`);
    //    alert(response);

    // }

    return (
        <div className="bg">
            <div className="login-container">

<div className="base-card login-card">
  <div className="loginForm">
    <div className="user-login">
<>
        <div style={{display: "flex",flexDirection: "column", alignItems:"center"}}> 
         <LogImage/></div>
        <div style={{display: "flex",
            justifyContent: "rigth",
            flexDirection: "column", alignItems:"center"}}>
       
      
       
        <h1>Historico de usuarios</h1>


        <div>
                  <label htmlFor="user">Insira a matricula</label>
                  <input
                    id="user"
                    type="text"
                    name="user"
                    
                    placeholder="Numero da matricula"
                 
                  />
                  
                </div>

                <Link to={"/ListaFuncionario"}>
                                <Button
                                    className="btnCadastro"
                                    type="submit">Buscar
                                </Button>
                            </Link>

            {
        usuario.map(user => { 
        
           
                return (
                    <div  >
                        {/* <Link to={`usuarios/${usuario?.id_usuario}`}> */}
                            <div id="formulario">
                                <p>Nome: <strong>{user?.nome}</strong></p>
                                <p>Id_usuario: {user?.id}</p>
                                <p>Login: {user?.login}</p>
                                <p>Data de nascimento: {user?.dataNasc}</p>
                                <p>Sexo: {user?.sexo}</p>
                                <p>Estado civil: {user?.estadoCivil}</p>
                                <p>Saudação: {user?.saudacao}</p>
                                <p>Nacionalidade: {user?.nacionalidade}</p>
                                <p>Naturalidade: {user?.naturalidade}</p>
                                <p>Nome do pai: {user?.nomePai}</p>
                                <p>Nome da mãe: {user?.nomeMae}</p>
                                <p>PNE: {user?.PNE}</p>
                                <p>Data de admissão: {user?.dataAdmissao}</p>
                                <p>Data de demissão: {user?.dataDemissao}</p>
                                <p>Motivo demissão: {user?.motivoDemissao}</p>
                                <p>Cep: {user?.cep}</p>
                                <p>Numero: {user?.numero}</p>
                                <p>Logradouro: {user?.logradouro}</p>
                                <p>Bairro: {user?.bairro}</p>
                                <p>Cidade: {user?.cidade}</p>
                                <p>Telefone: {user?.telefone}</p>
                                <p>Celular: {user?.celular}</p>
                                <p>Telefone emergencial: {user?.telefoneEmergencia}</p>
                                <p>Email empresarial: {user?.emailEmpresarial}</p>
                                <p>Email pessoal: {user?.emailPessoal}</p>
                                <p>Cargo: {user?.cargo}</p>
                                <p>Salario: {user?.salario}</p>
                                <p>Turno: {user?.turno}</p>
                                <p>Tipo de contrato: {user?.tipoContrato}</p>
                                <p>Data do contrato: {user?.dataContrato}</p>
                                <p>Escolaridade: {user?.escolaridade}</p>
                                <p>Superior direto: {user?.superiorDireto}</p>
                                <p>Email do superior direto: {user?.emailSuperiorDireto}</p>
                                <p>Grau hierarquico: {user?.grauHierarquico}</p>
                                <p>Duração do contrato: {user?.duracaoContrato}</p>
                                <p>Vencimento do contrato: {user?.vencimentoContrato}</p>
                                <p>Departamento: {user?.departamento}</p>
                                <p>CPF: {user?.cpf}</p>
                                <p>RG: {user?.rg}</p>
                                <p>Titulo de eleitor: {user?.tituloEleitoral}</p>
                                <p>Zona eleitoral: {user?.zonaEleitoral}</p>
                                <p>Seção eleitoral: {user?.secaoEleitoral}</p>
                                <p>CPTS numero: {user?.cptsNumero}</p>
                                <p>CPTS serie: {user?.cptsSerie}</p>
                                <p>Reservista: {user?.reservista}</p>
                                <p>CNH: {user?.cnh}</p>
                                <p>Banco: {user?.banco}</p>
                                <p>Agencia: {user?.agencia}</p>
                                <p>Conta corrente: {user?.contaCorrente}</p>
                                <p>PIS: {user?.pis}</p>
                                <p>Password: {user?.password}</p>
                                <p>Valor da recissão: {user?.valorRecissao}</p>
                                <h1>---------------------------------------------------------------------------</h1>
                                {/* <button style={{backgroundColor: "#FF4500"}} 
                                    class="btnCRUD" type="button" value={cliente?.id_cliente} id={`btnDeletar${cliente?.id_cliente}`} 
                                    onClick={(e) => {deletarCliente(e.target.value)}}>{`Deleta ${cliente?.nomeCompleto}`}
                                </button> */}
                                <Link to="/editafuncionarios">
                                    {/* <button style={{backgroundColor: "#add8e6"}} 
                                        class="btnCRUD" type="button" id={`btnDeletar${cliente?.id_cliente}`} 
                                        onClick={() => {}}>{`Edita ${cliente?.nomeCompleto}`}
                                    </button> */}
                                </Link>
                            </div>
                        {/* </Link> */}


                    </div>
                )
            })
        }
   <Link style={{margin:"50px" , textDecoration:"none"}} to={"/home"}>
    <h3 style={{color:"black"}}>Voltar</h3> 
    </Link>
    </div>
   
    </>
    </div>
    </div>
      </div>
    </div>
    </div>
    );
}

export default Funcionarios;