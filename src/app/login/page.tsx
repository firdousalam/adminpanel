'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext } from "@/context/AppContext";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import Loading from '@/components/shared/Loading'; // Ensure you have a Loading component 
import { setUser } from '@/store/userSlice'; // Ensure this is the action creator, not the reducer
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function LoginPage() {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { userByContext, setUserByContext } = useAppContext();  
  const dispatch = useDispatch();
  const router = useRouter();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Must be at least 6 characters").required("Required"),
  });

  // Handle form submission for Formik
 const handleSubmit = async (values: typeof initialValues) => {
   setIsLoading(true);
    const res = await fetch('/api/auth', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    if (!res.ok) {
      setError(data.message);
    } else {
      router.push('booking/dashboard'); // redirect to protected route
      handleLogin(data.user); // Set user in context
    }
    setUserByContext(data.user); // Set user in context
    dispatch(setUser(data.user)); // Dispatch user to Redux store
    setIsLoading(false);
  };
  const name = useSelector((state: RootState) => state.user.name);
  // create function to handle login
  // This function will be called when the user submits the login form
  // You can use the userByContext to set the user in the context

  // and also dispatch the user to the Redux store

 const handleLogin = (user: string) => {
    setUserByContext(user); // Set user in context
    dispatch(setUser(user)); // Dispatch user to Redux store
 }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form className="space-y-4">
            {isLoading ? <Loading /> : null}
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <Field
                name="email"
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="email" component="div" className="text-sm text-red-500 mt-1" />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Field
                name="password"
                type="password"
                placeholder="••••••••"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="password" component="div" className="text-sm text-red-500 mt-1" />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Login
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
