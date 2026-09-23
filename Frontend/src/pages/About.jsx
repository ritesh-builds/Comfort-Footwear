import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

function About() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`
        min-h-screen
        pt-28
        pb-16
        px-5
        sm:px-8
        lg:px-[8%]
        flex
        items-center
        transition-all
        duration-300

        ${
          darkMode
            ? "bg-[#080808] text-white"
            : "bg-[#f5f5f5] text-black"
        }
      `}
    >
      <div
        className="
          w-full
          max-w-[1250px]
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-[1.2fr_0.8fr]
          gap-10
          lg:gap-16
          items-center
        "
      >
        {/* LEFT SIDE */}
        <div className="max-w-[650px]">

          <span
            className={`
              inline-block
              text-[11px]
              sm:text-[12px]
              tracking-[4px]
              uppercase
              font-medium
              mb-4
              ${
                darkMode
                  ? "text-[#888]"
                  : "text-[#777]"
              }
            `}
          >
            ABOUT US
          </span>

          <h1
            className="
              text-[clamp(2.5rem,6vw,6rem)]
              leading-[0.95]
              font-medium
              tracking-[-2px]
              sm:tracking-[-4px]
              m-0
              mb-6
            "
          >
            Comfort that moves{" "}
            <span
              className={
                darkMode
                  ? "text-[#777]"
                  : "text-[#888]"
              }
            >
              with you.
            </span>
          </h1>

          <p
            className={`
              text-[15px]
              sm:text-[16px]
              leading-[1.8]
              mb-4
              ${
                darkMode
                  ? "text-[#999]"
                  : "text-[#666]"
              }
            `}
          >
            We believe great footwear should feel as good as it looks.
            Our shoes are designed with a focus on everyday comfort,
            timeless style, and quality you can rely on.
          </p>

          <p
            className={`
              text-[15px]
              sm:text-[16px]
              leading-[1.8]
              mb-6
              ${
                darkMode
                  ? "text-[#999]"
                  : "text-[#666]"
              }
            `}
          >
            From your morning walk to your everyday adventures,
            Comfort Footwear is made to keep you moving effortlessly.
          </p>

          {/* BUTTON */}
          <Link to="/our-story" className="no-underline inline-block">
            <button
              className={`
                px-6
                py-3.5
                rounded-[30px]
                cursor-pointer
                text-[14px]
                font-medium
                border
                transition-all
                duration-300

                ${
                  darkMode
                    ? `
                      border-[#444]
                      bg-transparent
                      text-white
                      hover:bg-white
                      hover:text-black
                      hover:border-white
                    `
                    : `
                      border-[#aaa]
                      bg-transparent
                      text-black
                      hover:bg-black
                      hover:text-white
                      hover:border-black
                    `
                }
              `}
            >
              Discover Our Story →
            </button>
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-4">

          {/* CARD 01 */}
          <div
            className={`
              p-6
              sm:p-7
              border
              rounded-[14px]
              transition-all
              duration-300
              hover:-translate-x-1
              sm:hover:-translate-x-2

              ${
                darkMode
                  ? `
                    border-[#222]
                    bg-[#0e0e0e]
                    hover:border-[#444]
                    hover:bg-[#121212]
                  `
                  : `
                    border-[#ddd]
                    bg-white
                    hover:border-[#bbb]
                    hover:bg-[#fafafa]
                  `
              }
            `}
          >
            <h2
              className={`
                text-[12px]
                font-medium
                m-0
                mb-3
                ${
                  darkMode
                    ? "text-[#666]"
                    : "text-[#999]"
                }
              `}
            >
              01
            </h2>

            <h3 className="text-[18px] sm:text-[20px] font-medium m-0 mb-2">
              Designed for Comfort
            </h3>

            <p
              className={`
                leading-[1.6]
                text-[14px]
                m-0
                ${
                  darkMode
                    ? "text-[#777]"
                    : "text-[#666]"
                }
              `}
            >
              Thoughtful designs made to keep your feet comfortable all day.
            </p>
          </div>

          {/* CARD 02 */}
          <div
            className={`
              p-6
              sm:p-7
              border
              rounded-[14px]
              transition-all
              duration-300
              hover:-translate-x-1
              sm:hover:-translate-x-2

              ${
                darkMode
                  ? `
                    border-[#222]
                    bg-[#0e0e0e]
                    hover:border-[#444]
                    hover:bg-[#121212]
                  `
                  : `
                    border-[#ddd]
                    bg-white
                    hover:border-[#bbb]
                    hover:bg-[#fafafa]
                  `
              }
            `}
          >
            <h2
              className={`
                text-[12px]
                font-medium
                m-0
                mb-3
                ${
                  darkMode
                    ? "text-[#666]"
                    : "text-[#999]"
                }
              `}
            >
              02
            </h2>

            <h3 className="text-[18px] sm:text-[20px] font-medium m-0 mb-2">
              Made for Everyday
            </h3>

            <p
              className={`
                leading-[1.6]
                text-[14px]
                m-0
                ${
                  darkMode
                    ? "text-[#777]"
                    : "text-[#666]"
                }
              `}
            >
              Versatile footwear that fits naturally into your daily life.
            </p>
          </div>

          {/* CARD 03 */}
          <div
            className={`
              p-6
              sm:p-7
              border
              rounded-[14px]
              transition-all
              duration-300
              hover:-translate-x-1
              sm:hover:-translate-x-2

              ${
                darkMode
                  ? `
                    border-[#222]
                    bg-[#0e0e0e]
                    hover:border-[#444]
                    hover:bg-[#121212]
                  `
                  : `
                    border-[#ddd]
                    bg-white
                    hover:border-[#bbb]
                    hover:bg-[#fafafa]
                  `
              }
            `}
          >
            <h2
              className={`
                text-[12px]
                font-medium
                m-0
                mb-3
                ${
                  darkMode
                    ? "text-[#666]"
                    : "text-[#999]"
                }
              `}
            >
              03
            </h2>

            <h3 className="text-[18px] sm:text-[20px] font-medium m-0 mb-2">
              Style Meets Quality
            </h3>

            <p
              className={`
                leading-[1.6]
                text-[14px]
                m-0
                ${
                  darkMode
                    ? "text-[#777]"
                    : "text-[#666]"
                }
              `}
            >
              Modern aesthetics combined with dependable craftsmanship.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
