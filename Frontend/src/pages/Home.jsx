import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Link, NavLink } from "react-router-dom";

function Home() {
  const { darkMode } = useTheme();

  return (
    <main
      className={`
        min-h-screen
        relative
        overflow-hidden
        flex
        items-center
        pt-28
        pb-16
        px-5
        sm:px-8
        lg:px-[8%]
        transition-colors
        duration-300

        ${
          darkMode
            ? "bg-[#080808] text-white"
            : "bg-[#fcfcfd] text-black"
        }
      `}
    >
      {/* ================= DECORATIVE CIRCLES ================= */}

      {/* BIG CIRCLE - TOP RIGHT */}
      <div
        className={`
          absolute
          w-[320px]
          sm:w-[500px]
          md:w-[650px]
          h-[320px]
          sm:h-[500px]
          md:h-[650px]
          rounded-full
          border
          -right-16
          sm:-right-24
          -top-16
          sm:-top-24
          pointer-events-none
          opacity-70
          sm:opacity-100
          transition-colors
          duration-300
          z-0

          ${
            darkMode
              ? "border-[#222]"
              : "border-neutral-200/80"
          }
        `}
      />

      {/* SECOND CIRCLE - TOP RIGHT */}
      <div
        className={`
          absolute
          w-[200px]
          sm:w-[350px]
          md:w-[420px]
          h-[200px]
          sm:h-[350px]
          md:h-[420px]
          rounded-full
          border
          -right-10
          sm:-right-20
          -top-10
          sm:-top-20
          pointer-events-none
          opacity-70
          sm:opacity-100
          transition-colors
          duration-300
          z-0

          ${
            darkMode
              ? "border-[#292929]"
              : "border-neutral-200/60"
          }
        `}
      />

      {/* BIG CIRCLE - BOTTOM LEFT */}
      <div
        className={`
          absolute
          w-[280px]
          sm:w-[450px]
          md:w-[500px]
          h-[280px]
          sm:h-[450px]
          md:h-[500px]
          rounded-full
          border
          left-[-140px]
          sm:left-[-240px]
          bottom-[-140px]
          sm:bottom-[-220px]
          pointer-events-none
          opacity-60
          sm:opacity-100
          transition-colors
          duration-300
          z-0

          ${
            darkMode
              ? "border-[#252424]"
              : "border-neutral-200/60"
          }
        `}
      />

      {/* ================= AMBIENT GLOWING GLASS ORBS ================= */}
      <div
        className="glass-orb w-[500px] sm:w-[680px] h-[500px] sm:h-[680px] -right-20 -top-20 opacity-30 dark:opacity-20 bg-gradient-to-tr from-amber-200/40 via-rose-200/30 to-indigo-300/30 blur-[120px]"
      />
      <div
        className="glass-orb w-[400px] sm:w-[540px] h-[400px] sm:h-[540px] -left-20 -bottom-20 opacity-25 dark:opacity-15 bg-gradient-to-br from-teal-200/30 via-sky-200/30 to-purple-300/25 blur-[120px]"
      />

      {/* ================= HERO CONTENT CARD ================= */}
      <div className={`relative z-[2] max-w-[760px] w-full p-8 sm:p-12 md:p-14 rounded-3xl transition-all duration-300 ${
        darkMode ? "glass-panel-dark" : "glass-panel-light"
      }`}>

        {/* SMALL HEADING BADGE */}
        <span
          className={`glass-badge mb-4 ${
            darkMode ? "glass-badge-dark" : "glass-badge-light"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          COMFORT FOOTWEAR 2026
        </span>

        {/* MAIN HEADING */}
        <h1
          className="
            text-[clamp(2.75rem,8vw,8.5rem)]
            leading-[0.88]
            font-normal
            tracking-[-3px]
            sm:tracking-[-5px]
            md:tracking-[-7px]
            my-4
          "
        >
          Walk in
          <br />

          <span
            className={
              darkMode
                ? "bg-gradient-to-r from-neutral-400 via-neutral-200 to-white bg-clip-text text-transparent font-medium"
                : "bg-gradient-to-r from-neutral-500 via-neutral-800 to-black bg-clip-text text-transparent font-medium"
            }
          >
            comfort.
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p
          className={`
            max-w-[460px]
            text-[14px]
            sm:text-[16px]
            leading-[1.7]
            sm:leading-[1.8]
            mb-8
            ${
              darkMode
                ? "text-[#aaa]"
                : "text-[#555]"
            }
          `}
        >
          Footwear designed for the way you move.
          Simple, comfortable, and engineered for effortless everyday elegance.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">

          <NavLink to="/Product" className="no-underline">
            <button
              className={`
                w-full
                sm:w-auto
                px-[28px]
                py-[14px]
                rounded-full
                text-[14px]
                font-semibold
                cursor-pointer
                transition-all
                duration-300
                shadow-lg

                ${
                  darkMode
                    ? "bg-white text-black hover:bg-neutral-200 hover:scale-105"
                    : "bg-black text-white hover:bg-neutral-800 hover:scale-105"
                }
              `}
            >
              Explore Collection →
            </button>
          </NavLink>

          <Link to="/Learn-more" className="no-underline">
            <button
              className={`
                w-full
                sm:w-auto
                px-[28px]
                py-[14px]
                rounded-full
                text-[14px]
                font-medium
                cursor-pointer
                transition-all
                duration-300

                ${
                  darkMode
                    ? "glass-btn-dark"
                    : "glass-btn-light"
                }
              `}
            >
              Learn More
            </button>
          </Link>

        </div>

      </div>

    </main>
  );
}

export default Home;