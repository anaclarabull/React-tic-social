import { Link } from "react-router-dom";
import { Button, Header, Footer, Icon } from "../../components/PrimaryButton/styles";

import NotificationsIcon from '@mui/icons-material/Notifications';
import "./home.scss"

function Home() {
    return (


        <>
            <div className="bg-home">
                <Header />
                <div className="login-container">

                    <div className="base-card home-card">

                        <form className="loginForm">

                            <div className="title">

                                <div className="titleName">
                                    <h1>Olá, {"user"}!</h1>
                                </div>

                                <div className="titleWelcome">
                                    <h1>Bem vindo a Tic Social.</h1>
                                </div>
                            </div>

                            <Link to={"/listarFuncionarios"}>
                                <Button
                                    className="btnListarFun"
                                    type="submit">Criar e acompanhar plano
                                </Button>
                            </Link>


                            <Link to={"/cadastro"}>
                                <Button
                                    className="btnCadastrar"
                                    type="submit">Fazer Cadastro
                                </Button>
                            </Link>

                            <Link to={"/"}>
                                <Button
                                    className="btnCriarPlano"
                                    type="submit">Criar e acompanhar plano
                                </Button>
                            </Link>

                            <Link to={"/"}>
                                <Button
                                    className="btnPlano"
                                    type="submit">Habilitar Plano
                                </Button>
                            </Link>

                            <Link to={"/"}>
                                <Button
                                    className="btnAprovacao"
                                    type="submit">Aprovação
                                </Button>
                            </Link>

                            <Link to={"/"}>
                                <Button
                                    className="btnAcomp"
                                    type="submit">Acompanhamento
                                </Button>
                            </Link>

                            <Link to={"/"}>
                                <Button
                                    className="btnPdi"
                                    type="submit">Criar e ver PDI
                                </Button>
                            </Link>

                            <Link to={"/"}>
                                <Button
                                    className="btnValidacao"
                                    type="submit">Validação
                                </Button>
                            </Link>

                            <Link to={"/"}>
                                <Button
                                    className="btnPdiMentor"
                                    type="submit">Plano de Desenvolvimento Individual
                                </Button>
                            </Link>

                            <Link to={"/"}>
                                <Button
                                    className="btnMentoria"
                                    type="submit">Mentoria
                                </Button>
                            </Link>

                            <Link className="btnVoltar" to={"/"}>
                                <spam>Voltar</spam>
                            </Link>

                            <Link className="notification" to={"/cadastro"}>
                                <NotificationsIcon />
                            </Link>

                        </form>

                    </div>
                    {/* <Footer className="footer"/> */}
                </div>
            </div>




            {/* <Link to="/home">
               <PrimaryButton message="Link to Home" />
           </Link>
          

       <Link to="/home/products">
       <PrimaryButton message="Link to Products" />
       </Link> */}



        </>
    )
}

export default Home;