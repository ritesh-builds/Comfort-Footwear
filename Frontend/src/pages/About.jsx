import React from "react";
import { useTheme } from "../context/ThemeContext";

function About() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`
        min-h-screen
        px-[8%]
        py-25
        flex
        items-center
        transition-all
        duration-300
        max-[800px]:px-6.25
        max-[800px]:py-17.5

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
          max-w-312.5
          mx-auto
          grid
          grid-cols-[1.2fr_0.8fr]
          gap-25
          items-center
          max-[800px]:grid-cols-1
          max-[800px]:gap-15
        "
      >
        {/* LEFT SIDE */}
        <div className="max-w-162.5">

          <span
            className={`
              inline-block
              text-[12px]
              tracking-[4px]
              mb-6.25
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
              text-[clamp(3rem,6vw,6rem)]
              leading-[0.95]
              font-medium
              tracking-[-4px]
              m-0
              mb-8.75
              max-[800px]:tracking-[-2px]
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
              text-[16px]
              leading-[1.8]
              max-w-145
              mb-4.5
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
              text-[16px]
              leading-[1.8]
              max-w-145
              mb-4.5
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
          <button
            className={`
              mt-5
              px-6
              py-3.5
              rounded-[30px]
              cursor-pointer
              text-[14px]
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
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-4.5">

          {/* CARD 01 */}
          <div
            className={`
              p-7
              border
              rounded-[14px]
              transition-all
              duration-300
              hover:-translate-x-2

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
                text-[13px]
                font-normal
                m-0
                mb-5
                ${
                  darkMode
                    ? "text-[#666]"
                    : "text-[#999]"
                }
              `}
            >
              01
            </h2>

            <h3 className="text-[20px] font-medium m-0 mb-2.5">
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
              p-7
              border
              rounded-[14px]
              transition-all
              duration-300
              hover:-translate-x-2

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
                text-[13px]
                font-normal
                m-0
                mb-5
                ${
                  darkMode
                    ? "text-[#666]"
                    : "text-[#999]"
                }
              `}
            >
              02
            </h2>

            <h3 className="text-[20px] font-medium m-0 mb-2.5">
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
              p-7
              border
              rounded-[14px]
              transition-all
              duration-300
              hover:-translate-x-2

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
                text-[13px]
                font-normal
                m-0
                mb-5
                ${
                  darkMode
                    ? "text-[#666]"
                    : "text-[#999]"
                }
              `}
            >
              03
            </h2>

            <h3 className="text-[20px] font-medium m-0 mb-2.5">
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
