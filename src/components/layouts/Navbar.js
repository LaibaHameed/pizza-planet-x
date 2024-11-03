import React, { useState, useRef, useEffect, useContext } from 'react';
import { CartContext } from '@/utils/contextReducer';
import Image from 'next/image';
import { LucideLogIn, MenuIcon, ShoppingCart, User, UserPlusIcon, X, LogOut } from 'lucide-react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const { state } = useContext(CartContext);
  const cartItems = state ? state.length : 0;

  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [alert, setAlert] = useState(null);
  const router = useRouter();

  // Refs for the dropdowns
  const profileRef = useRef(null);
  const menuRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Check if the user is authenticated on initial render
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);

    // Listen for route changes to re-check authentication state
    const handleRouteChange = () => {
      const token = localStorage.getItem('token');
      setIsAuthenticated(!!token);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Clean up event listener when component unmounts
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');

    setIsAuthenticated(false); // Update state

    setAlert({ type: 'success', message: 'You have successfully logged out!' });
    setTimeout(() => {
      setAlert(null); // Remove alert message
    }, 1000);

    // Redirect to login page after a delay
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  // Navigation handler
  const handleNavigation = (path) => {
    router.push(path);
    setIsOpen(false); // Close the menu on mobile after navigation
  };

  return (
    <nav className="bg-red-500 p-4 sticky top-0 py-9 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => handleNavigation('/')} className="focus:outline-none">
          <Image src={"/logo.svg"} alt="logo" width={200} height={200} />
        </button>

        {/* Menu Links (Desktop) */}
        <div className="hidden md:flex space-x-7 uppercase font-bold text-sm">
          <button onClick={() => handleNavigation('/')} className="text-white hover:text-black tracking-wider uppercase">Home</button>
          <button onClick={() => handleNavigation('/menu')} className="text-white hover:text-black tracking-wider uppercase">Menu</button>
          <button onClick={() => handleNavigation('/about')} className="text-white hover:text-black tracking-wider uppercase">About us</button>
          <button onClick={() => handleNavigation('/contact')} className="text-white hover:text-black tracking-wider uppercase">Contact</button>
        </div>

        {/* Profile, Cart, and Mobile Menu Icons */}
        <div className="flex items-center space-x-3 space-md-8 ml-4">
          {/* Profile Icon */}
          <div className="relative ml-4" ref={profileRef}>
            <button onClick={() => setProfileOpen(!profileOpen)} className="text-white hover:text-black focus:outline-none">
              <User className="w-6 h-6" />
            </button>
            {profileOpen && (
              <div className="absolute right-0 mt-2 bg-slate-950 shadow-lg py-4 w-48 h-auto flex flex-col justify-center items-center uppercase font-bold text-sm">
                {isAuthenticated ? (
                  <>
                    <button onClick={() => handleNavigation('/orders')} className="block py-3 text-white hover:text-yellow-300 tracking-wider">My Orders</button>
                    <button onClick={handleLogout} className="py-3 text-lg text-white hover:text-yellow-300 tracking-wider flex justify-between items-center">
                      Logout <LogOut className="ml-2 w-4" />
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleNavigation('/login')} className="py-3 text-white hover:text-yellow-300 tracking-wider flex justify-between items-center">
                      Login <LucideLogIn className="ml-2 w-4" />
                    </button>
                    <button onClick={() => handleNavigation('/signup')} className="py-3 text-white hover:text-yellow-300 tracking-wider flex justify-between items-center">
                      Signup <UserPlusIcon className="ml-2 w-4" />
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Cart Icon with Badge */}
          <div className="relative">
            <button onClick={() => handleNavigation('/cart')} className="text-white hover:text-black">
              <ShoppingCart className="w-6 h-6" />
              {/* Badge */}
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-300 text-red-800 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden" ref={menuRef}>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <X className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden uppercase mt-10 font-bold text-md ml-7 z-50">
          <button onClick={() => handleNavigation('/')} className="block text-white hover:text-black px-4 py-2 tracking-wider uppercase">Home</button>
          <button onClick={() => handleNavigation('/menu')} className="block text-white hover:text-black px-4 py-2 tracking-wider uppercase">Menu</button>
          <button onClick={() => handleNavigation('/about')} className="block text-white hover:text-black px-4 py-2 tracking-wider uppercase">About us</button>
          <button onClick={() => handleNavigation('/contact')} className="block text-white hover:text-black px-4 py-2 tracking-wider uppercase">Contact</button>
        </div>
      )}

      {alert && (
        <div className={`fixed bottom-4 right-4 mb-4 mr-4 px-6 py-4 rounded shadow-lg transition-opacity duration-300 ${alert.type === 'success' ? 'bg-green-100 border border-green-400 text-green-700' : 'bg-red-100 border border-red-400 text-red-700'}`}>
          <span>{alert.message}</span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
