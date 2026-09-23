import React, { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
import { Sun, Moon, LogOut, User, Menu, X } from "lucide-react";

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const { accessToken, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate("/login");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-5 md:px-10 py-4 md:py-4.5 z-[100] backdrop-blur-md transition-all duration-300 ${
        darkMode
          ? "bg-[#080808]/90"
          : "bg-[#f5f5f5]/90"
      }`}
    >
      {/* LOGO */}
      <Link to="/" className={`no-underline ${darkMode ? "text-white" : "text-black"}`}>
        <h3 className="text-[18px] md:text-[20px] font-semibold tracking-[-0.5px] m-0">
          Comfort Footwear
        </h3>
      </Link>

      {/* NAV LINKS */}
      <div className="hidden md:flex items-center gap-9">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `no-underline text-[15px] font-medium transition-colors duration-300 ${
              darkMode
                ? isActive
                  ? "text-white"
                  : "text-[#888] hover:text-white"
                : isActive
                ? "text-black"
                : "text-[#666] hover:text-black"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/About"
          className={({ isActive }) =>
            `no-underline text-[15px] font-medium transition-colors duration-300 ${
              darkMode
                ? isActive
                  ? "text-white"
                  : "text-[#888] hover:text-white"
                : isActive
                ? "text-black"
                : "text-[#666] hover:text-black"
            }`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            `no-underline text-[15px] font-medium transition-colors duration-300 ${
              darkMode
                ? isActive
                  ? "text-white"
                  : "text-[#888] hover:text-white"
                : isActive
                ? "text-black"
                : "text-[#666] hover:text-black"
            }`
          }
        >
          Contact
        </NavLink>

        <NavLink
          to="/Product"
          className={({ isActive }) =>
            `no-underline text-[15px] font-medium transition-colors duration-300 ${
              darkMode
                ? isActive
                  ? "text-white"
                  : "text-[#888] hover:text-white"
                : isActive
                ? "text-black"
                : "text-[#666] hover:text-black"
            }`
          }
        >
          Product
        </NavLink>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:flex items-center gap-3">
        {/* THEME BUTTON */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className={`w-9 h-9 rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 ${
            darkMode
              ? "bg-[#141414] border border-[#2a2a2a] text-white hover:bg-[#202020]"
              : "bg-white border border-[#ddd] text-black hover:bg-gray-100"
          }`}
        >
          {darkMode ? (
            <Sun size={16} strokeWidth={1.8} />
          ) : (
            <Moon size={16} strokeWidth={1.8} />
          )}
        </button>

        {/* LOGIN / PROFILE & LOGOUT */}
        {accessToken ? (
          <div className="flex items-center gap-2">
            <Link
              to="/profile"
              className={`px-4 py-2 rounded-full border no-underline text-[13px] font-medium flex items-center gap-1.5 transition-all duration-300 ${
                darkMode
                  ? "border-[#333] text-white hover:bg-white hover:text-black hover:border-white"
                  : "border-[#ccc] text-black hover:bg-black hover:text-white hover:border-black"
              }`}
            >
              <User size={14} />
              Profile
            </Link>

            <button
              onClick={handleLogout}
              title="Log Out"
              className={`p-2 rounded-full border cursor-pointer flex items-center justify-center transition-all duration-300 ${
                darkMode
                  ? "border-red-500/30 text-red-400 hover:bg-red-600 hover:text-white hover:border-red-600"
                  : "border-red-200 text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600"
              }`}
            >
              <LogOut size={15} />
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className={`px-4.5 py-2 rounded-full border no-underline text-[13px] font-medium transition-all duration-300 ${
              darkMode
                ? "border-[#333] text-white hover:bg-white hover:text-black hover:border-white"
                : "border-[#ccc] text-black hover:bg-black hover:text-white hover:border-black"
            }`}
          >
            Login / Sign Up
          </Link>
        )}
      </div>

      {/* MOBILE RIGHT SIDE */}
      <div className="flex md:hidden items-center gap-2">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className={`w-9 h-9 rounded-full cursor-pointer flex items-center justify-center ${
            darkMode ? "bg-[#141414] border border-[#2a2a2a] text-white" : "bg-white border border-[#ccc] text-black"
          }`}
        >
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className={`w-9 h-9 rounded-full cursor-pointer flex items-center justify-center ${
            darkMode ? "bg-[#141414] border border-[#2a2a2a] text-white" : "bg-white border border-[#ccc] text-black"
          }`}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* MOBILE MENU DRAWER */}
      {menuOpen && (
        <div
          className={`absolute top-full left-0 w-full px-6 py-6 shadow-xl md:hidden transition-all duration-300 ${
            darkMode ? "bg-[#080808]/95 backdrop-blur-lg" : "bg-[#f5f5f5]/95 backdrop-blur-lg"
          }`}
        >
          <div className="flex flex-col gap-4">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={`no-underline text-[16px] font-medium py-1 ${
                darkMode ? "text-[#aaa] hover:text-white" : "text-[#555] hover:text-black"
              }`}
            >
              Home
            </NavLink>

            <NavLink
              to="/About"
              onClick={() => setMenuOpen(false)}
              className={`no-underline text-[16px] font-medium py-1 ${
                darkMode ? "text-[#aaa] hover:text-white" : "text-[#555] hover:text-black"
              }`}
            >
              About
            </NavLink>

            <NavLink
              to="/Contact"
              onClick={() => setMenuOpen(false)}
              className={`no-underline text-[16px] font-medium py-1 ${
                darkMode ? "text-[#aaa] hover:text-white" : "text-[#555] hover:text-black"
              }`}
            >
              Contact
            </NavLink>

            <NavLink
              to="/Product"
              onClick={() => setMenuOpen(false)}
              className={`no-underline text-[16px] font-medium py-1 ${
                darkMode ? "text-[#aaa] hover:text-white" : "text-[#555] hover:text-black"
              }`}
            >
              Product
            </NavLink>

            {/* MOBILE LOGIN / PROFILE & LOGOUT */}
            {accessToken ? (
              <div className="flex items-center gap-3 pt-3 border-t border-gray-500/20">
                <Link
                  to="/profile"
                  onClick={() => setMenuOpen(false)}
                  className={`px-5 py-2.5 rounded-full border no-underline text-[14px] font-medium ${
                    darkMode ? "border-[#444] text-white" : "border-[#bbb] text-black"
                  }`}
                >
                  Profile
                </Link>

                <button
                  onClick={handleLogout}
                  className={`px-5 py-2.5 rounded-full border text-[14px] font-medium cursor-pointer ${
                    darkMode
                      ? "border-red-500/40 text-red-400 bg-red-500/10"
                      : "border-red-200 text-red-600 bg-red-50"
                  }`}
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="pt-2 border-t border-gray-500/20">
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className={`inline-block px-5 py-2.5 rounded-full border no-underline text-[14px] font-medium ${
                    darkMode ? "border-[#444] text-white" : "border-[#bbb] text-black"
                  }`}
                >
                  Login / Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;