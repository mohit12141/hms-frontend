import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white px-6 py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand */}
        <Link
          to="/"
          className="text-xl font-bold hover:text-gray-200 transition-colors"
        >
          HMS
        </Link>

        {/* Links */}
        <div className="space-x-6">
          <Link
            to="/"
            className="hover:text-gray-200 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/appointments"
            className="hover:text-gray-200 transition-colors"
          >
            Appointments
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-200 transition-colors"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
