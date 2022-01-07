import { Link } from "react-router-dom";
import { Button } from "../../components/PrimaryButton/styles";
import { ReactComponent as LogImage } from '../../assets/images/logomedio.svg';


function NovaSenha() {
  return (


    <>
      <div className="bg">
        <div className="redefinir-container" style={{ padding: "5%" }}>

          <div className="base-card login-card">


            {/* <Header/> */}
            <form className="loginForm">
              <LogImage />
              <div className="title">
                <h1>Redefinir Senha</h1>
              </div>

              <div>
                <label htmlFor="user">Nova senha</label>
                <input
                  id="senha"
                  type="text"
                  name="senha"

                />
              </div>

              <div>
                <label htmlFor="user">Repetir nova senha</label>
                <input
                  id="novaSenha"
                  type="text"
                  name="novaSenha"

                />
              </div>


              <Link to={"/"}>
                <button className="user-login__submit-button" style={{ width: "120px", margin: "50px", padding: "5%" }} type="submit">
                  ATUALIZAR
                </button>
              </Link>

              <Link style={{ textDecoration: "none", marginBottom: "50px" }} to={"/recuperarSenha"}>
                <spam>Voltar</spam>
              </Link>



            </form>
            {/* <Footer/> */}
          </div>
        </div>
      </div>
    </>

  )
} export default NovaSenha;