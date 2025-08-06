import { notFound } from "next/navigation";


// ✅ ASYNC FUNCTION HERE
export default async function BookingViewPage({
  params,
}: {
  params: { bookingId: string };
}) {

    console.log("Booking ID:", params.bookingId);
//   // ✅ params.id is safe to use now get booking details from api
const booking = { id: "1", customer: "Alice", date: "2025-08-06", service: "Haircut", price: "₹800", status: "Confirmed" };

  return (
     <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
          Booking Details
        </h1>

        <div className="space-y-4 text-gray-700 text-sm md:text-base">
          <div className="grid grid-cols-2">
            <span className="font-semibold">Customer Name:</span>
            <span>{booking.customer}</span>
          </div>
          <div className="grid grid-cols-2">
            <span className="font-semibold">Booking Date:</span>
            <span>{booking.date}</span>
          </div>
          <div className="grid grid-cols-2">
            <span className="font-semibold">Service:</span>
            <span>{booking.service}</span>
          </div>
          <div className="grid grid-cols-2">
            <span className="font-semibold">Price:</span>
            <span>{booking.price}</span>
          </div>
          <div className="grid grid-cols-2">
            <span className="font-semibold">Booking Date:</span>
            <span>{booking.date}</span>
          </div>
          <div className="grid grid-cols-2">
            <span className="font-semibold">Service:</span>
            <span>{booking.service}</span>
          </div>
          <div className="grid grid-cols-2">
            <span className="font-semibold">Price:</span>
            <span>{booking.price}</span>
          </div>
          <div className="grid grid-cols-2">
            <span className="font-semibold">Status:</span>
            <span
              className={`inline-block px-2 py-1 text-xs rounded-full ${
                booking.status === "Confirmed"
                  ? "bg-green-100 text-green-700"
                  : booking.status === "Pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {booking.status}
            </span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/booking/dashboard"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            ← Back to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}
