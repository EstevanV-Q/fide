import React, { useState } from 'react';
import './Plans.css';
import ParticlesEffect from '../components/ParticlesEffect';

type PlanCategory = 'shared' | 'vps' | 'wordpress' | 'dedicated' | 'gaming' | 'apps';

const Plans: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PlanCategory>('shared');

  const categories = [
    { id: 'shared', name: 'Hosting Compartido' },
    { id: 'vps', name: 'VPS' },
    { id: 'wordpress', name: 'Hosting WordPress' },
    { id: 'dedicated', name: 'Servidores Dedicados' },
    { id: 'gaming', name: 'Hosting para Juegos' },
    { id: 'apps', name: 'Hosting para Aplicaciones' }
  ];

  const plans = {
    shared: [
      {
        name: 'Plan Básico',
        price: 9.99,
        features: [
          '10GB SSD',
          '1 Dominio',
          '5 Bases de Datos',
          '10 Correos',
          'SSL Gratis',
          'Soporte 24/7'
        ]
      },
      {
        name: 'Plan Intermedio',
        price: 19.99,
        features: [
          '25GB SSD',
          '3 Dominios',
          '10 Bases de Datos',
          '25 Correos',
          'SSL Gratis',
          'Soporte 24/7',
          'Backup Diario'
        ]
      },
      {
        name: 'Plan Avanzado',
        price: 29.99,
        features: [
          '50GB SSD',
          '5 Dominios',
          '20 Bases de Datos',
          '50 Correos',
          'SSL Gratis',
          'Soporte 24/7',
          'Backup Diario',
          'IP Dedicada'
        ]
      }
    ],
    vps: [
      {
        name: 'VPS Básico',
        price: 29.99,
        features: [
          '2 vCPU',
          '2GB RAM',
          '30GB SSD',
          '1TB Ancho de Banda',
          '1 IP',
          'Panel de Control'
        ]
      },
      {
        name: 'VPS Profesional',
        price: 49.99,
        features: [
          '4 vCPU',
          '4GB RAM',
          '60GB SSD',
          '2TB Ancho de Banda',
          '2 IPs',
          'Panel de Control',
          'Backup Semanal'
        ]
      },
      {
        name: 'VPS Empresarial',
        price: 79.99,
        features: [
          '8 vCPU',
          '8GB RAM',
          '120GB SSD',
          '4TB Ancho de Banda',
          '4 IPs',
          'Panel de Control',
          'Backup Diario',
          'SLA 99.9%'
        ]
      }
    ],
    wordpress: [
      {
        name: 'WordPress Básico',
        price: 14.99,
        features: [
          '20GB SSD',
          '1 Dominio',
          'Instalación WordPress',
          'Temas Premium',
          'SSL Gratis',
          'Backup Diario'
        ]
      },
      {
        name: 'WordPress Pro',
        price: 29.99,
        features: [
          '50GB SSD',
          '3 Dominios',
          'Instalación WordPress',
          'Temas Premium',
          'Plugins Premium',
          'SSL Gratis',
          'Backup Diario',
          'CDN'
        ]
      },
      {
        name: 'WordPress Agencia',
        price: 49.99,
        features: [
          '100GB SSD',
          '5 Dominios',
          'Instalación WordPress',
          'Temas Premium',
          'Plugins Premium',
          'SSL Gratis',
          'Backup Diario',
          'CDN',
          'SLA 99.9%'
        ]
      }
    ],
    dedicated: [
      {
        name: 'Servidor Estándar',
        price: 99.99,
        features: [
          '4 vCPU',
          '8GB RAM',
          '250GB SSD',
          '5TB Ancho de Banda',
          '2 IPs',
          'Panel de Control',
          'Backup Semanal'
        ]
      },
      {
        name: 'Servidor Avanzado',
        price: 199.99,
        features: [
          '8 vCPU',
          '16GB RAM',
          '500GB SSD',
          '10TB Ancho de Banda',
          '4 IPs',
          'Panel de Control',
          'Backup Diario',
          'SLA 99.9%'
        ]
      },
      {
        name: 'Servidor Enterprise',
        price: 399.99,
        features: [
          '16 vCPU',
          '32GB RAM',
          '1TB SSD',
          '20TB Ancho de Banda',
          '8 IPs',
          'Panel de Control',
          'Backup Diario',
          'SLA 99.99%',
          'Soporte 24/7 Premium'
        ]
      }
    ],
    gaming: [
      {
        name: 'Gaming Básico',
        price: 19.99,
        features: [
          '2 vCPU',
          '4GB RAM',
          '50GB SSD',
          '1TB Ancho de Banda',
          '1 IP',
          'Panel de Control',
          'DDoS Protection'
        ]
      },
      {
        name: 'Gaming Pro',
        price: 39.99,
        features: [
          '4 vCPU',
          '8GB RAM',
          '100GB SSD',
          '2TB Ancho de Banda',
          '2 IPs',
          'Panel de Control',
          'DDoS Protection',
          'Backup Semanal'
        ]
      },
      {
        name: 'Gaming Ultimate',
        price: 79.99,
        features: [
          '8 vCPU',
          '16GB RAM',
          '200GB SSD',
          '4TB Ancho de Banda',
          '4 IPs',
          'Panel de Control',
          'DDoS Protection',
          'Backup Diario',
          'SLA 99.9%'
        ]
      }
    ],
    apps: [
      {
        name: 'Aplicaciones Básico',
        price: 24.99,
        features: [
          '2 vCPU',
          '4GB RAM',
          '50GB SSD',
          '1TB Ancho de Banda',
          '1 IP',
          'Panel de Control',
          'SSL Gratis'
        ]
      },
      {
        name: 'Aplicaciones Avanzado',
        price: 49.99,
        features: [
          '4 vCPU',
          '8GB RAM',
          '100GB SSD',
          '2TB Ancho de Banda',
          '2 IPs',
          'Panel de Control',
          'SSL Gratis',
          'Backup Semanal'
        ]
      },
      {
        name: 'Aplicaciones Enterprise',
        price: 99.99,
        features: [
          '8 vCPU',
          '16GB RAM',
          '200GB SSD',
          '4TB Ancho de Banda',
          '4 IPs',
          'Panel de Control',
          'SSL Gratis',
          'Backup Diario',
          'SLA 99.9%'
        ]
      }
    ]
  };

  return (
    <div className="plans-page">
      <ParticlesEffect />
      <div className="plans-header">
        <h1>Nuestros Planes de Hosting</h1>
        <p>Elige el plan perfecto para tu proyecto</p>
      </div>

      <div className="category-tabs">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id as PlanCategory)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="plans-grid">
        {plans[activeCategory].map((plan, index) => (
          <div key={index} className={`plan-card ${index === 1 ? 'featured' : ''}`}>
            <h3>{plan.name}</h3>
            <div className="price">
              ${plan.price}
              <span>/mes</span>
            </div>
            <ul>
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
            <button className="select-plan">Seleccionar Plan</button>
          </div>
        ))}
      </div>

      <div className="plans-faq">
        <h2>Preguntas Frecuentes sobre Planes</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>¿Puedo cambiar de plan en cualquier momento?</h3>
            <p>Sí, puedes actualizar o degradar tu plan en cualquier momento sin costos adicionales.</p>
          </div>
          <div className="faq-item">
            <h3>¿Ofrecen garantía de reembolso?</h3>
            <p>Sí, ofrecemos una garantía de reembolso de 30 días en todos nuestros planes.</p>
          </div>
          <div className="faq-item">
            <h3>¿Qué métodos de pago aceptan?</h3>
            <p>Aceptamos tarjetas de crédito, PayPal y transferencia bancaria.</p>
          </div>
          <div className="faq-item">
            <h3>¿Puedo migrar mi sitio web?</h3>
            <p>Sí, nuestro equipo puede ayudarte con la migración de forma gratuita.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;