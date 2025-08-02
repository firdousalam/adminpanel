'use client';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { useAppContext } from "@/context/AppContext";
export default function Header() {
   const { userByContext } = useAppContext();
    const name = useSelector((state: RootState) => state.user.name);

  return (
    <header className="bg-white border-b p-4 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-lg font-medium">Welcome Back 👋</h1>
        <div className="text-sm">{userByContext}
          {/* Display user name from context or Redux store */}
          {name ? `, ${name}` : ''}
        </div>
      </div>
    </header>
  );
}
