import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <button className={`burger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </button>
      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" className="nav-link" onClick={toggleMenu}>
          Accueil
        </NavLink><hr></hr>
        <NavLink to="/Programmation" className="nav-link" onClick={toggleMenu}>
          Programmation
        </NavLink><hr></hr>
        <NavLink to="/Concerts" className="nav-link" onClick={toggleMenu}>
          Concerts
        </NavLink><hr></hr>
        <NavLink to="/Billetterie" className="nav-link" onClick={toggleMenu}>
          Billetterie
        </NavLink><hr></hr>
        <NavLink to="FAQ" className="nav-link" onClick={toggleMenu}>
          FAQ
        </NavLink><hr></hr>
        <NavLink to="Informations Pratiques" className="nav-link" onClick={toggleMenu}>
          Informations Pratiques
        </NavLink><hr></hr>
        <NavLink to="Reseaux" className="nav-link" onClick={toggleMenu}>
          Réseaux Sociaux
        </NavLink><hr></hr>
      </nav>
    </div>
  );
};

export default Header;
