import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const Login = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false); // Loading state
  const [alert, setAlert] = useState({ type: '', message: '' }); // Alert state

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true);
    setAlert({ type: '', message: '' }); // Clear previous alert

    const response = await fetch("/api/userLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    setLoading(false);

    if (json.success) {
      setAlert({ type: 'success', message: 'You have successfully logged in!' }); // Set success message
      localStorage.setItem("token", json.authToken);
      localStorage.setItem("userEmail", credentials.email);
      setTimeout(() => {
        router.push('/'); // Redirect to home page after a delay
      }, 1000);
    } else {
      setAlert({ type: 'error', message: json.error || 'Login failed. Please try again.' }); // Set error message
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Automatically remove alert after 3 seconds
  useEffect(() => {
    if (alert.message) {
      const timer = setTimeout(() => {
        setAlert({ type: '', message: '' }); // Clear alert after 3 seconds
      }, 3000);
      return () => clearTimeout(timer); // Clean up timer on component unmount
    }
  }, [alert]);

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
              Email
            </label>
            <input
              name="email"
              type="text"
              id="email"
              onChange={handleChange}
              value={credentials.email}
              required
              placeholder="Enter your email/username"
              className="w-full px-4 py-3 border border-zinc-400 text-zinc-950 focus:outline-none focus:border-red-400 bg-transparent"
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
              onChange={handleChange}
              value={credentials.password}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-zinc-400 text-zinc-950 focus:outline-none focus:border-red-400 bg-transparent"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-1/2 bg-slate-950 hover:bg-black text-white py-3 sm:py-4 uppercase text-md font-semibold tracking-wider transition duration-200"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
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
          Don&#39;t have an account?{' '}
          <Link href="/signup" className="text-blue-500 hover:underline cursor-pointer">
            Sign up
          </Link>
        </p>
      </div>

      {/* Alert Component */}
      {alert.message && (
        <div className={`fixed bottom-4 right-4 mb-4 mr-4 px-6 py-4 rounded shadow-lg transition-opacity duration-300 ${alert.type === 'success' ? 'bg-green-100 border border-green-400 text-green-700' : 'bg-red-100 border border-red-400 text-red-700'}`}>
          <span>{alert.message}</span>
        </div>
      )}
    </div>
  );
};

export default Login;
