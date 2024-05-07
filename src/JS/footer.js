import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../css/footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-heading1">Woman Space</h2>
          <p className="footer-description">
          Woman Space é uma plataforma digital que visa dar destaque à arte feminina, proporcionando um espaço para mulheres artistas exibirem, promoverem e discutirem suas obras. Nossa comunidade é um lugar de apoio mútuo, onde artistas podem compartilhar suas experiências, colaborar em projetos e inspirar umas às outras!
          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading2">Links Rápidos</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/loja">Loja</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/comunidade">Comunidade</Link></li>
            <li><Link to="/suporte">Suporte</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading3">Redes Sociais</h3>
          <ul className="social-links">
            <li><a href="https://facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a></li>
            <li><a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Woman Space. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;