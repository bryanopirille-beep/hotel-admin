import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MetricsCards from './components/MetricsCards';
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';

const initialBookings = [
  { id: 1, guestName: 'Carlos Benítez', roomName: 'Bungalow Deluxe 01', nights: 3, total: 450, status: 'Activa' },
  { id: 2, guestName: 'María Gómez', roomName: 'Suite Presidencial 05', nights: 2, total: 600, status: 'Activa' },
  { id: 3, guestName: 'Jorge Martínez', roomName: 'Habitación Doble 12', nights: 4, total: 400, status: 'Pendiente' }
];

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('Todas');

  const [currentBookings, setCurrentBookings] = useState(() => {
    const savedBookings = localStorage.getItem('thunder_bookings');
    return savedBookings ? JSON.parse(savedBookings) : initialBookings;
  });

  useEffect(() => {
    localStorage.setItem('thunder_bookings', JSON.stringify(currentBookings));
  }, [currentBookings]);

  const handleAddBooking = (newBooking) => {
    setCurrentBookings([newBooking, ...currentBookings]);
  };

  const handleDeleteBooking = (id) => {
    setCurrentBookings(currentBookings.filter(b => b.id !== id));
  };

  const totalRevenue = currentBookings.reduce((acc, curr) => acc + curr.total, 0);
  const totalReservations = currentBookings.length;
  const averageNights = totalReservations > 0 
    ? (currentBookings.reduce((acc, curr) => acc + curr.nights, 0) / totalReservations).toFixed(1) 
    : 0;

  return (
    <div style={{ padding: '2rem 1rem', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Header />
      <MetricsCards 
        totalRevenue={totalRevenue} 
        totalReservations={totalReservations} 
        averageNights={averageNights} 
      />
      <BookingForm onAddBooking={handleAddBooking} />
      <BookingList 
        bookings={currentBookings}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        onDeleteBooking={handleDeleteBooking}
      />
    </div>
  );
}