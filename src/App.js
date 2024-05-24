import './App.css'
import Navbar from './JS/Navbar.js'
import React from 'react'
import { ReactComponent as Logo } from './assets/logo.svg'
import Texto1 from './JS/Texto1.js'
import BotaoLogin from './JS/BotaoLogin.js'

import Imagem from './JS/Imagem.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cadastro from './JS/Cadastro.js'
import Login from './JS/Login.js'
import Home from './JS/Home.js'
import Sobre from './JS/Sobre.js'
import Loja from './JS/Loja.js'
import Comunidade from './JS/Comunidade'

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
            <Route exact path="/cadastro" element={<Cadastro/>} />
            <Route exact path="/Contato" element={<Comunidade/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/loja" element={<Loja/>} />
          </Routes>

        </Router>
      </header>
  );
}

export default App;
