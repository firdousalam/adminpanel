import { ReadableStreamDefaultController } from "stream/web";

 export const fetchBookings = async () => {
    
      const res = await fetch('https://getphysio.in/api/appointments/getAll');
      return await res.json();
    
};