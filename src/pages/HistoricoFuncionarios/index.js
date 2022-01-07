import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogImage } from '../../assets/images/logomedio.svg';
import api from "../../Services/api";
import "./index.scss";

import { Button } from "../../components/PrimaryButton/styles";


function Funcionarios() {
    const [usuario, setUsuario] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        async function fetchData() {
            const result = await api.get(`/api/v1/usuario/listarTodos`);

            setUsuario(result.data);
        }
    
        fetchData();
    }, []);


    return (
        <div className="bg">
            <div >

<div className="base-card login-card">
  <div className="loginForm">
    <div className="user-login">
<>
        <div style={{display: "flex",flexDirection: "column", alignItems:"center"}}> 
            <LogImage/>
        </div>
        <div style={{display: "flex",
            justifyContent: "rigth",
            flexDirection: "column", alignItems:"center"}}>
       
      
       
        <h1>Historico de usuarios</h1>


        <div>
                 
               

               

            {
        usuario.map(user => { 
                return (
                    <div key={user.id}>
                        {/* <Link to={`usuarios/${usuario?.id_usuario}`}> */}
                            <div >
                                <h2>Nome: <strong>{user?.nome}</strong></h2>
                                <h2>Id_usuario: {user?.id}</h2>
                                <h2>Login: {user?.login}</h2>
                                <h2>Data de nascimento: {user?.dataNasc}</h2>
                                <h2>Sexo: {user?.sexo}</h2>
                                <h2>Estado civil: {user?.estadoCivil}</h2>
                                <h2>Saudação: {user?.saudacao}</h2>
                                <h2>Nacionalidade: {user?.nacionalidade}</h2>
                                <h2>Naturalidade: {user?.naturalidade}</h2>
                                <h2>Nome do h2ai: {user?.nomeh2ai}</h2>
                                <h2>Nome da mãe: {user?.nomeMae}</h2>
                                <h2>h2NE: {user?.h2NE}</h2>
                                <h2>Data de admissão: {user?.dataAdmissao}</h2>
                                <h2>Data de demissão: {user?.dataDemissao}</h2>
                                <h2>Motivo demissão: {user?.motivoDemissao}</h2>
                                <h2>Ceh2: {user?.ceh2}</h2>
                                <h2>Numero: {user?.numero}</h2>
                                <h2>Logradouro: {user?.logradouro}</h2>
                                <h2>Bairro: {user?.bairro}</h2>
                                <h2>Cidade: {user?.cidade}</h2>
                                <h2>Telefone: {user?.telefone}</h2>
                                <h2>Celular: {user?.celular}</h2>
                                <h2>Telefone emergencial: {user?.telefoneEmergencia}</h2>
                                <h2>Email emh2resarial: {user?.emailEmh2resarial}</h2>
                                <h2>Email h2essoal: {user?.emailh2essoal}</h2>
                                <h2>Cargo: {user?.cargo}</h2>
                                <h2>Salario: {user?.salario}</h2>
                                <h2>Turno: {user?.turno}</h2>
                                <h2>Tih2o de contrato: {user?.tih2oContrato}</h2>
                                <h2>Data do contrato: {user?.dataContrato}</h2>
                                <h2>Escolaridade: {user?.escolaridade}</h2>
                                <h2>Suh2erior direto: {user?.suh2eriorDireto}</h2>
                                <h2>Email do suh2erior direto: {user?.emailSuh2eriorDireto}</h2>
                                <h2>Grau hierarquico: {user?.grauHierarquico}</h2>
                                <h2>Duração do contrato: {user?.duracaoContrato}</h2>
                                <h2>Vencimento do contrato: {user?.vencimentoContrato}</h2>
                                <h2>Deh2artamento: {user?.deh2artamento}</h2>
                                <h2>Ch2F: {user?.ch2f}</h2>
                                <h2>RG: {user?.rg}</h2>
                                <h2>Titulo de eleitor: {user?.tituloEleitoral}</h2>
                                <h2>Zona eleitoral: {user?.zonaEleitoral}</h2>
                                <h2>Seção eleitoral: {user?.secaoEleitoral}</h2>
                                <h2>Ch2TS numero: {user?.ch2tsNumero}</h2>
                                <h2>Ch2TS serie: {user?.ch2tsSerie}</h2>
                                <h2>Reservista: {user?.reservista}</h2>
                                <h2>CNH: {user?.cnh}</h2>
                                <h2>Banco: {user?.banco}</h2>
                                <h2>Agencia: {user?.agencia}</h2>
                                <h2>Conta corrente: {user?.contaCorrente}</h2>
                                <h2>h2IS: {user?.h2is}</h2>
                                <h2>h2assword: {user?.h2assword}</h2>
                                <h2>Valor da recissão: {user?.valorRecissao}</h2>
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