"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => setOpen(!open);

  return (
    <>
      {/* Mobile Top Bar with Menu Icon */}
      <div className="bg-blue-700 text-white md:hidden flex justify-between items-center p-4">
        <h2 className="text-lg font-bold">My Dashboard</h2>
        <button onClick={toggleSidebar}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-blue-700 text-white p-4 w-64 space-y-4 md:static fixed top-0 left-0 h-full z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:min-h-screen`}
      >
        <h2 className="text-xl font-bold mb-6 hidden md:block">My Dashboard</h2>
        <nav className="flex flex-col gap-2">
          <Link href="/booking/dashboard" className="hover:bg-blue-600 p-2 rounded">
            Dashboard
          </Link>
          <Link href="/booking/physiotherapist" className="hover:bg-blue-600 p-2 rounded">
            Physiotherapist
          </Link>
          <Link href="/booking/user" className="hover:bg-blue-600 p-2 rounded">
            User
          </Link>
          <Link href="/booking/booking" className="hover:bg-blue-600 p-2 rounded">
            Booking
          </Link>
          <Link href="/booking/otherSpecialist" className="hover:bg-blue-600 p-2 rounded">
            Other Specialist
          </Link>
          <Link href="/booking/feature" className="hover:bg-blue-600 p-2 rounded">
            Feature
          </Link>
          <Link href="/booking/product" className="hover:bg-blue-600 p-2 rounded">
            Product
          </Link>
          <Link href="/booking/service" className="hover:bg-blue-600 p-2 rounded">
            Service
          </Link>
          <Link href="/booking/testimonial" className="hover:bg-blue-600 p-2 rounded">
            Testimonial
          </Link>
        </nav>
      </aside>
    </>
  );
}
