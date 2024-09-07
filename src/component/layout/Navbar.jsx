import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

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
    <nav className={`bg-white container p-4 md:px-14 px-8 flex justify-between items-center sticky top-0 z-50 transition-all duration-300 ${hasScrolled ? 'border-b border-gray-300 shadow-md' : ''}`}>
      {/* Container untuk Logo, Cart, dan Hamburger Icon */}
      <div className="flex items-center justify-between w-full md:w-auto">
        {/* Logo */}
        <div className="text-orange-500 font-bold text-xl">
          F&D
        </div>

        {/* Cart Icon untuk tampilan mobile */}
        <div className="relative flex items-center md:hidden ml-auto">
          <NavLink to="/cart" className="relative text-gray-600 hover:text-orange-500">
            <img
              src="https://img.icons8.com/fluency-systems-regular/96/shopping-cart--v1.png"
              alt="shopping cart"
              className="h-6 w-6"
            />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-orange-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </NavLink>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center ml-4">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none" aria-expanded={isOpen ? 'true' : 'false'} aria-label="Toggle navigation menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <ul
        className={`${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } md:flex md:space-x-8 text-gray-700 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 space-y-4 md:space-y-0 overflow-hidden transition-all duration-500 ease-in-out md:max-h-full md:opacity-100`}
        style={{ transitionProperty: 'max-height, opacity' }}
      >
        {/* Menu with hover effects */}
        <li className="group relative hover:text-orange-500">
          <NavLink
            exact
            to="/"
            className="relative hover:underline after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 group-hover:after:w-full"
            activeClassName="text-orange-500"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li className="group relative hover:text-orange-500">
          <NavLink
            to="/menu"
            className="relative hover:underline after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 group-hover:after:w-full"
            activeClassName="text-orange-500"
            onClick={() => setIsOpen(false)}
          >
            Menu
          </NavLink>
        </li>
        <li className="group relative hover:text-orange-500">
          <NavLink
            to="/services"
            className="relative hover:underline after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 group-hover:after:w-full"
            activeClassName="text-orange-500"
            onClick={() => setIsOpen(false)}
          >
            Services
          </NavLink>
        </li>
        <li className="group relative hover:text-orange-500">
          <NavLink
            to="/contact"
            className="relative hover:underline after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 group-hover:after:w-full"
            activeClassName="text-orange-500"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </li>

        {/* Mobile Login & Register Buttons */}
        <li className="md:hidden flex flex-col space-y-2">
          <NavLink to="/register" className="border border-orange-500 text-orange-500 px-4 py-2 rounded-full hover:bg-orange-500 hover:text-white transition duration-300">
            Register
          </NavLink>
          <NavLink to="/login" className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300">
            Login
          </NavLink>
        </li>
      </ul>

      {/* Cart Icon untuk tampilan desktop */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="relative">
          <NavLink to="/cart" className="relative text-gray-600 hover:text-orange-500">
            <img
              src="https://img.icons8.com/fluency-systems-regular/96/shopping-cart--v1.png"
              alt="shopping cart"
              className="h-6 w-6"
            />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-orange-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </NavLink>
        </div>

        {/* Register Button */}
        <NavLink to="/register" className="border border-orange-500 text-orange-500 px-4 py-2 rounded-full hover:bg-orange-500 hover:text-white transition duration-300">
          Register
        </NavLink>

        {/* Login Button */}
        <NavLink to="/login" className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300">
          Login
        </NavLink>
      </div>
    </nav>
  );
};
