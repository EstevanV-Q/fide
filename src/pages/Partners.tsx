import React from 'react';
import './Partners.css';

const Partners: React.FC = () => {
  return (
    <div className="partners-page">
      {/* Hero Section */}
      <section className="partners-hero">
        <div className="partners-hero-content">
          <h1>Programa de Partners</h1>
          <p>Únete a nuestra red de partners y gana comisiones por cada cliente que refieras</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <h2>Beneficios del Programa</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <i className="fas fa-percentage"></i>
            <h3>Comisiones Atractivas</h3>
            <p>Gana hasta un 30% de comisión por cada venta que generes</p>
          </div>
          <div className="benefit-card">
            <i className="fas fa-chart-line"></i>
            <h3>Ingresos Recurrentes</h3>
            <p>Recibe comisiones mensuales por la renovación de tus clientes</p>
          </div>
          <div className="benefit-card">
            <i className="fas fa-tools"></i>
            <h3>Herramientas de Marketing</h3>
            <p>Accede a banners, enlaces de seguimiento y materiales promocionales</p>
          </div>
          <div className="benefit-card">
            <i className="fas fa-chart-bar"></i>
            <h3>Panel de Control</h3>
            <p>Monitorea tus ventas y comisiones en tiempo real</p>
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="commission-structure">
        <h2>Estructura de Comisiones</h2>
        <div className="commission-grid">
          <div className="commission-card">
            <h3>Hosting Compartido</h3>
            <div className="commission-rate">30%</div>
            <p>Comisión mensual por cada cliente</p>
          </div>
          <div className="commission-card">
            <h3>VPS</h3>
            <div className="commission-rate">25%</div>
            <p>Comisión mensual por cada cliente</p>
          </div>
          <div className="commission-card">
            <h3>Servidores Dedicados</h3>
            <div className="commission-rate">20%</div>
            <p>Comisión mensual por cada cliente</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>Cómo Funciona</h2>
        <div className="steps-grid">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Regístrate</h3>
            <p>Completa el formulario de registro como partner</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Promociona</h3>
            <p>Utiliza tus enlaces únicos para promocionar nuestros servicios</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Gana</h3>
            <p>Recibe comisiones por cada cliente que se registre a través de tus enlaces</p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="registration">
        <h2>Regístrate como Partner</h2>
        <form className="registration-form">
          <div className="form-group">
            <label htmlFor="name">Nombre Completo</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="website">Sitio Web</label>
            <input type="url" id="website" required />
          </div>
          <div className="form-group">
            <label htmlFor="company">Empresa</label>
            <input type="text" id="company" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" rows={4}></textarea>
          </div>
          <button type="submit" className="submit-button">Enviar Solicitud</button>
        </form>
      </section>

      {/* FAQ Section */}
      <section className="partners-faq">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>¿Cuánto tiempo tarda la aprobación?</h3>
            <p>Las solicitudes son revisadas en un plazo de 24-48 horas hábiles.</p>
          </div>
          <div className="faq-item">
            <h3>¿Cuándo recibo mis comisiones?</h3>
            <p>Las comisiones se pagan mensualmente, siempre que alcances el mínimo de $50.</p>
          </div>
          <div className="faq-item">
            <h3>¿Qué métodos de pago ofrecen?</h3>
            <p>Aceptamos PayPal, transferencia bancaria y otros métodos según tu ubicación.</p>
          </div>
          <div className="faq-item">
            <h3>¿Hay algún requisito mínimo?</h3>
            <p>No hay requisitos mínimos, pero recomendamos tener un sitio web activo.</p>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="current-partners">
        <h2>Nuestros Partners</h2>
        <div className="partners-grid">
          <div className="partner-logo">
            <img src="/partners/partner1.png" alt="Partner 1" />
          </div>
          <div className="partner-logo">
            <img src="/partners/partner2.png" alt="Partner 2" />
          </div>
          <div className="partner-logo">
            <img src="/partners/partner3.png" alt="Partner 3" />
          </div>
          <div className="partner-logo">
            <img src="/partners/partner4.png" alt="Partner 4" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners; 