import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-blue-800 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out shadow-lg z-20`}
      >
        <div className="p-4 font-bold text-2xl border-b border-blue-700">
          MySidebar
        </div>
        <nav className="mt-4 space-y-4 px-4">
          <NavLink
            to="/add-item"
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? "block p-2 rounded bg-blue-700" : "block p-2 rounded hover:bg-blue-700 transition-colors"
            }
          >
            Add Item
          </NavLink>
          <NavLink
            to="/list-item"
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? "block p-2 rounded bg-blue-700" : "block p-2 rounded hover:bg-blue-700 transition-colors"
            }
          >
            List Item
          </NavLink>
          <NavLink
            to="/order"
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? "block p-2 rounded bg-blue-700" : "block p-2 rounded hover:bg-blue-700 transition-colors"
            }
          >
            Order
          </NavLink>
        </nav>
      </div>

      {/* Button to toggle sidebar */}
      <div className="p-4">
        <button
          onClick={toggleSidebar}
          className="text-blue-600 focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
