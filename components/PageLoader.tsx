import React, { useEffect } from 'react';
import './PageLoader.css';

const NUM_BG_STARS = 80;
const NUM_CENTER_STARS = 12;
const NUM_SHOOTING_STARS = 14;
const NUM_TWINKLES = 7;

// Generar posiciones y delays aleatorios para estrellas y meteoritos
const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;

// Estrellas de fondo (toda la pantalla)
const bgStars = Array.from({ length: NUM_BG_STARS }).map((_, i) => ({
  top: getRandom(0, 1),
  left: getRandom(0, 1),
  size: getRandom(0.7, 2.2),
  opacity: getRandom(0.18, 0.55),
  twinkle: getRandom(1.8, 3.5),
  delay: getRandom(0, 2),
  big: Math.random() < 0.13,
}));

// Estrellas solo en la franja central
const centerStars = Array.from({ length: NUM_CENTER_STARS }).map((_, i) => ({
  top: getRandom(0, 1),
  left: getRandom(0, 1),
  size: getRandom(1, 2.5),
  opacity: getRandom(0.25, 0.7),
  twinkle: getRandom(1.5, 2.8),
  delay: getRandom(0, 2),
  big: Math.random() < 0.25,
}));

// Meteoritos en la misma franja, mucho más finos y cortos
const shootingStars = Array.from({ length: NUM_SHOOTING_STARS }).map((_, i) => ({
  left: getRandom(0.13, 0.87),
  delay: getRandom(0, 2),
  duration: getRandom(1.5, 2.7),
  width: getRandom(0.5, 0.9), // muy finos
  opacity: getRandom(0.18, 0.38),
}));

const twinkles = Array.from({ length: NUM_TWINKLES }).map((_, i) => ({
  top: getRandom(0, 1),
  left: getRandom(0, 1),
  delay: getRandom(0, 2),
}));

const PageLoader: React.FC = () => {
  // Forzar duración de 6 segundos si se usa con estado en el padre
  useEffect(() => {
    const timer = setTimeout(() => {
      // Aquí normalmente se llamaría a un prop para ocultar el loader
      // Pero el control está en el padre
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

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
      <div className="page-loader-content bottom-align">
        <div className="loader-circle">
          <div className="circle-spinner">
            <span><span className="star-center"></span></span>
            <span><span className="star-center"></span></span>
            <span><span className="star-center"></span></span>
            <span><span className="star-center"></span></span>
          </div>
        </div>
        <div className="loader-brand">skyhostingcloud</div>
      </div>
    </div>
  );
};

export default PageLoader; 