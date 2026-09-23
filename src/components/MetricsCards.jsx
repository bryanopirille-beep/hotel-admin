import React from 'react';

export default function MetricsCards({ totalRevenue, totalReservations, averageNights }) {
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
      gap: '1.25rem',
      marginBottom: '2rem' 
    }}>
      <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
        <p style={{ margin: 0, color: '#475569', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase' }}>Ingresos Totales Estimados</p>
        <p style={{ margin: '0.5rem 0 0 0', fontSize: '2rem', fontWeight: '800', color: '#0f172a' }}>${totalRevenue}</p>
      </div>

      <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
        <p style={{ margin: 0, color: '#475569', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase' }}>Reservas Registradas</p>
        <p style={{ margin: '0.5rem 0 0 0', fontSize: '2rem', fontWeight: '800', color: '#0f172a' }}>{totalReservations}</p>
      </div>

      <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
        <p style={{ margin: 0, color: '#475569', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase' }}>Promedio de Estadías</p>
        <p style={{ margin: '0.5rem 0 0 0', fontSize: '2rem', fontWeight: '800', color: '#0f172a' }}>{averageNights} noches</p>
      </div>
    </div>
  );
}