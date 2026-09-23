import React from 'react';

export default function BookingList({ 
  bookings, 
  searchTerm, 
  setSearchTerm, 
  statusFilter, 
  setStatusFilter, 
  onDeleteBooking 
}) {
  
  const filteredBookings = bookings.filter(b => {
    const matchesSearch = b.guestName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          b.roomName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'Todas' || b.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#0f172a' }}>Listado de Reservas</h3>
          
          <div style={{ display: 'flex', gap: '0.5rem', background: '#e2e8f0', padding: '0.25rem', borderRadius: '8px' }}>
            {['Todas', 'Activa', 'Pendiente'].map((tab) => (
              <button
                key={tab}
                onClick={() => setStatusFilter(tab)}
                style={{
                  background: statusFilter === tab ? '#0284c7' : 'transparent',
                  color: statusFilter === tab ? '#ffffff' : '#334155',
                  border: 'none',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  boxShadow: statusFilter === tab ? '0 1px 3px rgba(0,0,0,0.2)' : 'none'
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <input 
          type="text" 
          placeholder="Buscar por huésped o habitación..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '0.55rem 1rem', borderRadius: '8px', border: '1px solid #94a3b8', background: '#f8fafc', color: '#0f172a', width: '260px', outline: 'none' }}
        />
      </div>

      {filteredBookings.length > 0 ? (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #cbd5e1', color: '#334155', fontSize: '0.85rem', fontWeight: '800' }}>
                <th style={{ padding: '0.75rem' }}>Huésped</th>
                <th style={{ padding: '0.75rem' }}>Habitación</th>
                <th style={{ padding: '0.75rem' }}>Noches</th>
                <th style={{ padding: '0.75rem' }}>Total</th>
                <th style={{ padding: '0.75rem' }}>Estado</th>
                <th style={{ padding: '0.75rem', textAlign: 'center' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((b) => (
                <tr key={b.id} style={{ borderBottom: '1px solid #f1f5f9', fontSize: '0.95rem', color: '#0f172a' }}>
                  <td style={{ padding: '0.75rem', fontWeight: '700' }}>{b.guestName}</td>
                  <td style={{ padding: '0.75rem' }}>{b.roomName}</td>
                  <td style={{ padding: '0.75rem' }}>{b.nights}</td>
                  <td style={{ padding: '0.75rem' }}>${b.total}</td>
                  <td style={{ padding: '0.75rem' }}>
                    <span style={{ 
                      padding: '0.25rem 0.6rem', 
                      borderRadius: '9999px', 
                      fontSize: '0.75rem', 
                      fontWeight: '700',
                      background: b.status === 'Activa' ? '#dcfce7' : '#fef9c3',
                      color: b.status === 'Activa' ? '#166534' : '#854d0e'
                    }}>
                      {b.status}
                    </span>
                  </td>
                  <td style={{ padding: '0.75rem', textAlign: 'center' }}>
                    <button 
                      onClick={() => onDeleteBooking(b.id)}
                      style={{ background: '#fee2e2', color: '#991b1b', border: 'none', padding: '0.35rem 0.75rem', borderRadius: '6px', cursor: 'pointer', fontWeight: '700' }}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p style={{ textAlign: 'center', color: '#64748b', padding: '2rem 0' }}>No se encontraron reservas con ese criterio.</p>
      )}
    </div>
  );
}