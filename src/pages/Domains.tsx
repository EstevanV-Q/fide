import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Domains.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Domains: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {

    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
      easing: 'ease-in-out'
    });

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
    <div className="domains">
      <canvas ref={canvasRef} className="particles-canvas" />
      
      <section className="hero" data-aos="fade-up">
        <div className="hero-content" data-aos="fade-up">
          <h1 className="hero-title" data-aos="fade-up">
            <span className="text-gradient">Dominios Premium</span>
          </h1>
          <p className="hero-subtitle">
            Encuentra el nombre perfecto para tu proyecto
          </p>
          <div className="domain-search glass-card">
            <input 
              type="text" 
              placeholder="Busca tu dominio ideal..." 
              className="domain-input"
            />
            <button className="btn btn-primary">Buscar</button>
          </div>
        </div>
      </section>

      <section className="features" data-aos="fade-right">
        <h2 className="section-title">Extensiones Disponibles</h2>
        <div className="features-grid">
          <div className="feature-card glass-card">
            <div className="feature-icon">🌐</div>
            <h3>.com</h3>
            <p>El dominio más popular y reconocido mundialmente.</p>
            <span className="price">$12.99/año</span>
          </div>
          <div className="feature-card glass-card">
            <div className="feature-icon">🌍</div>
            <h3>.net</h3>
            <p>Ideal para proyectos tecnológicos y redes.</p>
            <span className="price">$14.99/año</span>
          </div>
          <div className="feature-card glass-card">
            <div className="feature-icon">🏢</div>
            <h3>.org</h3>
            <p>Perfecto para organizaciones y proyectos sin fines de lucro.</p>
            <span className="price">$13.99/año</span>
          </div>
        </div>
      </section>

      <section className="benefits glass-card" data-aos="fade-left">
        <h2 className="section-title">Beneficios</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon-bg">
              <span className="feature-icon">🔒</span>
            </div>
            <h3>Privacidad Gratuita</h3>
            <p>Protección de datos personales incluida</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon-bg">
              <span className="feature-icon">📧</span>
            </div>
            <h3>Email Profesional</h3>
            <p>Cuentas de correo corporativas</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon-bg">
              <span className="feature-icon">🔄</span>
            </div>
            <h3>Renovación Automática</h3>
            <p>Nunca pierdas tu dominio</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Domains; 