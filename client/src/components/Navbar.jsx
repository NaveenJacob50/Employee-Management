import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ username }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username"); // Remove username from localStorage
    navigate("/"); // Redirect to login page
  };

  return (
    <div className="bg-gray-700 p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="ml-4">
        <h2 className="text-white font-bold text-2xl">AdminPanel</h2>
      </div>

      {/* Hamburger Icon */}
      <button
        className="text-white text-3xl md:hidden mr-4"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Navigation Links */}
      <ul
        className={`flex-col md:flex-row gap-8 items-center justify-end text-white bg-gray-700 md:flex md:static absolute w-full left-0 top-16 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        <li className="px-4 py-2 hover:bg-gray-600">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-600">
          <Link to="/employee-list">Employee List</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-600">
          {username ? (
            // Display the username as a non-clickable span
            <span className="cursor-default">{username}</span>
          ) : (
            <Link to="/">Logout</Link>
          )}
        </li>
        {username && (
          <li className="px-4 py-2 hover:bg-gray-600">
            <button onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
