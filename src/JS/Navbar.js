import React, { useState } from 'react';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </button>
      <ul className={`navbar-nav ${isMenuOpen ? 'open' : ''}`}>
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
