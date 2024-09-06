import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-white container p-4 md:px-14 px-8 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <div className="text-orange-500 font-bold text-xl">
        F&D
      </div>

      {/* Menu Items */}
      <ul className="hidden md:flex space-x-8 text-gray-700">
        <li className="hover:text-orange-500">
          <Link to="/" className="hover:underline">Home</Link>
        </li>
        <li className="hover:text-orange-500">
          <Link to="/menu" className="hover:underline">Menu</Link>
        </li>
        <li className="hover:text-orange-500">
          <Link to="/services" className="hover:underline">Services</Link>
        </li>
        <li className="hover:text-orange-500">
          <Link to="/contact" className="hover:underline">Contact</Link>
        </li>
      </ul>

      {/* Icons and Buttons */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          {/* Cart Icon */}
          <button className="relative text-gray-600 hover:text-orange-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2 5h14M7 13L5.4 5M7 13h10M9 21h6M9 21H5.4M9 21h6M5.4 21L4 17" />
            </svg>
            {/* Notification Bubble */}
            <span className="absolute top-0 right-0 bg-orange-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">0</span>
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
  )
}
