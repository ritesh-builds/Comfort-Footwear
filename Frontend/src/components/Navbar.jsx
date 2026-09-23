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
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-5 md:px-10 py-3.5 md:py-4 z-[100] transition-all duration-300 ${
        darkMode ? "glass-nav-dark text-white" : "glass-nav-light text-black"
      }`}
    >
      {/* LOGO */}
      <Link to="/" className={`no-underline flex items-center gap-2 group ${darkMode ? "text-white" : "text-black"}`}>
        <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shadow-sm transition-transform group-hover:scale-105 ${
          darkMode ? "bg-white text-black" : "bg-black text-white"
        }`}>
          CF
        </div>
        <h3 className="text-[17px] md:text-[19px] font-semibold tracking-tight m-0">
          Comfort Footwear
        </h3>
      </Link>

      {/* NAV LINKS */}
      <div className={`hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border ${
        darkMode ? "bg-black/20 border-white/10" : "bg-white/40 border-black/5"
      }`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `no-underline text-[14px] font-medium px-4 py-1.5 rounded-full transition-all duration-300 ${
              isActive
                ? darkMode
                  ? "bg-white/15 text-white shadow-sm border border-white/20"
                  : "bg-white text-black shadow-sm border border-black/10"
                : darkMode
                ? "text-neutral-400 hover:text-white hover:bg-white/5"
                : "text-neutral-600 hover:text-black hover:bg-black/5"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/About"
          className={({ isActive }) =>
            `no-underline text-[14px] font-medium px-4 py-1.5 rounded-full transition-all duration-300 ${
              isActive
                ? darkMode
                  ? "bg-white/15 text-white shadow-sm border border-white/20"
                  : "bg-white text-black shadow-sm border border-black/10"
                : darkMode
                ? "text-neutral-400 hover:text-white hover:bg-white/5"
                : "text-neutral-600 hover:text-black hover:bg-black/5"
            }`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            `no-underline text-[14px] font-medium px-4 py-1.5 rounded-full transition-all duration-300 ${
              isActive
                ? darkMode
                  ? "bg-white/15 text-white shadow-sm border border-white/20"
                  : "bg-white text-black shadow-sm border border-black/10"
                : darkMode
                ? "text-neutral-400 hover:text-white hover:bg-white/5"
                : "text-neutral-600 hover:text-black hover:bg-black/5"
            }`
          }
        >
          Contact
        </NavLink>

        <NavLink
          to="/Product"
          className={({ isActive }) =>
            `no-underline text-[14px] font-medium px-4 py-1.5 rounded-full transition-all duration-300 ${
              isActive
                ? darkMode
                  ? "bg-white/15 text-white shadow-sm border border-white/20"
                  : "bg-white text-black shadow-sm border border-black/10"
                : darkMode
                ? "text-neutral-400 hover:text-white hover:bg-white/5"
                : "text-neutral-600 hover:text-black hover:bg-black/5"
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
          className={`w-9.5 h-9.5 rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 ${
            darkMode
              ? "glass-btn-dark hover:scale-105"
              : "glass-btn-light hover:scale-105"
          }`}
        >
          {darkMode ? (
            <Sun size={16} strokeWidth={2} />
          ) : (
            <Moon size={16} strokeWidth={2} />
          )}
        </button>

        {/* LOGIN / PROFILE & LOGOUT */}
        {accessToken ? (
          <div className="flex items-center gap-2">
            <Link
              to="/profile"
              className={`px-4.5 py-2 rounded-full no-underline text-[13px] font-medium flex items-center gap-1.5 transition-all duration-300 ${
                darkMode
                  ? "glass-btn-dark hover:bg-white hover:text-black"
                  : "glass-btn-light hover:bg-black hover:text-white"
              }`}
            >
              <User size={14} />
              Profile
            </Link>

            <button
              onClick={handleLogout}
              title="Log Out"
              className={`p-2.5 rounded-full border cursor-pointer flex items-center justify-center transition-all duration-300 ${
                darkMode
                  ? "border-red-500/30 text-red-400 bg-red-500/10 hover:bg-red-500 hover:text-white"
                  : "border-red-200 text-red-600 bg-red-50 hover:bg-red-600 hover:text-white"
              }`}
            >
              <LogOut size={14} />
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className={`px-5 py-2 rounded-full no-underline text-[13px] font-medium transition-all duration-300 ${
              darkMode
                ? "glass-btn-dark hover:bg-white hover:text-black"
                : "glass-btn-light hover:bg-black hover:text-white"
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
            darkMode ? "glass-btn-dark" : "glass-btn-light"
          }`}
        >
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className={`w-9 h-9 rounded-full cursor-pointer flex items-center justify-center ${
            darkMode ? "glass-btn-dark" : "glass-btn-light"
          }`}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* MOBILE MENU DRAWER */}
      {menuOpen && (
        <div
          className={`absolute top-full left-0 w-full px-6 py-6 md:hidden transition-all duration-300 border-t ${
            darkMode ? "glass-modal-dark border-white/10" : "glass-modal-light border-black/10"
          }`}
        >
          <div className="flex flex-col gap-3">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={`no-underline text-[15px] font-medium py-2 px-4 rounded-xl transition-colors ${
                darkMode ? "text-[#aaa] hover:text-white hover:bg-white/10" : "text-[#555] hover:text-black hover:bg-black/5"
              }`}
            >
              Home
            </NavLink>

            <NavLink
              to="/About"
              onClick={() => setMenuOpen(false)}
              className={`no-underline text-[15px] font-medium py-2 px-4 rounded-xl transition-colors ${
                darkMode ? "text-[#aaa] hover:text-white hover:bg-white/10" : "text-[#555] hover:text-black hover:bg-black/5"
              }`}
            >
              About
            </NavLink>

            <NavLink
              to="/Contact"
              onClick={() => setMenuOpen(false)}
              className={`no-underline text-[15px] font-medium py-2 px-4 rounded-xl transition-colors ${
                darkMode ? "text-[#aaa] hover:text-white hover:bg-white/10" : "text-[#555] hover:text-black hover:bg-black/5"
              }`}
            >
              Contact
            </NavLink>

            <NavLink
              to="/Product"
              onClick={() => setMenuOpen(false)}
              className={`no-underline text-[15px] font-medium py-2 px-4 rounded-xl transition-colors ${
                darkMode ? "text-[#aaa] hover:text-white hover:bg-white/10" : "text-[#555] hover:text-black hover:bg-black/5"
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
                  className={`flex-1 text-center px-5 py-2.5 rounded-full no-underline text-[14px] font-medium ${
                    darkMode ? "glass-btn-dark" : "glass-btn-light"
                  }`}
                >
                  Profile
                </Link>

                <button
                  onClick={handleLogout}
                  className="px-5 py-2.5 rounded-full text-[14px] font-medium cursor-pointer border border-red-500/30 text-red-400 bg-red-500/10"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="pt-2 border-t border-gray-500/20">
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className={`block text-center px-5 py-2.5 rounded-full no-underline text-[14px] font-medium ${
                    darkMode ? "glass-btn-dark" : "glass-btn-light"
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