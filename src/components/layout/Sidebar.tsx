import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-700 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">My Dashboard</h2>
      <nav className="flex flex-col gap-2">
        <Link href="/dashboard" className="hover:bg-blue-600 p-2 rounded">Dashboard</Link>
        <Link href="/physiotherapist" className="hover:bg-blue-600 p-2 rounded">Physiotherapist</Link>
        <Link href="/user" className="hover:bg-blue-600 p-2 rounded">User</Link>
        <Link href="/booking" className="hover:bg-blue-600 p-2 rounded">Booking</Link>
        <Link href="/otherSpecialist" className="hover:bg-blue-600 p-2 rounded">Other Specialist</Link>
        <Link href="/feature" className="hover:bg-blue-600 p-2 rounded">Feature</Link>
        <Link href="/product" className="hover:bg-blue-600 p-2 rounded">Product</Link>
        <Link href="/service" className="hover:bg-blue-600 p-2 rounded">Service</Link>
        <Link href="/testimonial" className="hover:bg-blue-600 p-2 rounded">Testimonial</Link>
      </nav>
    </aside>
  );
}
