import Link from 'next/link';
import React, { useState } from 'react';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault(); // Fix typo: use preventDefault
    // Handle login logic here
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white shadow-xl w-full max-w-lg px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14 rounded-lg">
        {/* Logo */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-zinc-700 mb-6 uppercase tracking-wider">
          Welcome Back
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-zinc-700 mb-2 font-bold tracking-wide">
              Email address / Username
            </label>
            <input
              name="email"
              type="text"
              id="email"
              onChange={handleChange} // Fix typo: use onChange instead of OnChange
              value={credentials.email}
              required
              placeholder="Enter your email/username"
              className="w-full px-4 py-3 border border-zinc-400 text-zinc-950 focus:outline-none focus:border-red-400 bg-transparent  "
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-zinc-700 mb-2 font-bold tracking-wide">
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              onChange={handleChange} // Fix typo: use onChange instead of OnChange
              value={credentials.password}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-zinc-400 text-zinc-950 focus:outline-none focus:border-red-400 bg-transparent  "
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-1/2 bg-slate-950 hover:bg-black text-white py-3 sm:py-4 uppercase text-md font-semibold tracking-wider transition duration-200  "
            >
              Login
            </button>
          </div>
        </form>

        {/* Separator */}
        <div className="flex items-center justify-center my-4">
          <div className="border-t border-gray-300 w-full"></div>
          <span className="text-gray-500 mx-2 font-medium">OR</span>
          <div className="border-t border-gray-300 w-full"></div>
        </div>

        {/* Sign up Link */}
        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{' '}
          <Link href="/signup" className="text-blue-500 hover:underline cursor-pointer">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
