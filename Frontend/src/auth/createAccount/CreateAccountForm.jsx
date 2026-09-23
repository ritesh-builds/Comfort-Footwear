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
      className={`min-h-screen pt-28 pb-16 px-4 sm:px-8 lg:px-[8%] flex items-center transition-all duration-300 relative overflow-hidden
        ${
          darkMode
            ? "bg-[#080808] text-white"
            : "bg-gradient-to-br from-[#f0f4f9] via-[#e5ecf5] to-[#f4f7fb] text-black"
        }
      `}
    >
      {/* AMBIENT BACKGROUND GLOW ORBS */}
      <div className="glass-orb w-[580px] h-[580px] -top-20 -right-20 opacity-80 dark:opacity-20 bg-gradient-to-br from-indigo-500/45 via-purple-500/35 to-pink-500/35 blur-[95px]" />
      <div className="glass-orb w-[480px] h-[480px] -bottom-20 -left-20 opacity-75 dark:opacity-15 bg-gradient-to-tr from-teal-500/40 via-emerald-500/35 to-cyan-500/35 blur-[100px]" />

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
          relative
          z-10
        "
      >

        {/* BRAND */}
        <div>
          <span
            className={`
              glass-badge mb-3
              ${
                darkMode
                  ? "glass-badge-dark"
                  : "glass-badge-light"
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
              className={
                darkMode
                  ? "bg-gradient-to-r from-neutral-400 to-white bg-clip-text text-transparent font-normal"
                  : "bg-gradient-to-r from-neutral-500 to-black bg-clip-text text-transparent font-normal"
              }
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
                  ? "text-[#aaa]"
                  : "text-[#555]"
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
              rounded-3xl
              p-6
              sm:p-8
              transition-all
              duration-300
              w-full
              max-w-[480px]
              mx-auto

              ${
                darkMode
                  ? "glass-panel-dark"
                  : "glass-panel-light"
              }
            `}
          >

            {/* TABS */}
            <div
              className={`
                grid
                grid-cols-2
                gap-1.5
                p-1.5
                rounded-2xl
                border

                ${
                  darkMode
                    ? "bg-black/40 border-white/10"
                    : "bg-white/50 border-black/10"
                }
              `}
            >

              <button
                type="button"
                onClick={onSwitch}
                className={`border-none py-2.5 rounded-xl cursor-pointer text-xs font-medium transition-all duration-300 ${
                  darkMode
                    ? "text-[#aaa] hover:text-white hover:bg-white/10"
                    : "text-[#555] hover:text-black hover:bg-black/5"
                }`}
              >
                Login
              </button>

              <button
                type="button"
                className={`border-none py-2.5 rounded-xl cursor-pointer text-xs font-semibold transition-all duration-300 ${
                  darkMode ? "bg-white text-black shadow-md" : "bg-black text-white shadow-md"
                }`}
              >
                Sign Up
              </button>

            </div>


            {/* HEADING */}
            <div className="mt-7 mb-6">

              <h2 className="text-2xl font-semibold tracking-tight mb-1">
                Create account
              </h2>

              <p
                className={
                  darkMode
                    ? "text-[#aaa] text-xs"
                    : "text-[#555] text-xs"
                }
              >
                Create your account to get started.
              </p>

            </div>


            {/* FULL NAME */}
            <div className="mb-4">

              <label
                className={`
                  block
                  text-xs
                  font-medium
                  mb-2
                  ${
                    darkMode
                      ? "text-[#aaa]"
                      : "text-[#555]"
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
                  rounded-xl
                  outline-none
                  text-sm
                  font-inherit
                  py-3.5
                  px-4
                  transition-all
                  duration-300

                  ${
                    darkMode
                      ? "glass-input-dark"
                      : "glass-input-light"
                  }
                `}
                value={username}
                onChange={(evt) => {
                  setUsername(evt.target.value);
                }}
              />

            </div>


            {/* EMAIL */}
            <div className="mb-4">

              <label
                className={`
                  block
                  text-xs
                  font-medium
                  mb-2
                  ${
                    darkMode
                      ? "text-[#aaa]"
                      : "text-[#555]"
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
                  rounded-xl
                  outline-none
                  text-sm
                  font-inherit
                  py-3.5
                  px-4
                  transition-all
                  duration-300

                  ${
                    darkMode
                      ? "glass-input-dark"
                      : "glass-input-light"
                  }
                `}
                value={email}
                onChange={(evt) => {
                  setEmail(evt.target.value);
                }}
              />

            </div>


            {/* PASSWORD */}
            <div className="mb-4">

              <label
                className={`
                  block
                  text-xs
                  font-medium
                  mb-2
                  ${
                    darkMode
                      ? "text-[#aaa]"
                      : "text-[#555]"
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
                  rounded-xl
                  outline-none
                  text-sm
                  font-inherit
                  py-3.5
                  px-4
                  transition-all
                  duration-300

                  ${
                    darkMode
                      ? "glass-input-dark"
                      : "glass-input-light"
                  }
                `}
                value={password}
                onChange={(evt) => {
                  setPassword(evt.target.value);
                }}
              />

            </div>


            {/* CONFIRM PASSWORD */}
            <div className="mb-5">

              <label
                className={`
                  block
                  text-xs
                  font-medium
                  mb-2
                  ${
                    darkMode
                      ? "text-[#aaa]"
                      : "text-[#555]"
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
                  rounded-xl
                  outline-none
                  text-sm
                  font-inherit
                  py-3.5
                  px-4
                  transition-all
                  duration-300

                  ${
                    darkMode
                      ? "glass-input-dark"
                      : "glass-input-light"
                  }
                `}
                value={confirmPassword}
                onChange={(evt) => {
                  setConfirmPassword(evt.target.value);
                }}
              />

            </div>

            {message && (
              <p className={`text-xs mb-4 p-3 rounded-xl border ${message.toLowerCase().includes("success") ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : "bg-rose-500/10 text-rose-400 border-rose-500/20"}`}>
                {message}
              </p>
            )}    

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className={`
                w-full
                py-3.5
                rounded-full
                cursor-pointer
                text-xs
                font-semibold
                uppercase
                tracking-wider
                flex
                items-center
                justify-center
                gap-2
                transition-all
                duration-300
                shadow-lg
                ${loading ? "opacity-75 cursor-not-allowed" : ""}

                ${
                  darkMode
                    ? "bg-white text-black hover:bg-neutral-200"
                    : "bg-black text-white hover:bg-neutral-800"
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