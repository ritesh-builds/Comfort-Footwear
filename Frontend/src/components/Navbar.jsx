import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Sun, Moon } from "lucide-react";

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const { accessToken } = useContext(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false); // NEW

  return (
    <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-5 md:px-10 py-4 md:py-5 z-100 border-b transition-all duration-300 ${darkMode ? "bg-[#080808] border-[#1f1f1f]" : "bg-[#f5f5f5] border-[#dddddd]"}`}>

      {/* LOGO */}
      <Link to="/" className={`no-underline ${darkMode ? "text-white" : "text-black"}`}>
        <h3 className="text-[18px] md:text-[20px] font-medium tracking-[-1px] m-0">
          Comfort Footwear
        </h3>
      </Link>

      {/* NAV LINKS */}
      <div className="hidden md:flex items-center gap-10">

        <NavLink to="/" className={({ isActive }) => `no-underline text-[17px] transition-colors duration-300 ${darkMode ? isActive ? "text-white" : "text-[#888] hover:text-white" : isActive ? "text-black" : "text-[#666] hover:text-black"}`}>
          Home
        </NavLink>

        <NavLink to="/About" className={({ isActive }) => `no-underline text-[17px] transition-colors duration-300 ${darkMode ? isActive ? "text-white" : "text-[#888] hover:text-white" : isActive ? "text-black" : "text-[#666] hover:text-black"}`}>
          About
        </NavLink>

        <NavLink to="/Contact" className={({ isActive }) => `no-underline text-[17px] transition-colors duration-300 ${darkMode ? isActive ? "text-white" : "text-[#888] hover:text-white" : isActive ? "text-black" : "text-[#666] hover:text-black"}`}>
          Contact
        </NavLink>

        <NavLink to="/Product" className={({ isActive }) => `no-underline text-[17px] transition-colors duration-300 ${darkMode ? isActive ? "text-white" : "text-[#888] hover:text-white" : isActive ? "text-black" : "text-[#666] hover:text-black"}`}>
          Product
        </NavLink>

      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:flex items-center gap-3.75">

        {/* THEME BUTTON */}
        <button onClick={toggleTheme} className={`w-10 h-10 rounded-full cursor-pointer text-[18px] flex items-center justify-center transition-all duration-300 ${darkMode ? "bg-[#111] border border-[#333]" : "bg-white border border-[#f3ebeb]"}`}>
          {darkMode ? <Sun size={17} strokeWidth={1.8} className="text-white" /> : <Moon size={17} strokeWidth={1.8} className="text-black" />}
        </button>

        {/* LOGIN */}
        {accessToken ? (
          <Link to="/profile" className={`px-5 py-2.5 rounded-[25px] border no-underline text-[14px] transition-all duration-300 ${darkMode ? "border-[#444] text-white hover:bg-white hover:text-black hover:border-white" : "border-[#bbb] text-black hover:bg-black hover:text-white hover:border-black"}`}>
            Profile
          </Link>
        ) : (
          <Link to="/login" className={`px-5 py-2.5 rounded-[25px] border no-underline text-[14px] transition-all duration-300 ${darkMode ? "border-[#444] text-white hover:bg-white hover:text-black hover:border-white" : "border-[#bbb] text-black hover:bg-black hover:text-white hover:border-black"}`}>
            Login / Sign Up
          </Link>
        )}

      </div>

      {/* MOBILE RIGHT SIDE - NEW */}
      <div className="flex md:hidden items-center gap-2">

        {/* MOBILE THEME BUTTON - NEW */}
        <button onClick={toggleTheme} className={`w-9 h-9 rounded-full cursor-pointer text-[16px] flex items-center justify-center ${darkMode ? "bg-[#111] border border-[#333]" : "bg-white border border-[#ccc]"}`}>
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* HAMBURGER - NEW */}
        <button onClick={() => setMenuOpen(!menuOpen)} className={`w-9 h-9 rounded-full cursor-pointer text-[20px] flex items-center justify-center ${darkMode ? "bg-[#111] border border-[#333] text-white" : "bg-white border border-[#ccc] text-black"}`}>
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* MOBILE MENU - NEW */}
      {menuOpen && (
        <div className={`absolute top-full left-0 w-full px-5 py-6 border-b md:hidden ${darkMode ? "bg-[#080808] border-[#1f1f1f]" : "bg-[#f5f5f5] border-[#dddddd]"}`}>

          <div className="flex flex-col gap-5">

            <NavLink to="/" onClick={() => setMenuOpen(false)} className={`no-underline text-[17px] ${darkMode ? "text-[#888] hover:text-white" : "text-[#666] hover:text-black"}`}>
              Home
            </NavLink>

            <NavLink to="/About" onClick={() => setMenuOpen(false)} className={`no-underline text-[17px] ${darkMode ? "text-[#888] hover:text-white" : "text-[#666] hover:text-black"}`}>
              About
            </NavLink>

            <NavLink to="/Contact" onClick={() => setMenuOpen(false)} className={`no-underline text-[17px] ${darkMode ? "text-[#888] hover:text-white" : "text-[#666] hover:text-black"}`}>
              Contact
            </NavLink>

            <NavLink to="/Product" onClick={() => setMenuOpen(false)} className={`no-underline text-[17px] ${darkMode ? "text-[#888] hover:text-white" : "text-[#666] hover:text-black"}`}>
              Product
            </NavLink>

            {/* MOBILE LOGIN / PROFILE - NEW */}
            {accessToken ? (
              <Link to="/profile" onClick={() => setMenuOpen(false)} className={`w-fit px-5 py-2.5 rounded-[25px] border no-underline text-[14px] ${darkMode ? "border-[#444] text-white" : "border-[#bbb] text-black"}`}>
                Profile
              </Link>
            ) : (
              <Link to="/login" onClick={() => setMenuOpen(false)} className={`w-fit px-5 py-2.5 rounded-[25px] border no-underline text-[14px] ${darkMode ? "border-[#444] text-white" : "border-[#bbb] text-black"}`}>
                Login / Sign Up
              </Link>
            )}

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;