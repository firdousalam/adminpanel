'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
export default function Home() {
  let router = useRouter();
  router.push('/login'); // redirect to protected route
  return (
    <></>
    
  );
}
