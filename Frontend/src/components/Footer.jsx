import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`
        px-[8%]
        pt-[80px]
        pb-[30px]
        transition-all
        duration-300

        ${
          darkMode
            ? "bg-[#080808] text-white"
            : "bg-[#f5f5f5] text-black"
        }
      `}
    >
      {/* TOP */}
      <div
        className="
          flex
          justify-between
          gap-[80px]
          max-[800px]:flex-col
          max-[800px]:gap-[50px]
        "
      >

        {/* BRAND */}
        <div>

          <h2
            className="
              text-[24px]
              font-medium
              tracking-[-1px]
              mb-[15px]
            "
          >
            Comfort Footwear.
          </h2>

          <p
            className={
              darkMode
                ? "text-[#777] text-[14px] leading-[1.8] m-0"
                : "text-[#666] text-[14px] leading-[1.8] m-0"
            }
          >
            Designed for comfort.
            <br />
            Made for every step.
          </p>

        </div>

        {/* LINKS */}
        <div
          className="
            grid
            grid-cols-3
            gap-[80px]
            max-[650px]:grid-cols-2
            max-[650px]:gap-[40px]
          "
        >

          {/* EXPLORE */}
          <div className="flex flex-col gap-[12px]">

            <span
              className={
                darkMode
                  ? "text-[#555] text-[11px] uppercase tracking-[2px] mb-[5px]"
                  : "text-[#888] text-[11px] uppercase tracking-[2px] mb-[5px]"
              }
            >
              Explore
            </span>

            <Link
              to="/"
              className={`
                no-underline
                text-[13px]
                transition-colors
                duration-300

                ${
                  darkMode
                    ? "text-[#888] hover:text-white"
                    : "text-[#666] hover:text-black"
                }
              `}
            >
              Home
            </Link>

            <Link
              to="/products"
              className={`
                no-underline
                text-[13px]
                transition-colors
                duration-300

                ${
                  darkMode
                    ? "text-[#888] hover:text-white"
                    : "text-[#666] hover:text-black"
                }
              `}
            >
              Products
            </Link>

            <Link
              to="/about"
              className={`
                no-underline
                text-[13px]
                transition-colors
                duration-300

                ${
                  darkMode
                    ? "text-[#888] hover:text-white"
                    : "text-[#666] hover:text-black"
                }
              `}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`
                no-underline
                text-[13px]
                transition-colors
                duration-300

                ${
                  darkMode
                    ? "text-[#888] hover:text-white"
                    : "text-[#666] hover:text-black"
                }
              `}
            >
              Contact
            </Link>

          </div>

          {/* FOLLOW */}
          <div className="flex flex-col gap-[12px]">

            <span
              className={
                darkMode
                  ? "text-[#555] text-[11px] uppercase tracking-[2px] mb-[5px]"
                  : "text-[#888] text-[11px] uppercase tracking-[2px] mb-[5px]"
              }
            >
              Follow
            </span>

            <a
              href="#"
              className={`
                no-underline
                text-[13px]
                transition-colors
                duration-300

                ${
                  darkMode
                    ? "text-[#888] hover:text-white"
                    : "text-[#666] hover:text-black"
                }
              `}
            >
              Instagram
            </a>

            <a
              href="#"
              className={`
                no-underline
                text-[13px]
                transition-colors
                duration-300

                ${
                  darkMode
                    ? "text-[#888] hover:text-white"
                    : "text-[#666] hover:text-black"
                }
              `}
            >
              Twitter
            </a>

            <a
              href="#"
              className={`
                no-underline
                text-[13px]
                transition-colors
                duration-300

                ${
                  darkMode
                    ? "text-[#888] hover:text-white"
                    : "text-[#666] hover:text-black"
                }
              `}
            >
              Facebook
            </a>

          </div>

          {/* CONTACT */}
          <div
            className="
              flex
              flex-col
              gap-3
              max-[650px]:col-span-2
            "
          >

            <span
              className={
                darkMode
                  ? "text-[#555] text-[11px] uppercase tracking-[2px] mb-1.25"
                  : "text-[#888] text-[11px] uppercase tracking-[2px] mb-1.25"
              }
            >
              Contact
            </span>

            <a
              href="mailto:hello@comfortfootwear.com"
              className={`
                no-underline
                text-[13px]
                transition-colors
                duration-300

                ${
                  darkMode
                    ? "text-[#888] hover:text-white"
                    : "text-[#666] hover:text-black"
                }
              `}
            >
              hello@comfortfootwear.com
            </a>

            <a
              href="tel:+919876543210"
              className={`
                no-underline
                text-[13px]
                transition-colors
                duration-300

                ${
                  darkMode
                    ? "text-[#888] hover:text-white"
                    : "text-[#666] hover:text-black"
                }
              `}
            >
              +91 98765 43210
            </a>

          </div>

        </div>
      </div>

      {/* LINE */}
      <div
        className={`
          h-px
          my-12.5
          ${
            darkMode
              ? "bg-[#222]"
              : "bg-[#ddd]"
          }
        `}
      />

      {/* BOTTOM */}
      <div
        className={`
          flex
          justify-between
          items-center
          text-[11px]
          max-[600px]:flex-col
          max-[600px]:items-start
          max-[600px]:gap-2.5

          ${
            darkMode
              ? "text-[#555]"
              : "text-[#888]"
          }
        `}
      >

        <p className="m-0">
          © 2026 Comfort Footwear. All rights reserved.
        </p>

        <p className="m-0">
          Made with comfort ♥
        </p>

      </div>

    </footer>
  );
};

export default Footer;
