import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 stciky top-0 z-5 backdrop-blur-md">
      <Link to="/" className="text-2xl font-bold text-[#1DB954]">
        DailyNest
      </Link>

      <div className="space-x-20 text-sm md:text-base">
        <a href="#hero" className="hover:text-[#1DB954]">
          Home
        </a>
        <a href="#hero" className="hover:text-[#1DB954]">
          About
        </a>
        <a href="#hero" className="hover:text-[#1DB954]">
          Contact
        </a>
        <Link
          to="/login"
          className="bg-[#1DB954] hover:bg-[#71ca6d] text-white font-semibold py-2 px-3 rounded-4xl shadow-md transition duration-300"
        >
          Login/Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
