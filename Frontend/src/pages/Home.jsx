import React from "react";
import { useTheme } from "../context/ThemeContext";

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
        px-[8%]
        transition-colors
        duration-300

        max-[900px]:px-6.25
        max-[900px]:py-25
        max-[900px]:items-start

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
          w-162.5
          h-162.5
          rounded-full
          border-2
          -right-25
          -top-25
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
          w-105
          h-105
          rounded-full
          border
          -right-25
          -top-25
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
          w-[500px]
          h-[500px]
          rounded-full
          border-2
          left-[-280px]
          bottom-[-250px]
          transition-colors
          duration-300

          ${
            darkMode
              ? "border-[#252424]"
              : "border-[#d2d2d2]"
          }
        `}
      />
      
      {/* SMALL CIRCLE - BOTTOM LEFT */}
      <div
        className={`
          absolute
          w-[280px]
          h-[280px]
          rounded-full
          border-2
          left-[-130px]
          bottom-[-140px]
          transition-colors
          duration-300

          ${
            darkMode
              ? "border-[#252525]"
              : "border-[#c8c8c8]"
          }
        `}
        
      />


      {/* ================= CONTENT ================= */}

      <div className="relative z-[2] max-w-[700px]">

        {/* SMALL HEADING */}
        <span
          className={`
            text-[12px]
            tracking-[5px]
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
            text-[clamp(5rem,11vw,11rem)]
            leading-[0.82]
            font-normal
            tracking-[-8px]
            my-[30px]
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
            text-[15px]
            leading-[1.8]
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
        <div className="flex items-center gap-[15px] mt-[35px]">

          <button
            className={`
              px-[25px]
              py-[12px]
              rounded-[25px]
              border
              text-[14px]
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

          <button
            className={`
              px-[25px]
              py-[12px]
              rounded-[25px]
              border
              text-[14px]
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
              
        </div>
              
      </div>

    </main>
  );
}

export default Home;