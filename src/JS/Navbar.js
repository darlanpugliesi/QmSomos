import React from 'react';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import Layout from './Layout';

function Navbar() {
  return (
    
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/loja" className="nav-link">Loja</Link>
        </li>
        <li className="nav-item">
          <Link to="/Sobre" className="nav-link">Sobre</Link>
        </li>
        <li className="nav-item">
          <Link to="/Suporte" className="nav-link">Suporte</Link>
        </li>
        <li className="nav-item">
          <Link to="/Comunidade" className="nav-link">Comunidade</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
