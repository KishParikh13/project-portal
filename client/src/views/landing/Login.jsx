/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { LockClosedIcon } from '@heroicons/react/solid'
import React from 'react';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer'
import LoginForm from './shared/LoginForm';

export default function Login() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

    return (
      <>
        <Navbar />
        <div className="bg-gray-800 min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="text-center text-3xl font-extrabold text-white">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-300">
              Or{' '}
              <a href="#" className="font-medium text-indigo-300 hover:text-indigo-400">
                start your 14-day free trial
              </a>
            </p>
          </div>
  
          <LoginForm />
        </div>
      </>
    )
  }