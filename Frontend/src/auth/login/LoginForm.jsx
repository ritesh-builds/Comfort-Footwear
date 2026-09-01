import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import axios from "axios";
import axiosInstance from "../../api/axiosInstance.js";

function LoginForm({ onSwitch }) {
  const { darkMode } = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("")

  const handleLogin = async (evt) => {
    evt.preventDefault();

    const loginData = {
      email,
      password,
    };

    console.log("Login Data:", loginData);

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/login",
        loginData
      );

      console.log("Server response: ", response.data);

      setMessage(response.data.message);

      localStorage.setItem(
        "accessToken",
        response.data.accessToken
      );

      localStorage.setItem(
      "refreshToken",
      response.data.refreshToken
      );

      setEmail("");
      setPassword("");

    } catch (error) {
      console.log("Login error: ", error);
    }
    
  };

  return (
    <section
      className={`min-h-screen px-[8%] py-[80px] flex items-center transition-all duration-300 max-[850px]:px-[25px] max-[850px]:py-[60px]
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
          grid-cols-[1fr_450px]
          gap-[100px]
          items-center
          max-[850px]:grid-cols-1
          max-[850px]:gap-[50px]
        "
      >

        {/* BRAND */}
        <div>
          <span
            className={`
              text-[11px]
              tracking-[5px]
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
              text-[clamp(4rem,7vw,7rem)]
              leading-[0.85]
              font-normal
              tracking-[-5px]
              mt-[25px]
              mb-[30px]
              max-[850px]:text-[4.5rem]
              max-[850px]:tracking-[-3px]
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
              leading-[1.8]
              ${
                darkMode
                  ? "text-[#777]"
                  : "text-[#666]"
              }
            `}
          >
            Your comfort is just one step away.
            Sign in to continue your journey with us.
          </p>
        </div>


        {/* LOGIN FORM */}
        <form onSubmit={handleLogin}>
          <div
            className={`
              border
              rounded-[16px]
              p-[35px]
              transition-all
              duration-300
              max-[850px]:max-w-[500px]
              max-[850px]:w-full
              max-[850px]:mx-auto

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
                className={`
                  border-none
                  py-[11px]
                  rounded-[6px]
                  cursor-pointer
                  text-[13px]
                  transition-all
                  duration-300
                  bg-white
                  text-black
                `}
              >
                Login
              </button>

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
                Sign Up
              </button>

            </div>


            {/* HEADING */}
            <div className="mt-[35px] mb-[28px]">

              <h2 className="text-[25px] font-normal mb-[8px]">
                Welcome back
              </h2>

              <p
                className={
                  darkMode
                    ? "text-[#666] text-[13px]"
                    : "text-[#777] text-[13px]"
                }
              >
                Enter your details to continue.
              </p>

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


            {/* FORGOT PASSWORD */}
            <div className="text-right mt-[-5px] mb-[20px]">

              <button
                type="button"
                className={`
                  border-none
                  bg-transparent
                  cursor-pointer
                  text-[12px]
                  transition-colors
                  duration-300

                  ${
                    darkMode
                      ? "text-[#777] hover:text-white"
                      : "text-[#777] hover:text-black"
                  }
                `}
              >
                Forgot password?
              </button>

            </div>
            
             {message && (
              <p className="text-green-500 text-[13px] mb-[15px]">
                {message}
              </p>
            )} 

            {/* SUBMIT */}
            <button
              type="submit"
              className={`
                w-full
                py-[15px]
                border
                rounded-[8px]
                cursor-pointer
                text-[13px]
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
              Login →
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
                Don't have an account?
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
                Sign Up
              </button>

            </div>

          </div>
        </form>

      </div>
    </section>
  );
}

export default LoginForm;