import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png'
import '../styles/Header.css'
import { NavLink } from 'react-router-dom'



function Header() {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          const triggerPosition = 100; 
    
          if (scrollPosition > triggerPosition) {
            setIsFixed(true);
          } else {
            setIsFixed(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
   
    return (
        <div className={`header ${isFixed ? 'fixed-top' : ''}`}>
            <>
                <header className="navbar navbar-expand-sm px-3 mb-2">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbar-content"
                        aria-controls="navbar-content"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <nav className="collapse navbar-collapse" id="navbar-content">
                        <ul className="navbar-nav ms-auto d-flex align-items-sm-center">
                            <li className="nav-item">
                                <NavLink to="/" className="lien-acceuil text-decoration-none text-white me-3">Acceuil</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <img src={logo} alt="logo" className="logo" />
                </header>

            </>
            </div>

    )
}

export default Header