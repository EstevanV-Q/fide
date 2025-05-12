import React from 'react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Sobre Nosotros</h1>
          <p>Tu socio de confianza en hosting desde 2010</p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="mission">
          <h2>Nuestra Misión</h2>
          <p>Proporcionar soluciones de hosting innovadoras y confiables que empoderen a nuestros clientes para alcanzar su máximo potencial digital.</p>
        </div>
        <div className="vision">
          <h2>Nuestra Visión</h2>
          <p>Ser el proveedor líder de servicios de hosting, reconocido por nuestra excelencia técnica, innovación constante y compromiso con el éxito de nuestros clientes.</p>
        </div>
      </section>

      {/* History Section */}
      <section className="history">
        <h2>Nuestra Historia</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="year">2010</div>
            <div className="content">
              <h3>Nacimiento de la Empresa</h3>
              <p>Fundamos la empresa con la visión de revolucionar el mercado del hosting.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="year">2015</div>
            <div className="content">
              <h3>Expansión Internacional</h3>
              <p>Ampliamos nuestras operaciones a nivel global con nuevos centros de datos.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="year">2018</div>
            <div className="content">
              <h3>Innovación Tecnológica</h3>
              <p>Implementamos infraestructura de última generación y servicios cloud.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="year">2023</div>
            <div className="content">
              <h3>Liderazgo en el Mercado</h3>
              <p>Nos consolidamos como uno de los principales proveedores de hosting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Nuestro Equipo Directivo</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/team/ceo.jpg" alt="CEO" />
            <h3>Juan Pérez</h3>
            <p>CEO & Fundador</p>
            <p className="bio">Más de 15 años de experiencia en la industria tecnológica.</p>
          </div>
          <div className="team-member">
            <img src="/team/cto.jpg" alt="CTO" />
            <h3>María García</h3>
            <p>CTO</p>
            <p className="bio">Experta en infraestructura cloud y seguridad.</p>
          </div>
          <div className="team-member">
            <img src="/team/coo.jpg" alt="COO" />
            <h3>Carlos Rodríguez</h3>
            <p>COO</p>
            <p className="bio">Especialista en operaciones y optimización de procesos.</p>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="infrastructure">
        <h2>Nuestra Infraestructura</h2>
        <div className="infrastructure-grid">
          <div className="infrastructure-item">
            <i className="fas fa-server"></i>
            <h3 className="tit2">Centros de Datos</h3>
            <p>Ubicaciones estratégicas en Norteamérica, Europa y Asia.</p>
          </div>
          <div className="infrastructure-item">
            <i className="fas fa-shield-alt"></i>
            <h3 className="tit2">Seguridad</h3>
            <p>Protección DDoS, firewall de última generación y monitoreo 24/7.</p>
          </div>
          <div className="infrastructure-item">
            <i className="fas fa-network-wired"></i>
            <h3 className="tit2">Red</h3>
            <p>Conectividad redundante con múltiples proveedores de internet.</p>
          </div>
          <div className="infrastructure-item">
            <i className="fas fa-bolt"></i>
            <h3 className="tit2">Energía</h3>
            <p>Sistemas UPS y generadores de respaldo para máxima disponibilidad.</p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications">
        <h2>Certificaciones y Reconocimientos</h2>
        <div className="certifications-grid">
          <div className="certification">
            <img src="/certifications/iso27001.png" alt="ISO 27001" />
            <h3 className="tit3">ISO 27001</h3>
            <p className='p1'>Certificación en Seguridad de la Información</p>
          </div>
          <div className="certification">
            <img src="/certifications/iso9001.png" alt="ISO 9001" />
            <h3 className='tit3'>ISO 9001</h3>
            <p className='p1'>Certificación en Gestión de Calidad</p>
          </div>
          <div className="certification">
            <img src="/certifications/pci-dss.png" alt="PCI DSS" />
            <h3 className='tit3'>PCI DSS</h3>
            <p className='p1'>Estándar de Seguridad de Datos para la Industria de Tarjetas de Pago</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">99.9%</div>
            <div className="stat-label">Uptime Garantizado</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50,000+</div>
            <div className="stat-label">Clientes Activos</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Soporte Técnico</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">13</div>
            <div className="stat-label">Años de Experiencia</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;