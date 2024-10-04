import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

const Signup = () => {
  const [credentials, setCredentials] = useState({email: "", password: "", name:"", geolocation:""})
  const handleSubmit = (e)=>{
    e.preventDefualt();
  }
  const handleChange = ()=>{
    setCredentials({...credentials, [e.target.name]:e.target.value})
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white shadow-slate-500 w-full max-w-xl px-20 py-14 sm:px-4 sm:py-4 m-4 shadow-xl">
        {/* Logo */}
        <h2 className="text-3xl font-bold text-center text-zinc-700 mb-6 uppercase tracking-wider">
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
              OnChange={handleChange}
              value={credentials.name}
              required
              placeholder="Enter your name"
              className="w-full px-6 py-4 border border-zinc-400 text-zinc-950 focus:outline-none focus:border-red-400 bg-transparent"
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
              OnChange={handleChange}
              value={credentials.email}
              required
              placeholder="Enter your email"
              className="w-full px-6 py-4 border border-zinc-400 text-zinc-950 focus:outline-none focus:border-red-400 bg-transparent"
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
              OnChange={handleChange}
              value={credentials.password}
              required
              placeholder="Enter your password"
              className="w-full px-6 py-4 border border-zinc-400 text-zinc-950 focus:outline-none focus:border-red-400 bg-transparent"
            />
          </div>
          {/* geolocation */}
          <div className="mb-6">
            <label htmlFor="geolocation" className="block text-zinc-700 mb-2 font-bold tracking-wide">
              Address
            </label>
            <input
              name="geolocation"
              type="text"
              id="password"
              OnChange={handleChange}
              value={credentials.geolocation}
              required
              placeholder="Enter your address"
              className="w-full px-6 py-4 border border-zinc-400 text-zinc-950 focus:outline-none focus:border-red-400 bg-transparent"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center ">
            <button
              type="submit"
              className="w-1/3 bg-slate-950 hover:bg-black text-white py-5 uppercase text-md font-semibold tracking-wider transition duration-200"
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
          already have an account?{' '}
          <Link href={"/login"} className="text-blue-500 hover:underline cursor-pointer">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup