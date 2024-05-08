import './App.css'
import Navbar from './JS/Navbar.js'
import React from 'react'
import { ReactComponent as Logo } from './assets/logo.svg'
import Texto1 from './JS/Texto1.js'
import BotaoLogin from './JS/BotaoLogin.js'
import BotaoSignUp from './JS/BotaoSignUp.js'
import Footer from './JS/footer.js'
import Imagem from './JS/Imagem.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cadastro from './JS/Cadastro.js'
import Login from './JS/Login.js'
import Home from './JS/Home.js'
import Sobre from './JS/Sobre.js'
import Loja from './JS/Loja.js'

function App() {
  return (
    <header>
        <Router>
          <div className="App">
            <Navbar/>
            <Logo className="App-logo"/>
          </div>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/Sobre" element={<Sobre/>} />
            <Route exact path="/Suporte" element={<BotaoSignUp/>} />
            <Route exact path="/Comunidade" element={<BotaoSignUp/>} />
            <Route exact path="/cadastro" element={<Cadastro/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/loja" element={<Loja/>} />
            </Routes>
        <Footer/>
        </Router>
      </header>
  );
}

export default App;
