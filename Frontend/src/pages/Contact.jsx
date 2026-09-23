import React from "react";
import { useTheme } from "../context/ThemeContext";

function Contact() {
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
      <div className="w-full max-w-[1250px] mx-auto">

        {/* HEADING */}
        <div className="mb-10 md:mb-16">

          <span
            className={`
              text-[11px]
              sm:text-[12px]
              tracking-[4px]
              uppercase
              font-medium
              ${
                darkMode
                  ? "text-[#777]"
                  : "text-[#777]"
              }
            `}
          >
            GET IN TOUCH
          </span>

          <h1
            className="
              text-[clamp(2.75rem,7vw,6.5rem)]
              leading-[0.9]
              font-normal
              tracking-[-3px]
              sm:tracking-[-5px]
              my-4
              sm:my-6
            "
          >
            Let's talk{" "}
            <br className="hidden sm:inline" />
            <strong
              className={`
                font-normal
                ${
                  darkMode
                    ? "text-[#666]"
                    : "text-[#888]"
                }
              `}
            >
              footwear.
            </strong>
          </h1>

          <p
            className={`
              max-w-[480px]
              leading-[1.7]
              text-[14px]
              sm:text-[15px]
              ${
                darkMode
                  ? "text-[#888]"
                  : "text-[#666]"
              }
            `}
          >
            Have a question, suggestion, or just want to say hello?
            We'd love to hear from you.
          </p>

        </div>

        {/* CONTENT */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[0.7fr_1.3fr]
            gap-10
            lg:gap-16
          "
        >

          {/* INFO */}
          <div className="flex flex-col gap-6 sm:gap-8">

            <div>
              <span
                className={`
                  block
                  text-[11px]
                  uppercase
                  tracking-[2px]
                  mb-1.5
                  font-medium
                  ${
                    darkMode
                      ? "text-[#555]"
                      : "text-[#888]"
                  }
                `}
              >
                Email
              </span>

              <p
                className={`
                  m-0
                  text-[15px]
                  font-medium
                  ${
                    darkMode
                      ? "text-[#ccc]"
                      : "text-[#333]"
                  }
                `}
              >
                hello@comfortfootwear.com
              </p>
            </div>

            <div>
              <span
                className={`
                  block
                  text-[11px]
                  uppercase
                  tracking-[2px]
                  mb-1.5
                  font-medium
                  ${
                    darkMode
                      ? "text-[#555]"
                      : "text-[#888]"
                  }
                `}
              >
                Phone
              </span>

              <p
                className={`
                  m-0
                  text-[15px]
                  font-medium
                  ${
                    darkMode
                      ? "text-[#ccc]"
                      : "text-[#333]"
                  }
                `}
              >
                +91 98765-43210
              </p>
            </div>

            <div>
              <span
                className={`
                  block
                  text-[11px]
                  uppercase
                  tracking-[2px]
                  mb-1.5
                  font-medium
                  ${
                    darkMode
                      ? "text-[#555]"
                      : "text-[#888]"
                  }
                `}
              >
                Location
              </span>

              <p
                className={`
                  m-0
                  text-[15px]
                  font-medium
                  ${
                    darkMode
                      ? "text-[#ccc]"
                      : "text-[#333]"
                  }
                `}
              >
                Karnal, Haryana, India
              </p>
            </div>

          </div>

          {/* FORM */}
          <form className="flex flex-col gap-4">

            {/* NAME + EMAIL */}
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-4
              "
            >

              <input
                type="text"
                placeholder="Your Name"
                className={`
                  w-full
                  border
                  px-4
                  py-3.5
                  text-[14px]
                  outline-none
                  rounded-xl
                  transition-all
                  duration-300
                  font-inherit

                  ${
                    darkMode
                      ? `
                        bg-[#0e0e0e]
                        border-[#222]
                        text-white
                        placeholder:text-[#555]
                        focus:border-[#555]
                        focus:bg-[#111]
                      `
                      : `
                        bg-white
                        border-[#ddd]
                        text-black
                        placeholder:text-[#999]
                        focus:border-[#999]
                        focus:bg-[#fafafa]
                      `
                  }
                `}
              />

              <input
                type="email"
                placeholder="Your Email"
                className={`
                  w-full
                  border
                  px-4
                  py-3.5
                  text-[14px]
                  outline-none
                  rounded-xl
                  transition-all
                  duration-300
                  font-inherit

                  ${
                    darkMode
                      ? `
                        bg-[#0e0e0e]
                        border-[#222]
                        text-white
                        placeholder:text-[#555]
                        focus:border-[#555]
                        focus:bg-[#111]
                      `
                      : `
                        bg-white
                        border-[#ddd]
                        text-black
                        placeholder:text-[#999]
                        focus:border-[#999]
                        focus:bg-[#fafafa]
                      `
                  }
                `}
              />

            </div>

            {/* SUBJECT */}
            <input
              type="text"
              placeholder="Subject"
              className={`
                w-full
                border
                px-4
                py-3.5
                text-[14px]
                outline-none
                rounded-xl
                transition-all
                duration-300
                font-inherit

                ${
                  darkMode
                    ? `
                      bg-[#0e0e0e]
                      border-[#222]
                      text-white
                      placeholder:text-[#555]
                      focus:border-[#555]
                      focus:bg-[#111]
                    `
                    : `
                      bg-white
                      border-[#ddd]
                      text-black
                      placeholder:text-[#999]
                      focus:border-[#999]
                      focus:bg-[#fafafa]
                    `
                }
              `}
            />

            {/* MESSAGE */}
            <textarea
              placeholder="Tell us something..."
              rows="5"
              className={`
                w-full
                border
                px-4
                py-3.5
                text-[14px]
                outline-none
                rounded-xl
                transition-all
                duration-300
                font-inherit
                resize-y

                ${
                  darkMode
                    ? `
                      bg-[#0e0e0e]
                      border-[#222]
                      text-white
                      placeholder:text-[#555]
                      focus:border-[#555]
                      focus:bg-[#111]
                    `
                    : `
                      bg-white
                      border-[#ddd]
                      text-black
                      placeholder:text-[#999]
                      focus:border-[#999]
                      focus:bg-[#fafafa]
                    `
                }
              `}
            ></textarea>

            {/* BUTTON */}
            <button
              type="submit"
              className={`
                self-start
                px-6
                py-3.5
                border
                rounded-[30px]
                text-[14px]
                font-medium
                cursor-pointer
                transition-all
                duration-300

                ${
                  darkMode
                    ? `
                      border-white
                      bg-white
                      text-black
                      hover:bg-transparent
                      hover:text-white
                      hover:border-[#666]
                    `
                    : `
                      border-black
                      bg-black
                      text-white
                      hover:bg-transparent
                      hover:text-black
                      hover:border-black
                    `
                }
              `}
            >
              Send Message →
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
