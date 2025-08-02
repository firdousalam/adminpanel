'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext } from "@/context/AppContext";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { setUser } from '@/store/userSlice'; // Ensure this is the action creator, not the reducer

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
    const { userByContext, setUserByContext } = useAppContext();
    
  const dispatch = useDispatch();

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/auth', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    if (!res.ok) {
      setError(data.message);
    } else {
      router.push('/dashboard'); // redirect to protected route
      setUserByContext("Firdous"); // Set user context
      dispatch(setUser('Technophile Firdous'));

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-xl font-bold mb-4">Login</h1>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
