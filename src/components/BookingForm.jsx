import React, { useState } from 'react';

export default function BookingForm({ onAddBooking }) {
  const [guestName, setGuestName] = useState('');
  const [roomName, setRoomName] = useState('');
  const [nights, setNights] = useState('');
  const [total, setTotal] = useState('');
  const [status, setStatus] = useState('Activa');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!guestName || !roomName || !nights || !total) return;

    onAddBooking({
      id: Date.now(),
      guestName,
      roomName,
      nights: Number(nights),
      total: Number(total),
      status
    });

    setGuestName('');
    setRoomName('');
    setNights('');
    setTotal('');
    setStatus('Activa');
  };

  return (
    <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
      <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.2rem', color: '#0f172a' }}>Registrar Nueva Reserva</h3>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', alignItems: 'end' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#334155', marginBottom: '0.3rem', fontWeight: '700' }}>Huésped</label>
          <input 
            type="text" 
            placeholder="Nombre y apellido" 
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            style={{ width: '100%', padding: '0.55rem', borderRadius: '8px', border: '1px solid #94a3b8', background: '#f8fafc', color: '#0f172a', outline: 'none' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#334155', marginBottom: '0.3rem', fontWeight: '700' }}>Habitación</label>
          <input 
            type="text" 
            placeholder="Ej: Suite 04" 
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            style={{ width: '100%', padding: '0.55rem', borderRadius: '8px', border: '1px solid #94a3b8', background: '#f8fafc', color: '#0f172a', outline: 'none' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#334155', marginBottom: '0.3rem', fontWeight: '700' }}>Noches</label>
          <input 
            type="number" 
            placeholder="Ej: 3" 
            value={nights}
            onChange={(e) => setNights(e.target.value)}
            style={{ width: '100%', padding: '0.55rem', borderRadius: '8px', border: '1px solid #94a3b8', background: '#f8fafc', color: '#0f172a', outline: 'none' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#334155', marginBottom: '0.3rem', fontWeight: '700' }}>Total ($)</label>
          <input 
            type="number" 
            placeholder="Ej: 450" 
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            style={{ width: '100%', padding: '0.55rem', borderRadius: '8px', border: '1px solid #94a3b8', background: '#f8fafc', color: '#0f172a', outline: 'none' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#334155', marginBottom: '0.3rem', fontWeight: '700' }}>Estado</label>
          <select 
            value={status} 
            onChange={(e) => setStatus(e.target.value)}
            style={{ width: '100%', padding: '0.55rem', borderRadius: '8px', border: '1px solid #94a3b8', background: '#f8fafc', color: '#0f172a', outline: 'none' }}
          >
            <option value="Activa">Activa</option>
            <option value="Pendiente">Pendiente</option>
          </select>
        </div>

        <div>
          <button 
            type="submit" 
            style={{ width: '100%', background: '#0284c7', color: '#fff', border: 'none', padding: '0.6rem', borderRadius: '8px', cursor: 'pointer', fontWeight: '700' }}
          >
            Agregar Reserva
          </button>
        </div>
      </form>
    </div>
  );
}