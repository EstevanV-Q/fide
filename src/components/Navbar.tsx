import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.querySelector('.navbar-menu');
      const button = document.querySelector('.mobile-menu-btn');

      if (
        menu &&
        button &&
        !menu.contains(event.target as Node) &&
        !button.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">HostPro</span>
          <div className="logo-glow"></div>
        </Link>

        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isMobileMenuOpen ? (
            <span>&#x2715;</span> /* Ícono de cerrar */
          ) : (
            <>
           <span> </span>
           <span></span>
           <span></span>
            
            </>
          )}
        </button>

        
      </div>

      <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
  <Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Inicio</Link>
  <Link to="/planes" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Planes</Link>
  <Link to="/sobre-nosotros" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Sobre Nosotros</Link>
  <Link to="/partners" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Partners</Link>
  <Link to="/status" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Status</Link>
  <Link to="/plans" className="nav-cta btn-primary" onClick={() => setIsMobileMenuOpen(false)}>Unirse a Discord</Link>

  {/* Solo visible en móvil si quieres */}
  <button className="nav-close-btn" onClick={() => setIsMobileMenuOpen(false)}>
    Cerrar menú
  </button>
</div>


    </nav>
    
  );
};

export default Navbar;