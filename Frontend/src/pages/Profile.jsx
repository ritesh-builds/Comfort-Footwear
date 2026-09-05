import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axiosInstance from "../api/axiosInstance";
import { useTheme } from "../context/ThemeContext";

const Profile = () => {
  const [user, setUser] = useState(null);

  const { accessToken } = useContext(AuthContext);
  const { darkMode } = useTheme();

  console.log("AccessToken from profile:", accessToken);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axiosInstance.get("/api/user/profile");

        setUser(response.data);

        console.log("Profile Response:", response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, []);

  if (!user) {
    return (
      <section
        className={`min-h-[calc(100vh-80px)] flex items-center justify-center ${
          darkMode
            ? "bg-[#080808] text-white"
            : "bg-[#f7f7f7] text-black"
        }`}
      >
        <div className="text-center">
          <div
            className={`w-10 h-10 mx-auto mb-4 rounded-full border-2 border-t-transparent animate-spin ${
              darkMode ? "border-white" : "border-black"
            }`}
          />

          <p
            className={`text-sm ${
              darkMode ? "text-[#777]" : "text-[#777]"
            }`}
          >
            Loading profile...
          </p>
        </div>
      </section>
    );
  }

  const initial = user.name?.charAt(0)?.toUpperCase() || "U";

  return (
    <section
      className={`min-h-[calc(100vh-80px)] px-6 py-14 md:px-10 lg:px-[8%] transition-all duration-300 ${
        darkMode
          ? "bg-[#080808] text-white"
          : "bg-[#f7f7f7] text-black"
      }`}
    >
      <div className="max-w-[1100px] mx-auto">

        {/* HEADER */}
        <div className="mb-10">
          <p
            className={`text-[11px] tracking-[4px] uppercase mb-3 ${
              darkMode ? "text-[#666]" : "text-[#888]"
            }`}
          >
            Account
          </p>

          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-[-3px] font-normal">
            My Profile<span className={darkMode ? "text-[#555]" : "text-[#aaa]"}>.</span>
          </h1>

          <p
            className={`mt-4 text-sm ${
              darkMode ? "text-[#666]" : "text-[#777]"
            }`}
          >
            Manage your account and personal information.
          </p>
        </div>

        {/* PROFILE CARD */}
        <div
          className={`rounded-3xl border overflow-hidden transition-all duration-300 ${
            darkMode
              ? "bg-[#101010] border-[#222]"
              : "bg-white border-[#e3e3e3]"
          }`}
        >

          {/* TOP PROFILE SECTION */}
          <div
            className={`p-7 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-7 border-b ${
              darkMode ? "border-[#222]" : "border-[#e8e8e8]"
            }`}
          >

            <div className="flex items-center gap-5">

              {/* AVATAR */}
              <div
                className={`w-19 h-19 rounded-full flex items-center justify-center text-[28px] font-medium shrink-0 ${
                  darkMode
                    ? "bg-white text-black"
                    : "bg-black text-white"
                }`}
              >
                {initial}
              </div>

              <div>
                <h2 className="text-[24px] md:text-[28px] font-normal tracking-[-1px]">
                  {user.name}
                </h2>

                <p
                  className={`mt-1 text-sm ${
                    darkMode ? "text-[#777]" : "text-[#777]"
                  }`}
                >
                  {user.email}
                </p>
              </div>

            </div>

            {/* PROVIDER BADGE */}
            <div
              className={`self-start md:self-auto px-4 py-2 rounded-full border text-[11px] uppercase tracking-[1.5px] ${
                darkMode
                  ? "border-[#333] text-[#999]"
                  : "border-[#ddd] text-[#666]"
              }`}
            >
              {user.provider || "Local Account"}
            </div>

          </div>

          {/* DETAILS */}
          <div className="p-7 md:p-10">

            <p
              className={`text-[11px] tracking-[3px] uppercase mb-6 ${
                darkMode ? "text-[#555]" : "text-[#999]"
              }`}
            >
              Account Details
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">

              {/* NAME */}
              <div
                className={`py-5 border-b ${
                  darkMode ? "border-[#222]" : "border-[#e8e8e8]"
                }`}
              >
                <p
                  className={`text-[11px] uppercase tracking-[1.5px] mb-2 ${
                    darkMode ? "text-[#555]" : "text-[#999]"
                  }`}
                >
                  Full Name
                </p>

                <p className="text-[15px]">
                  {user.name}
                </p>
              </div>

              {/* EMAIL */}
              <div
                className={`py-5 border-b ${
                  darkMode ? "border-[#222]" : "border-[#e8e8e8]"
                }`}
              >
                <p
                  className={`text-[11px] uppercase tracking-[1.5px] mb-2 ${
                    darkMode ? "text-[#555]" : "text-[#999]"
                  }`}
                >
                  Email Address
                </p>

                <p className="text-[15px] break-all">
                  {user.email}
                </p>
              </div>

              {/* USER ID */}
              <div
                className={`py-5 border-b ${
                  darkMode ? "border-[#222]" : "border-[#e8e8e8]"
                }`}
              >
                <p
                  className={`text-[11px] uppercase tracking-[1.5px] mb-2 ${
                    darkMode ? "text-[#555]" : "text-[#999]"
                  }`}
                >
                  User ID
                </p>

                <p className="text-[15px]">
                  #{user.internalUserId}
                </p>
              </div>

              {/* LOGIN METHOD */}
              <div
                className={`py-5 border-b ${
                  darkMode ? "border-[#222]" : "border-[#e8e8e8]"
                }`}
              >
                <p
                  className={`text-[11px] uppercase tracking-[1.5px] mb-2 ${
                    darkMode ? "text-[#555]" : "text-[#999]"
                  }`}
                >
                  Login Method
                </p>

                <p className="text-[15px] capitalize">
                  {user.provider || "Email & Password"}
                </p>
              </div>

            </div>

          </div>

          {/* FOOTER OF CARD */}
          <div
            className={`px-7 py-5 md:px-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 ${
              darkMode
                ? "bg-[#0c0c0c]"
                : "bg-[#fafafa]"
            }`}
          >
            <p
              className={`text-[12px] ${
                darkMode ? "text-[#555]" : "text-[#888]"
              }`}
            >
              Your account information is securely stored.
            </p>

            <span
              className={`text-[11px] uppercase tracking-[1.5px] ${
                darkMode ? "text-[#777]" : "text-[#777]"
              }`}
            >
              Comfort Footwear
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Profile;
