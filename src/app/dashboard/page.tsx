'use client';

import { useEffect, useState } from 'react';
import {Booking} from '@/types/Booking';
import BookingTable from '@/components/layout/BookingTable';
const BookingService = require('@/services/BookingService');
export default function BookingPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      const data = await BookingService.fetchBookings();
      setBookings(data.data);
      setLoading(false);
    };
    fetchBookings();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Booking Detail</h1>

      {loading ? (
        <p>Loading...</p>
      ) : bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
            <BookingTable bookings={bookings} />
      )}
    </div>
  );
}
