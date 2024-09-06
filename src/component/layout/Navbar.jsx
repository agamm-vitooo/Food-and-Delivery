import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const cartCount = 0; // Misalnya, state untuk jumlah item di keranjang

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-white container p-4 md:px-14 px-8 flex justify-between items-center sticky top-0 z-50 transition-all duration-300 ${hasScrolled ? 'border-b border-gray-300' : ''}`}>
      {/* Logo */}
      <div className="text-orange-500 font-bold text-xl">
        F&D
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none" aria-expanded={isOpen ? 'true' : 'false'} aria-label="Toggle navigation menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <ul
        className={`${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } md:flex md:space-x-8 text-gray-700 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 space-y-4 md:space-y-0 overflow-hidden transition-all duration-500 ease-in-out md:max-h-full md:opacity-100`}
        style={{ transitionProperty: 'max-height, opacity' }}
      >
        <li className="hover:text-orange-500">
          <Link to="/" className="hover:underline" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li className="hover:text-orange-500">
          <Link to="/menu" className="hover:underline" onClick={() => setIsOpen(false)}>
            Menu
          </Link>
        </li>
        <li className="hover:text-orange-500">
          <Link to="/services" className="hover:underline" onClick={() => setIsOpen(false)}>
            Services
          </Link>
        </li>
        <li className="hover:text-orange-500">
          <Link to="/contact" className="hover:underline" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Icons and Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="relative">
          {/* Cart Icon */}
          <button className="relative text-gray-600 hover:text-orange-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2 5h14M9 21h6" />
            </svg>
            {/* Notification Bubble */}
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-orange-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Register Button */}
        <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded-full hover:bg-orange-500 hover:text-white transition duration-300">
          Register
        </button>

        {/* Login Button */}
        <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300">
          Login
        </button>
      </div>
    </nav>
  );
};
