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
        relative
        overflow-hidden
        transition-all
        duration-300

        ${
          darkMode
            ? "bg-[#080808] text-white"
            : "bg-gradient-to-br from-[#f0f4f9] via-[#e5ecf5] to-[#f4f7fb] text-black"
        }
      `}
    >
      {/* AMBIENT BACKGROUND GLOW ORBS */}
      <div className="glass-orb w-[540px] h-[540px] -top-20 -right-20 opacity-80 dark:opacity-20 bg-gradient-to-br from-violet-500/45 via-indigo-500/35 to-teal-500/35 blur-[95px]" />
      <div className="glass-orb w-[480px] h-[480px] bottom-10 -left-20 opacity-75 dark:opacity-15 bg-gradient-to-tr from-pink-500/40 via-rose-500/35 to-amber-500/35 blur-[100px]" />

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
          relative
          z-10
        "
      >
        {/* LEFT SIDE */}
        <div className="max-w-[650px]">

          <span
            className={
              darkMode
                ? "glass-badge glass-badge-dark mb-4"
                : "glass-badge glass-badge-light mb-4"
            }
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
                  ? "bg-gradient-to-r from-neutral-400 to-white bg-clip-text text-transparent font-medium"
                  : "bg-gradient-to-r from-neutral-500 to-black bg-clip-text text-transparent font-medium"
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
                  ? "text-[#aaa]"
                  : "text-[#555]"
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
                  ? "text-[#aaa]"
                  : "text-[#555]"
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
                px-7
                py-3.5
                rounded-full
                cursor-pointer
                text-[14px]
                font-medium
                transition-all
                duration-300

                ${
                  darkMode
                    ? "glass-btn-dark hover:bg-white hover:text-black"
                    : "glass-btn-light hover:bg-black hover:text-white"
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
              rounded-2xl
              transition-all
              duration-300

              ${
                darkMode
                  ? "glass-card-dark"
                  : "glass-card-light"
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
              rounded-2xl
              transition-all
              duration-300

              ${
                darkMode
                  ? "glass-card-dark"
                  : "glass-card-light"
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
                    ? "text-[#aaa]"
                    : "text-[#666]"
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
                    ? "text-[#aaa]"
                    : "text-[#555]"
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
              rounded-2xl
              transition-all
              duration-300

              ${
                darkMode
                  ? "glass-card-dark"
                  : "glass-card-light"
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
                    ? "text-[#aaa]"
                    : "text-[#666]"
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
                    ? "text-[#aaa]"
                    : "text-[#555]"
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
