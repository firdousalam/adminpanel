import { ReadableStreamDefaultController } from "stream/web";

 export const fetchBookings = async () => {
    
      const res = await fetch('https://getphysio.in/api/appointments/getAll');
      console.log("Response from BookingService:", res);
      return await res.json();
    
};