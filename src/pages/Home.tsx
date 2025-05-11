import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
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

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="home">
      <canvas ref={canvasRef} className="particles-canvas" />
      
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="text-gradient">Hosting de Alto Rendimiento</span>
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
        <div className="hero-image">
          <div className="server-illustration">
            {/* Add your server illustration here */}
          </div>
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">Características Destacadas</h2>
        <div className="features-grid">
          <div className="feature-card glass-card">
            <div className="feature-icon">🚀</div>
            <h3>Alto Rendimiento</h3>
            <p>Servidores optimizados para máxima velocidad y eficiencia.</p>
          </div>
          <div className="feature-card glass-card">
            <div className="feature-icon">🛡️</div>
            <h3>Seguridad Avanzada</h3>
            <p>Protección DDoS y firewall de última generación.</p>
          </div>
          <div className="feature-card glass-card">
            <div className="feature-icon">⚡</div>
            <h3>99.9% Uptime</h3>
            <p>Garantía de disponibilidad con monitoreo 24/7.</p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">99.9%</span>
            <span className="stat-label">Uptime</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Soporte</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10k+</span>
            <span className="stat-label">Clientes</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 