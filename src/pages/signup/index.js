import Link from 'next/link';
import React, { useState } from 'react';

const Signup = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "", name: "", geolocation: "" });

  const handleSubmit = (e) => {
    e.preventDefault(); // Fix typo
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-xl w-full max-w-lg px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14 rounded-lg">
        {/* Logo */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-zinc-700 mb-6 uppercase tracking-wider">
          Welcome Back
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-zinc-700 mb-2 font-bold tracking-wide">
              Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              onChange={handleChange}
              value={credentials.name}
              required
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-zinc-400 text-zinc-950 focus:outline-none focus:border-red-400 bg-transparent  "
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-zinc-700 mb-2 font-bold tracking-wide">
              Email address
            </label>
            <input
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
              value={credentials.email}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-zinc-400 text-zinc-950 focus:outline-none focus:border-red-400 bg-transparent  "
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-zinc-700 mb-2 font-bold tracking-wide">
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              onChange={handleChange}
              value={credentials.password}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-zinc-400 text-zinc-950 focus:outline-none focus:border-red-400 bg-transparent  "
            />
          </div>

          {/* Geolocation/Address Field */}
          <div className="mb-6">
            <label htmlFor="geolocation" className="block text-zinc-700 mb-2 font-bold tracking-wide">
              Address
            </label>
            <input
              name="geolocation"
              type="text"
              id="geolocation"
              onChange={handleChange}
              value={credentials.geolocation}
              required
              placeholder="Enter your address"
              className="w-full px-4 py-3 border border-zinc-400 text-zinc-950 focus:outline-none focus:border-red-400 bg-transparent  "
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-1/2 bg-slate-950 hover:bg-black text-white py-3 sm:py-4 uppercase text-md font-semibold tracking-wider transition duration-200  "
            >
              Signup
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
          Already have an account?{' '}
          <Link href="/login" className="text-blue-500 hover:underline cursor-pointer">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
