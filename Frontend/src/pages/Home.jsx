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
            : "bg-[#f5f5f5] text-black"
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
          border-2
          -right-16
          sm:-right-24
          -top-16
          sm:-top-24
          pointer-events-none
          opacity-50
          sm:opacity-100
          transition-colors
          duration-300

          ${
            darkMode
              ? "border-[#222]"
              : "border-[#d5d5d5]"
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
          opacity-50
          sm:opacity-100
          transition-colors
          duration-300

          ${
            darkMode
              ? "border-[#292929]"
              : "border-[#cccccc]"
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
          border-2
          left-[-140px]
          sm:left-[-240px]
          bottom-[-140px]
          sm:bottom-[-220px]
          pointer-events-none
          opacity-40
          sm:opacity-100
          transition-colors
          duration-300

          ${
            darkMode
              ? "border-[#252424]"
              : "border-[#d2d2d2]"
          }
        `}
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-[2] max-w-[700px] w-full">

        {/* SMALL HEADING */}
        <span
          className={`
            text-[11px]
            sm:text-[12px]
            tracking-[4px]
            sm:tracking-[5px]
            uppercase
            font-medium
            transition-colors
            duration-300

            ${
              darkMode
                ? "text-[#777]"
                : "text-[#888]"
            }
          `}
        >
          COMFORT FOOTWEAR
        </span>

        {/* MAIN HEADING */}
        <h1
          className="
            text-[clamp(2.75rem,8.5vw,9.5rem)]
            leading-[0.88]
            font-normal
            tracking-[-3px]
            sm:tracking-[-5px]
            md:tracking-[-8px]
            my-5
            sm:my-[30px]
          "
        >
          Walk in
          <br />

          <span
            className={`
              transition-colors
              duration-300

              ${
                darkMode
                  ? "text-[#666]"
                  : "text-[#888]"
              }
            `}
          >
            comfort.
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p
          className={`
            max-w-[430px]
            text-[14px]
            sm:text-[15px]
            leading-[1.7]
            sm:leading-[1.8]
            transition-colors
            duration-300

            ${
              darkMode
                ? "text-[#888]"
                : "text-[#666]"
            }
          `}
        >
          Footwear designed for the way you move.
          Simple, comfortable, and made for every day.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-[15px] mt-8 sm:mt-[35px]">

          <NavLink to="/Product" className="no-underline">
            <button
              className={`
                w-full
                sm:w-auto
                px-[25px]
                py-[13px]
                rounded-[25px]
                border
                text-[14px]
                font-medium
                cursor-pointer
                transition-all
                duration-300

                ${
                  darkMode
                    ? "bg-white text-black border-white hover:bg-transparent hover:text-white"
                    : "bg-black text-white border-black hover:bg-transparent hover:text-black"
                }
              `}
            >
              Explore Collection
            </button>
          </NavLink>

          <Link to="/Learn-more" className="no-underline">
            <button
              className={`
                w-full
                sm:w-auto
                px-[25px]
                py-[13px]
                rounded-[25px]
                border
                text-[14px]
                font-medium
                cursor-pointer
                transition-all
                duration-300

                ${
                  darkMode
                    ? "border-[#444] text-[#aaa] hover:border-white hover:text-white"
                    : "border-[#bbb] text-[#666] hover:border-black hover:text-black"
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