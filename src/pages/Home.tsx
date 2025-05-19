import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PageLoader from '../components/PageLoader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

const Home: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedRegion, setSelectedRegion] = useState('usa');
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    AOS.init({
  duration: 1000,
  once: false,
  mirror: true,
  offset: 120,
  easing: 'ease-in-out',
});

    const handleScroll = () => {
      AOS.refreshHard(); // 🔁 Se reinician las animaciones AOS al hacer scroll
    };

    window.addEventListener('scroll', handleScroll);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speedX: number = 0;
      speedY: number = 0;
      color: string = '';

      constructor() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.5})`;

      }

      update() {
        if (!canvas) return;
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };

    animate();

    setTimeout(() => {
      setIsPageLoading(false);
    }, 2500);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // (El resto del componente permanece igual)


  const usaPlans = [
    {
      name: 'Básico',
      price: '$29.99',
      features: ['4 vCPUs', '8GB RAM', '100GB SSD', '5 Gbps Conexión', 'Ryzen 7 5800X']
    },
    {
      name: 'Pro',
      price: '$49.99',
      features: ['8 vCPUs', '16GB RAM', '200GB SSD', '10 Gbps Conexión', 'Ryzen 7 5800X'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$79.99',
      features: ['12 vCPUs', '32GB RAM', '500GB SSD', '10 Gbps Conexión', 'Ryzen 7 5800X']
    }
  ];

  const madridPlans = [
    {
      name: 'Básico',
      price: '€34.99',
      features: ['4 vCPUs', '8GB RAM', '100GB SSD', '5 Gbps Conexión', 'Ryzen 9 5900X']
    },
    {
      name: 'Pro',
      price: '€54.99',
      features: ['8 vCPUs', '16GB RAM', '200GB SSD', '10 Gbps Conexión', 'Ryzen 9 5900X'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '€84.99',
      features: ['12 vCPUs', '32GB RAM', '500GB SSD', '10 Gbps Conexión', 'Ryzen 9 5900X']
    }
  ];

  const plans = selectedRegion === 'usa' ? usaPlans : madridPlans;

  return (
    <div className="home">
      <canvas ref={canvasRef} className="particles-canvas" />
      {isPageLoading && <PageLoader />}

      <section className="hero">
        <div className="hero-content" data-aos="fade-up">
          <h1 className="hero-title">
            <span className="text-gradienet">Hosting de Alto Rendimiento</span>
          </h1>
          <p className="hero-subtitle">
            Soluciones de hosting optimizadas para tu negocio
          </p>
          <div className="hero-cta">
            <Link to="/planes" className="btn btn-primary">
              Ver Planes
            </Link>
            <Link to="/sobre-nosotros" className="btn btn-secondary">
              Conoce Más
            </Link>
          </div>
        </div>
        <div className="hero-image" data-aos="fade-left" data-aos-delay="300">
          <div className="server-illustration">
            {/* Agrega tu ilustración de servidor aquí */}
          </div>
        </div>
      </section>

      <section className="featuresbg">
        <h2 className="section-title" data-aos="fade-up">Características Destacadas</h2>
        
        <div className="features-grid">
          <div className="feature-card glass-card" data-aos="zoom-in" data-aos-delay="100">
            <div className="feature-icon">🚀</div>
            <h3>Alto Rendimiento</h3>
            <p>Servidores optimizados para máxima velocidad y eficiencia.</p>
          </div>
          <div className="feature-card glass-card" data-aos="zoom-in" data-aos-delay="200">
            <div className="feature-icon">🛡️</div>
            <h3>Seguridad Avanzada</h3>
            <p>Protección DDoS y firewall de última generación.</p>
          </div>
          <div className="feature-card glass-card" data-aos="zoom-in" data-aos-delay="300">
            <div className="feature-icon">⚡</div>
            <h3>99.9% Uptime</h3>
            <p>Garantía de disponibilidad con monitoreo 24/7.</p>
          </div>
        </div>
      </section>

      <section className="popular-plans">
        <h2 data-aos="fade-up">Planes más populares</h2>
        <div className="region-selector" data-aos="fade-up" data-aos-delay="100">
          <button 
            className={`region-btn ${selectedRegion === 'usa' ? 'active' : ''}`}
            onClick={() => setSelectedRegion('usa')}
          >
            USA
          </button>
          <button 
            className={`region-btn ${selectedRegion === 'madrid' ? 'active' : ''}`}
            onClick={() => setSelectedRegion('madrid')}
          >
            Madrid
          </button>
        </div>
        <p className="specs-info" data-aos="fade-up" data-aos-delay="200">
          {selectedRegion === 'usa' 
            ? 'Nuestras máquinas en USA cuentan con Ryzen 7 5800X y 5-10 Gbps de conexión'
            : 'Nuestras máquinas en Madrid cuentan con Ryzen 9 5900X y 5-10 Gbps de conexión'
          }
        </p>
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`plan-card ${plan.popular ? 'popular' : ''}`}
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
            >
              <h3>{plan.name}</h3>
              <div className="plan-price">{plan.price}/mes</div>
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="btn btn-Primary">Seleccionar Plan</button>
            </div>
          ))}
        </div>
      </section>

      <section className="stats">
        <div className="stats-container">
          <div className="stat-item" data-aos="flip-up" data-aos-delay="100">
            <span className="stat-number">99.9%</span>
            <span className="stat-label">Uptime</span>
          </div>
          <div className="stat-item" data-aos="flip-up" data-aos-delay="200">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Soporte</span>
          </div>
          <div className="stat-item" data-aos="flip-up" data-aos-delay="300">
            <span className="stat-number">10k+</span>
            <span className="stat-label">Clientes</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
