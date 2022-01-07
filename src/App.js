import Routes from "./pages/Root";
import React, {createContext, useContext} from "react";
import './App.css';


const Context = createContext();

function App() {

const token = 'valor token'

  return (
    <Context.Provider value={token}>
       <Routes />
    </Context.Provider>
  )
}



export default App;