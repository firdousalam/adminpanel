'use client';

import { useEffect, useState } from 'react';
import {Booking} from '@/types/Booking';
import BookingTable from '@/components/ui/Booking/BookingTable';
const BookingService = require('@/services/BookingService');
export default function BookingPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
      setLoading(true);
      const data = await BookingService.fetchBookings();
      setBookings(data.data);
      setLoading(false);
    };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
   
    <>
      {loading ? (
        <p>Loading...</p>
      ) : bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
            <BookingTable bookings={bookings} />
      )}
      </>
   
  );
}
