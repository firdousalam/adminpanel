'use client';

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Image from "next/image";
import { useRouter } from 'next/navigation';
export default function Home() {
  let router = useRouter();
  router.push('/login'); // redirect to protected route
  return (
    <> <div className="flex min-h-screen">
               <Sidebar />
                <div className="flex flex-col flex-1">
                <Header />
                
                </div>
        </div>
        </>
    
  );
}
