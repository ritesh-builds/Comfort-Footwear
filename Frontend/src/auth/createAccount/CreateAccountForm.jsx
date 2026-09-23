import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import axiosInstance from "../../api/axiosInstance";

function CreateAccountForm({ onSwitch }) {
  const { darkMode } = useTheme();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (evt) => {
    evt.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setLoading(true);
    setMessage("");

    const signupData = {
      username,
      email,
      password,
    };

    try {
      const response = await axiosInstance.post(
        "/api/user/register",
        signupData
      );

      console.log("Server Response:", response.data);
      setMessage(response.data.message);

      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      
    } catch (error) {
      console.log("Signup Error:", error);
      setMessage(error.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <section
      className={`min-h-screen pt-28 pb-16 px-4 sm:px-8 lg:px-[8%] flex items-center transition-all duration-300 relative
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
          max-w-[1150px]
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-[1fr_450px]
          gap-10
          lg:gap-[100px]
          items-center
        "
      >

        {/* BRAND */}
        <div>
          <span
            className={`
              text-[11px]
              sm:text-[12px]
              tracking-[4px]
              sm:tracking-[5px]
              uppercase
              font-medium
              ${
                darkMode
                  ? "text-[#666]"
                  : "text-[#777]"
              }
            `}
          >
            COMFORT FOOTWEAR
          </span>

          <h1
            className="
              text-[clamp(2.75rem,7vw,6.5rem)]
              leading-[0.85]
              font-normal
              tracking-[-3px]
              sm:tracking-[-5px]
              mt-4
              mb-6
            "
          >
            Step into
            <br />

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
              comfort.
            </strong>
          </h1>

          <p
            className={`
              max-w-[430px]
              text-[14px]
              sm:text-[15px]
              leading-[1.7]
              sm:leading-[1.8]
              ${
                darkMode
                  ? "text-[#777]"
                  : "text-[#666]"
              }
            `}
          >
            Your comfort is just one step away.
            Create an account and start your journey with us.
          </p>
        </div>


        {/* SIGNUP FORM */}
        <form onSubmit={handleSignup} className="w-full">
          <div
            className={`
              border
              rounded-[16px]
              p-6
              sm:p-[35px]
              transition-all
              duration-300
              w-full
              max-w-[480px]
              mx-auto

              ${
                darkMode
                  ? "bg-[#0d0d0d] border-[#222]"
                  : "bg-white border-[#ddd]"
              }
            `}
          >

            {/* TABS */}
            <div
              className={`
                grid
                grid-cols-2
                gap-[5px]
                border
                p-[5px]
                rounded-[8px]

                ${
                  darkMode
                    ? "bg-[#080808] border-[#1d1d1d]"
                    : "bg-[#f5f5f5] border-[#ddd]"
                }
              `}
            >

              <button
                type="button"
                onClick={onSwitch}
                className={`
                  border-none
                  py-[11px]
                  rounded-[6px]
                  cursor-pointer
                  text-[13px]
                  transition-all
                  duration-300

                  ${
                    darkMode
                      ? "bg-transparent text-[#666] hover:text-white"
                      : "bg-transparent text-[#888] hover:text-black"
                  }
                `}
              >
                Login
              </button>

              <button
                type="button"
                className={`
                  border-none
                  py-[11px]
                  rounded-[6px]
                  cursor-pointer
                  text-[13px]

                  ${
                    darkMode
                      ? "bg-[#1a1a1a] text-white"
                      : "bg-white text-black"
                  }
                `}
              >
                Sign Up
              </button>

            </div>


            {/* HEADING */}
            <div className="mt-[35px] mb-[28px]">

              <h2 className="text-[25px] font-normal mb-[8px]">
                Create account
              </h2>

              <p
                className={
                  darkMode
                    ? "text-[#666] text-[13px]"
                    : "text-[#777] text-[13px]"
                }
              >
                Create your account to get started.
              </p>

            </div>


            {/* FULL NAME */}
            <div className="mb-[18px]">

              <label
                className={`
                  block
                  text-[12px]
                  mb-[8px]
                  ${
                    darkMode
                      ? "text-[#888]"
                      : "text-[#666]"
                  }
                `}
              >
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                required
                className={`
                  w-full
                  box-border
                  border
                  rounded-[7px]
                  outline-none
                  text-[13px]
                  font-inherit
                  py-[14px]
                  px-[15px]
                  transition-all
                  duration-300

                  ${
                    darkMode
                      ? `
                        bg-[#080808]
                        border-[#242424]
                        text-white
                        placeholder:text-[#444]
                        focus:border-[#555]
                      `
                      : `
                        bg-[#f8f8f8]
                        border-[#ddd]
                        text-black
                        placeholder:text-[#999]
                        focus:border-[#999]
                      `
                  }
                `}
                value={username}
                onChange={(evt) => {
                  setUsername(evt.target.value);
                }}
              />

            </div>


            {/* EMAIL */}
            <div className="mb-[18px]">

              <label
                className={`
                  block
                  text-[12px]
                  mb-[8px]
                  ${
                    darkMode
                      ? "text-[#888]"
                      : "text-[#666]"
                  }
                `}
              >
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                required
                className={`
                  w-full
                  box-border
                  border
                  rounded-[7px]
                  outline-none
                  text-[13px]
                  font-inherit
                  py-[14px]
                  px-[15px]
                  transition-all
                  duration-300

                  ${
                    darkMode
                      ? `
                        bg-[#080808]
                        border-[#242424]
                        text-white
                        placeholder:text-[#444]
                        focus:border-[#555]
                      `
                      : `
                        bg-[#f8f8f8]
                        border-[#ddd]
                        text-black
                        placeholder:text-[#999]
                        focus:border-[#999]
                      `
                  }
                `}
                value={email}
                onChange={(evt) => {
                  setEmail(evt.target.value);
                }}
              />

            </div>


            {/* PASSWORD */}
            <div className="mb-[18px]">

              <label
                className={`
                  block
                  text-[12px]
                  mb-[8px]
                  ${
                    darkMode
                      ? "text-[#888]"
                      : "text-[#666]"
                  }
                `}
              >
                Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                required
                className={`
                  w-full
                  box-border
                  border
                  rounded-[7px]
                  outline-none
                  text-[13px]
                  font-inherit
                  py-[14px]
                  px-[15px]
                  transition-all
                  duration-300

                  ${
                    darkMode
                      ? `
                        bg-[#080808]
                        border-[#242424]
                        text-white
                        placeholder:text-[#444]
                        focus:border-[#555]
                      `
                      : `
                        bg-[#f8f8f8]
                        border-[#ddd]
                        text-black
                        placeholder:text-[#999]
                        focus:border-[#999]
                      `
                  }
                `}
                value={password}
                onChange={(evt) => {
                  setPassword(evt.target.value);
                }}
              />

            </div>


            {/* CONFIRM PASSWORD */}
            <div className="mb-[18px]">

              <label
                className={`
                  block
                  text-[12px]
                  mb-[8px]
                  ${
                    darkMode
                      ? "text-[#888]"
                      : "text-[#666]"
                  }
                `}
              >
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                required
                className={`
                  w-full
                  box-border
                  border
                  rounded-[7px]
                  outline-none
                  text-[13px]
                  font-inherit
                  py-[14px]
                  px-[15px]
                  transition-all
                  duration-300

                  ${
                    darkMode
                      ? `
                        bg-[#080808]
                        border-[#242424]
                        text-white
                        placeholder:text-[#444]
                        focus:border-[#555]
                      `
                      : `
                        bg-[#f8f8f8]
                        border-[#ddd]
                        text-black
                        placeholder:text-[#999]
                        focus:border-[#999]
                      `
                  }
                `}
                value={confirmPassword}
                onChange={(evt) => {
                  setConfirmPassword(evt.target.value);
                }}
              />

            </div>

            {message && (
              <p className="text-green-500 text-[13px] mb-[15px]">
                {message}
              </p>
            )}    

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className={`
                w-full
                py-[15px]
                border
                rounded-[8px]
                cursor-pointer
                text-[13px]
                font-medium
                flex
                items-center
                justify-center
                gap-2
                transition-all
                duration-300
                ${loading ? "opacity-75 cursor-not-allowed" : ""}

                ${
                  darkMode
                    ? `
                      border-white
                      bg-white
                      text-black
                      hover:bg-transparent
                      hover:text-white
                    `
                    : `
                      border-black
                      bg-black
                      text-white
                      hover:bg-transparent
                      hover:text-black
                    `
                }
              `}
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Creating Account...</span>
                </>
              ) : (
                <span>Create Account →</span>
              )}
            </button>


            {/* SWITCH */}
            <div
              className={`
                flex
                justify-center
                gap-[5px]
                mt-[25px]
                text-[12px]

                ${
                  darkMode
                    ? "text-[#555]"
                    : "text-[#888]"
                }
              `}
            >

              <span>
                Already have an account?
              </span>

              <button
                type="button"
                onClick={onSwitch}
                className={`
                  border-none
                  bg-transparent
                  cursor-pointer
                  transition-colors
                  duration-300

                  ${
                    darkMode
                      ? "text-[#aaa] hover:text-white"
                      : "text-[#666] hover:text-black"
                  }
                `}
              >
                Login
              </button>

            </div>

          </div>
        </form>

      </div>
    </section>
  );
}

export default CreateAccountForm;