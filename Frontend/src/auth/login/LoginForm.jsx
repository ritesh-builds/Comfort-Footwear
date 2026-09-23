import React, { useContext, useState } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import axiosInstance, { API_BASE_URL } from "../../api/axiosInstance.js";
import { AuthContext } from "../../context/AuthContext.jsx";

function LoginForm({ onSwitch }) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Modal State
  const [showNoAccountModal, setShowNoAccountModal] = useState(false);
  const [noAccountEmail, setNoAccountEmail] = useState("");
  
  const { darkMode } = useTheme();
  const { setAccessToken, setRefreshToken } = useContext(AuthContext);

  const handleLogin = async (evt) => {
    evt.preventDefault();
    setMessage("");
    setLoading(true);

    const loginData = {
      email,
      password,
    };

    try {
      const response = await axiosInstance.post(
        "/auth/login",
        loginData
      );

      setMessage(response.data.message);

      localStorage.setItem(
        "accessToken",
        response.data.accessToken
      );

      setAccessToken(response.data.accessToken);

      localStorage.setItem(
        "refreshToken",
        response.data.refreshToken
      );

      setRefreshToken(response.data.refreshToken);

      setEmail("");
      setPassword("");

    } catch (error) {
      console.log("Login error:", error);
      const status = error.response?.status;
      const errMsg = error.response?.data?.message || "";

      if (status === 404 || errMsg.toLowerCase().includes("no account") || errMsg.toLowerCase().includes("not found")) {
        setNoAccountEmail(email);
        setShowNoAccountModal(true);
      } else {
        setMessage(errMsg || "Login failed. Please check your credentials.");
      }
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
            Sign in to continue your journey with us.
          </p>
        </div>


        {/* LOGIN FORM */}
        <form onSubmit={handleLogin} className="w-full">
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
                className={` border-none py-[11px] rounded-[6px] cursor-pointer text-[13px] transition-all duration-300 bg-white text-black`}>
                Login
              </button>

              <button
                type="button"
                onClick={onSwitch}
                className={`border-none py-[11px] rounded-[6px] cursor-pointer text-[13px] transition-all duration-300

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
            <div className="mt-8.75 mb-7">

              <h2 className="text-[25px] font-normal mb-2">
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
            <div className="mb-4.5">

              <label
                className={`
                  block
                  text-[12px]
                  mb-2
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
                  py-3.5
                  px-3.75
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
            <div className="mb-4.5">

              <label
                className={`
                  block
                  text-[12px]
                  mb-2
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
                  py-3.5
                  px-3.75
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
            <div className="text-right -mt-1.25 mb-5">

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
              <p className={`text-[13px] mb-[15px] ${message.toLowerCase().includes("success") ? "text-green-500" : "text-red-500"}`}>
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
                  <span>Logging in...</span>
                </>
              ) : (
                <span>Login →</span>
              )}
            </button>
            
            {/* GOOGLE LOGIN */}
            <div className="mt-4">
              <button
                type="button"
                onClick={() =>
                  window.location.href =
                    `${API_BASE_URL}/oauth2/authorization/google`
                }
                className={`w-full py-[15px] border rounded-[8px] cursor-pointer text-[13px] transition-all duration-300 ${
                  darkMode
                    ? "border-[#333] bg-[#111] text-white hover:bg-[#1a1a1a]"
                    : "border-[#ddd] bg-white text-black hover:bg-[#f5f5f5]"
                }`}
                >
                  Continue with Google
                </button>
            </div>

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

      {/* NO ACCOUNT MODAL */}
      {showNoAccountModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div
            className={`w-full max-w-md p-6 rounded-2xl border shadow-2xl transition-all duration-300 ${
              darkMode
                ? "bg-[#121212] border-[#2a2a2a] text-white"
                : "bg-white border-[#e5e5e5] text-black"
            }`}
          >
            {/* Modal Icon */}
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-amber-500/10 text-amber-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-center mb-2">
              Account Not Found
            </h3>

            <p className={`text-sm text-center mb-6 leading-relaxed ${darkMode ? "text-[#999]" : "text-[#666]"}`}>
              No account is registered under <strong className={darkMode ? "text-white" : "text-black"}>{noAccountEmail}</strong>. Would you like to create a new account now?
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  setShowNoAccountModal(false);
                  onSwitch();
                }}
                className={`flex-1 py-3 px-4 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer ${
                  darkMode
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                Create Account →
              </button>

              <button
                type="button"
                onClick={() => setShowNoAccountModal(false)}
                className={`flex-1 py-3 px-4 rounded-xl font-medium text-sm border transition-all duration-200 cursor-pointer ${
                  darkMode
                    ? "border-[#333] text-gray-300 hover:bg-[#1f1f1f]"
                    : "border-[#ddd] text-gray-700 hover:bg-gray-100"
                }`}
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default LoginForm;