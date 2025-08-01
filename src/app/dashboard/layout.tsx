import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-6 bg-gray-50 flex-1">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Booking Detail</h1>
              {children}
          </div>
                
        </main>
      </div>
    </div>
  );
}
