import { Link } from "react-router-dom";
import { Button} from "../../components/PrimaryButton/styles";
import { ReactComponent as LogImage } from '../../assets/images/logomedio.svg';


function RecuperarSenha() {
  return (


    <>
    <div className="bg">
      <div className="login-container">

        <div className="base-card login-card">
        
          
            {/* <Header/> */}
            <form className="loginForm">
              <LogImage />
              <div className="title">
              <h1>Recuperar Senha</h1>
              </div>

              <div>
                <label>E-mail para recuperação</label>
                <input
                  id="recuperacao"
                  type="text"
                  name="recuperacao"
                  
                />
              </div>


              <Link to={"/novaSenha"}>
                <button className="user-login__submit-button" style={{ width: "120px", margin: "50px", padding: "5%"}} type="submit">
                  ENVIAR
                  </button>
              </Link>

              <Link style={{ textDecoration: "none", marginBottom: "50px" }} to={"/"}>
              <h4 style={{color:"black"}}>Voltar</h4>
              </Link>



            </form>
            {/* <Footer/> */}
        </div>
        </div>
      </div>
    </>

  )
} export default RecuperarSenha;