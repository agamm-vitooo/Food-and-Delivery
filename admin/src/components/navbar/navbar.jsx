import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">
          MyWebsite
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-gray-300 transition-colors">Home</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">About</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">Services</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">Contact</a>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
