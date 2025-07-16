"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    let authStatus = false; // Replace with actual authentication logic
    setIsAuthenticated(authStatus);
  }, []);

  const handleSignOut = () => {
    setIsAuthenticated(false); // Add sign-out logic
  };

  return (
    <nav className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <img
            src="/images/car-umbrella-logo.png" // Update with your logo image path
            alt="Car Umbrella Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>
        <div className="space-x-6 flex items-center text-lg font-semibold">
          <Link href="/" className="hover:text-cyan-400 transition duration-300">
            Home
          </Link>
          <Link href="/product" className="hover:text-cyan-400 transition duration-300">
            Product
          </Link>
          <Link href="/contact" className="hover:text-cyan-400 transition duration-300">
            Contact
          </Link>
          {isAuthenticated ? (
            <>
              <Link href="/profile" className="hover:text-cyan-400 transition duration-300">
                Profile
              </Link>
              <button
                onClick={handleSignOut}
                className="bg-white text-blue-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link href="/signin" className="bg-white text-blue-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300">
                Sign In
              </Link>
              <Link href="/signup" className="bg-white text-blue-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;