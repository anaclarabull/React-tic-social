
import { ReactComponent as LogImage } from '../../assets/images/logomedio.svg';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from "../PrimaryButton/styles";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

import "./login.scss"







const Login =() =>{
const[login, setLogin] =useState('');
const[password, setPassword] =useState('');
const history = useHistory();

const collectData=async()=>{
  console.warn(login, password);
 let result = await fetch('http://api-v1-ticsocial.herokuapp.com/login',{
method: "post",
body:JSON.stringify({login,password}),
headers:{
  'Content-Type':'application/json',
  'Authorization': 'Bearer my-token',
 
},
  });
 result =await result.text();
  console.warn( result);

  localStorage.setItem('usuario',JSON.stringify(result));alert("Bem vindo a Tic Social.");
  
  history.push("/home");
  }
    
  


  return (
    <div className="bg">
      <div className="login-container">

        <div className="base-card login-card">
          <div className="loginForm">
            <div className="user-login">
              <LogImage />
              <h1>Acessar o Sistema</h1>

              <form >
                <div>
                  <label htmlFor="user">Usuário</label>
                  <input
                    id="user"
                    type="text"
                    name="user"
                    value={login}
                    onChange={(e) => { setLogin(e.target.value) }}
                  />
                </div>
                <div className="user-login__form-control">
                  <label htmlFor="password">Senha</label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                  />
                </div>
             


                <Button
                  onClick={collectData}
                  theme="contained-green"
                  className="user-login__submit-button"
                  rounded
                  type="button"
                >
                  ENTRAR
                </Button>
                <Grid item className='forgot'>
                  <Link href={"/recuperarSenha"} variant="body2">
                    <h4>Esqueceu a senha?</h4>
                  </Link>
                </Grid>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

  

    

 


export default Login;