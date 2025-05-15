import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/planes">Planes</Link></li>
              <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
              <li><Link to="/partners">Partners</Link></li>
              <li><Link to="/status">Status</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li><Link to="/terminos">Términos y Condiciones</Link></li>
              <li><Link to="/privacidad">Política de Privacidad</Link></li>
              <li><Link to="/cookies">Política de Cookies</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contacto</h3>
            <ul>
              <li>Email: info@hosting.com</li>
              <li>Teléfono: +1 234 567 890</li>
              <li>Dirección: Calle Principal 123</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Síguenos</h3>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="newsletter">
            <h3>Newsletter</h3>
            <form>
              <input type="email" placeholder="Tu email" />
              <button type="submit">Suscribirse</button>
            </form>
          </div>

          <div className="language-selector">
            <select>
              <option value="es">Español</option>
              <option value="en">English</option>
            </select>
          </div>

          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Hosting Company. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 