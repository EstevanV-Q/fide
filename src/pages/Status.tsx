import React, { useState, useEffect } from 'react';
import './Status.css';

interface ServiceStatus {
  name: string;
  status: 'operational' | 'degraded' | 'outage';
  uptime: string;
  lastIncident: string | null;
}

const Status: React.FC = () => {
  const [services, setServices] = useState<ServiceStatus[]>([
    {
      name: 'Hosting Web',
      status: 'operational',
      uptime: '99.99%',
      lastIncident: null
    },
    {
      name: 'VPS',
      status: 'operational',
      uptime: '99.95%',
      lastIncident: null
    },
    {
      name: 'Servidores Dedicados',
      status: 'operational',
      uptime: '99.99%',
      lastIncident: null
    },
    {
      name: 'Panel de Control',
      status: 'operational',
      uptime: '99.98%',
      lastIncident: null
    },
    {
      name: 'API',
      status: 'operational',
      uptime: '99.97%',
      lastIncident: null
    },
    {
      name: 'DNS',
      status: 'operational',
      uptime: '100%',
      lastIncident: null
    }
  ]);

  const [systemMetrics, setSystemMetrics] = useState({
    totalServers: 1500,
    activeUsers: 25000,
    totalBandwidth: '1.2 PB',
    averageResponseTime: '45ms'
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return '#28a745';
      case 'degraded':
        return '#ffc107';
      case 'outage':
        return '#dc3545';
      default:
        return '#6c757d';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'operational':
        return 'Operativo';
      case 'degraded':
        return 'Degradado';
      case 'outage':
        return 'Fuera de Servicio';
      default:
        return 'Desconocido';
    }
  };

  return (
    <div className="status-page">
      {/* Hero Section */}
      <section className="status-hero">
        <div className="status-hero-content">
          <h1>Estado del Sistema</h1>
          <p>Monitoreo en tiempo real de todos nuestros servicios</p>
        </div>
      </section>

      {/* System Overview */}
      <section className="system-overview">
        <h2>Resumen del Sistema</h2>
        <div className="metrics-grid">
          <div className="metric-card">
            <h3>Servidores Totales</h3>
            <div className="metric-value">{systemMetrics.totalServers}</div>
          </div>
          <div className="metric-card">
            <h3>Usuarios Activos</h3>
            <div className="metric-value">{systemMetrics.activeUsers.toLocaleString()}</div>
          </div>
          <div className="metric-card">
            <h3>Ancho de Banda Total</h3>
            <div className="metric-value">{systemMetrics.totalBandwidth}</div>
          </div>
          <div className="metric-card">
            <h3>Tiempo de Respuesta Promedio</h3>
            <div className="metric-value">{systemMetrics.averageResponseTime}</div>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="services-status">
        <h2>Estado de los Servicios</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <h3>{service.name}</h3>
                <span 
                  className="status-indicator"
                  style={{ backgroundColor: getStatusColor(service.status) }}
                >
                  {getStatusText(service.status)}
                </span>
              </div>
              <div className="service-metrics">
                <div className="metric">
                  <span className="label">Uptime:</span>
                  <span className="value">{service.uptime}</span>
                </div>
                {service.lastIncident && (
                  <div className="metric">
                    <span className="label">Último Incidente:</span>
                    <span className="value">{service.lastIncident}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Incident History */}
      <section className="incident-history">
        <h2>Historial de Incidentes</h2>
        <div className="incident-timeline">
          <div className="incident-item">
            <div className="incident-date">15 Mar 2024</div>
            <div className="incident-content">
              <h3>Mantenimiento Programado</h3>
              <p>Actualización de infraestructura completada exitosamente.</p>
              <span className="incident-status resolved">Resuelto</span>
            </div>
          </div>
          <div className="incident-item">
            <div className="incident-date">10 Mar 2024</div>
            <div className="incident-content">
              <h3>Problemas de Latencia</h3>
              <p>Se detectó y resolvió un problema de latencia en la red.</p>
              <span className="incident-status resolved">Resuelto</span>
            </div>
          </div>
        </div>
      </section>

      {/* Status Legend */}
      <section className="status-legend">
        <h2>Leyenda de Estados</h2>
        <div className="legend-grid">
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#28a745' }}></span>
            <span className="legend-text">Operativo - Todos los sistemas funcionando normalmente</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#ffc107' }}></span>
            <span className="legend-text">Degradado - Rendimiento reducido o problemas parciales</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#dc3545' }}></span>
            <span className="legend-text">Fuera de Servicio - Servicio no disponible</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Status; 