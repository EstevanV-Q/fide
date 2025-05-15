import React, { useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  type?: 'reveal' | 'glitch' | 'neon' | 'wave';
  className?: string;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  type = 'reveal',
  className = '',
  delay = 0
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add('active');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [delay]);

  const getAnimationClass = () => {
    switch (type) {
      case 'reveal':
        return 'text-reveal';
      case 'glitch':
        return 'glitch';
      case 'neon':
        return 'neon-text';
      case 'wave':
        return 'wave';
      default:
        return 'text-reveal';
    }
  };

  return (
    <div
      ref={textRef}
      className={`animated-text ${getAnimationClass()} ${className}`}
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        transition: `opacity 0.8s var(--ease-out-expo), transform 0.8s var(--ease-out-expo)`,
      }}
    >
      {text}
    </div>
  );
};

export default AnimatedText; 