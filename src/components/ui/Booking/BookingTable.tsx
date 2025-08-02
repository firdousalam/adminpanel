
import { Booking } from '@/types/Booking';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

export default function BookingTable(bookings: {
    [x: string]: any; bookings: Booking[]
}) {
    const handleView = (id: string) => {
        console.log("View booking with ID:", id);
        // Implement view logic here
    };
    const handleEdit = (id: string) => {
        console.log("Edit booking with ID:", id);
        // Implement edit logic here
    };
    const handleDelete = (id: string) => {
        console.log("Delete booking with ID:", id);
        // Implement delete logic here
    };
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow rounded border">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="p-2">Customer</th>
                        <th className="p-2">Physiotherapist</th>
                        <th className="p-2">Consultation Mode</th>
                        <th className="p-2">Appointment Date</th>
                        <th className="p-2">Status</th>
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.bookings.map((booking: Booking) => {
                        return (
                            <tr key={booking._id} className="border-t hover:bg-gray-50">
                                <td className="p-2">{booking.patientId.name}</td>
                                <td className="p-2">{booking.therapistId.name}</td>
                                <td className="p-2">{booking.consultationMode}</td>
                                <td className="p-2">{new Date(booking.appointmentDate).toLocaleDateString()}</td>
                                <td className="p-2">{booking.status}</td>

                                <td className="p-3 border space-x-2">
                                    <button
                                        onClick={() => handleView(booking._id)}
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded shadow"
                                    >
                                        View
                                    </button>
                                    <button
                                        onClick={() => handleEdit(booking._id)}
                                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded shadow"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(booking._id)}
                                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded shadow"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}