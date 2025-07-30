
import {Booking} from '@/types/Booking';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

export default function BookingTable(bookings: {
    [x: string]: any; bookings: Booking[] 
}) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow rounded border">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="p-2">Customer</th>
                        <th className="p-2">Consultation Mode</th>
                        <th className="p-2">Appointment Date</th>
                        <th className="p-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.bookings.map((b: Booking) => (
                        <tr key={b._id} className="border-t hover:bg-gray-50">
                            <td className="p-2">{b.patientId}</td>
                            <td className="p-2">{b.consultationMode}</td>
                            <td className="p-2">{new Date(b.appointmentDate).toLocaleDateString()}</td>
                            <td className="p-2">{b.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        );
    }