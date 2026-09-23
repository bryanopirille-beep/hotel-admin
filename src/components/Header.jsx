import React from 'react';

export default function Header() {
  return (
    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#38bdf8', margin: '0 0 0.5rem 0', textAlign: 'center' }}>
        Panel de Administración - Thunder Country Club
      </h2>
      <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.95rem', textAlign: 'center' }}>
        Control operativo, métricas de ocupación y gestión de reservas en tiempo real.
      </p>
    </div>
  );
}