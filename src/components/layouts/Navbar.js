import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LucideLogIn, MenuIcon, ShoppingCart, User,  UserPlusIcon, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const cartItems = 3; // Example number of cart items

  // Refs for the dropdowns
  const profileRef = useRef(null);
  const menuRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <nav className="bg-red-500 p-4 sticky top-0 py-9 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="pr-4">
          <Link href="/">
            <Image src={"/logo.svg"} alt="logo" width={250} height={250} />
          </Link>
        </div>

        {/* Menu Links (Desktop) */}
        <div className="hidden md:flex space-x-7 uppercase font-bold text-sm">
          <Link href="/" className="text-white hover:text-black tracking-wider">Home</Link>
          <Link href="/menu" className="text-white hover:text-black tracking-wider">Menu</Link>
          <Link href="/order" className="text-white hover:text-black tracking-wider">Order</Link>
          <Link href="/contact" className="text-white hover:text-black tracking-wider">Contact</Link>
        </div>

        {/* Profile, Cart, and Mobile Menu Icons */}
        <div className="flex items-center space-x-6">
          {/* Profile Icon */}
          <div className="relative" ref={profileRef}>
          <button onClick={() => setProfileOpen(!profileOpen)} className="text-white hover:text-black focus:outline-none">
              <User className="w-6 h-6" />
            </button>
            {profileOpen && (
              <div className="absolute right-0 mt-2 bg-slate-950 shadow-lg py-4 w-48 h-auto flex flex-col justify-center items-center uppercase font-bold text-sm">
                <Link href="/orders" className="block py-3 text-white hover:text-yellow-300 tracking-wider">My Orders</Link>
                <Link href="/login" className="py-3 text-white hover:text-yellow-300 tracking-wider flex justify-between items-center">Login <LucideLogIn className="ml-2 w-4" /> </Link>
                <Link href="/signup" className="py-3 text-white hover:text-yellow-300 tracking-wider flex justify-between items-center">signup <UserPlusIcon className="ml-2 w-4" /> </Link>
              </div>
            )}
          </div>

          {/* Cart Icon with Badge */}
          <div className="relative">
            <Link href="/cart" className="text-white hover:text-black">
              <ShoppingCart className="w-6 h-6" />
              {/* Badge */}
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-300 text-red-800 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden" ref={menuRef}>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {/* Toggle between Menu and Cross icon */}
              {isOpen ? <X className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden uppercase mt-10 font-bold text-md ml-7">
          <Link href="/" className="block text-white hover:text-black px-4 py-2 tracking-wider">Home</Link>
          <Link href="/menu" className="block text-white hover:text-black px-4 py-2 tracking-wider">Menu</Link>
          <Link href="/order" className="block text-white hover:text-black px-4 py-2 tracking-wider">Order</Link>
          <Link href="/contact" className="block text-white hover:text-black px-4 py-2 tracking-wider">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
