import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';

export default function Booking({ children }: { children: React.ReactNode }) {
  return (
  
      <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-6 bg-gray-50 flex-1">
          
            
              {children}
        
                
        </main>
      </div>
    </div>
  );
}
