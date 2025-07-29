import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-700 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">My Dashboard</h2>
      <nav className="flex flex-col gap-2">
        <Link href="/dashboard" className="hover:bg-blue-600 p-2 rounded">Dashboard</Link>
        <Link href="/dashboard/profile" className="hover:bg-blue-600 p-2 rounded">Profile</Link>
        <Link href="/dashboard/settings" className="hover:bg-blue-600 p-2 rounded">Settings</Link>
      </nav>
    </aside>
  );
}
