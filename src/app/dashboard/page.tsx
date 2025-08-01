'use client';

import { useEffect, useState } from 'react';
import { Booking } from '@/types/Booking';
import BookingTable from '@/components/ui/Booking/BookingTable';
import Loading from '@/components/shared/Loading';
import NotFound from '@/components/shared/NotFound';
const BookingService = require('@/services/BookingService');


export default function BookingPage() {
    const [bookings, setBookings] = useState<Booking[]>([]);
    //it will come from redux store
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
                <Loading />
            ) : bookings.length === 0 ? (
                <NotFound text="No bookings found" />
            ) : (
                <BookingTable bookings={bookings} />
            )}
        </>

    );
}
