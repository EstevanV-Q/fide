import React, { useEffect, useState } from 'react';
import './PageLoader.css';

const NUM_BG_STARS = 25;
const NUM_CENTER_STARS = 6;
const NUM_SHOOTING_STARS = 4;
const NUM_TWINKLES = 3;

// Generar posiciones y delays aleatorios para estrellas y meteoritos
const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;

// Estrellas de fondo (toda la pantalla)
const bgStars = Array.from({ length: NUM_BG_STARS }).map((_, i) => ({
  top: getRandom(0, 1),
  left: getRandom(0, 1),
  size: getRandom(0.3, 0.6),
  opacity: getRandom(0.1, 0.25),
  twinkle: getRandom(2.5, 4),
  delay: getRandom(0, 3),
  big: Math.random() < 0.1,
}));

// Estrellas solo en la franja central
const centerStars = Array.from({ length: NUM_CENTER_STARS }).map((_, i) => ({
  top: getRandom(0, 1),
  left: getRandom(0, 1),
  size: getRandom(0.4, 0.8),
  opacity: getRandom(0.15, 0.3),
  twinkle: getRandom(2, 3.5),
  delay: getRandom(0, 3),
  big: Math.random() < 0.15,
}));

// Meteoritos en la misma franja, mucho más finos y cortos
const shootingStars = Array.from({ length: NUM_SHOOTING_STARS }).map((_, i) => ({
  left: getRandom(0.13, 0.87),
  delay: getRandom(0, 3),
  duration: getRandom(2, 3.5),
  width: getRandom(0.2, 0.4),
  opacity: getRandom(0.1, 0.25),
}));

const twinkles = Array.from({ length: NUM_TWINKLES }).map((_, i) => ({
  top: getRandom(0, 1),
  left: getRandom(0, 1),
  delay: getRandom(0, 3),
}));

const PageLoader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Ocultar el scroll del body y el navbar cuando el loader está activo
    document.body.style.overflow = 'hidden';
    const navbar = document.querySelector('.navbar') as HTMLElement;
    if (navbar) {
      navbar.style.visibility = 'hidden';
    }
    
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = 'auto';
      if (navbar) {
        navbar.style.visibility = 'visible';
      }
    }, 6000);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
      if (navbar) {
        navbar.style.visibility = 'visible';
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="page-loader">
      {/* Fondo de estrellas en toda la pantalla */}
      <div className="night">
        {bgStars.map((s, i) => (
          <div
            key={i}
            className={`star${s.big ? ' big' : ''}`}
            style={{
              top: `${s.top * 100}%`,
              left: `${s.left * 100}%`,
              '--star-size': `${s.size}px`,
              '--star-opacity': s.opacity,
              '--star-twinkle': `${s.twinkle}s`,
              '--star-delay': `${-s.delay}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>
      {/* Franja central con meteoritos, destellos y algunas estrellas grandes */}
      <div className="minimal-night refined-night">
        {centerStars.map((s, i) => (
          <div
            key={i}
            className={`star${s.big ? ' big' : ''}`}
            style={{
              top: `${s.top * 100}%`,
              left: `${s.left * 100}%`,
              '--star-size': `${s.size}px`,
              '--star-opacity': s.opacity,
              '--star-twinkle': `${s.twinkle}s`,
              '--star-delay': `${-s.delay}s`,
            } as React.CSSProperties}
          />
        ))}
        {shootingStars.map((s, i) => (
          <div
            key={i}
            className="shooting_star"
            style={{
              left: `${s.left * 100}%`,
              animationDelay: `${-s.delay}s`,
              animationDuration: `${s.duration}s`,
              width: `${s.width}px`,
              opacity: s.opacity,
            }}
          />
        ))}
        {twinkles.map((t, i) => (
          <div
            key={i}
            className="galaxy-twinkle"
            style={{
              top: `${t.top * 100}%`,
              left: `${t.left * 100}%`,
              animationDelay: `${-t.delay}s`,
            }}
          />
        ))}
      </div>
      <div className="page-loader-content">
        <div className="loader-circle">
          <div className="circle-spinner">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="loader-brand">skyhostingcloud</div>
      </div>
    </div>
  );
};

export default PageLoader; 