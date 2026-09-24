import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";
import { AuthContext } from "../context/AuthContext.jsx";
import axiosInstance from "../api/axiosInstance.js";

function OAuth2Success() {
    const navigate = useNavigate();
    const { darkMode } = useTheme();
    const { setAccessToken, setRefreshToken, setUserProfile } = useContext(AuthContext);
    const [status, setStatus] = useState("processing"); // 'processing' | 'success' | 'error'

    useEffect(() => {
      let isMounted = true;

      const handleOAuthFlow = async () => {
        try {
          const hash = window.location.hash;
          const params = new URLSearchParams(hash.startsWith("#") ? hash.substring(1) : hash);
          const accessToken = params.get("accessToken");
          const refreshToken = params.get("refreshToken");

          if (!accessToken) {
            console.error("OAuth error: No accessToken found in hash redirect");
            if (isMounted) setStatus("error");
            setTimeout(() => navigate("/login"), 2000);
            return;
          }

          // 1. Store tokens
          localStorage.setItem("accessToken", accessToken);
          setAccessToken(accessToken);

          if (refreshToken) {
            localStorage.setItem("refreshToken", refreshToken);
            setRefreshToken(refreshToken);
          }

          // 2. Clear old cached profile to prevent stale state
          sessionStorage.removeItem("user_profile");
          if (setUserProfile) setUserProfile(null);

          // 3. Fetch fresh user profile from backend using the new token
          try {
            const response = await axiosInstance.get("/api/user/profile", {
              headers: { Authorization: `Bearer ${accessToken}` }
            });
            if (isMounted && response.data) {
              sessionStorage.setItem("user_profile", JSON.stringify(response.data));
              if (setUserProfile) setUserProfile(response.data);
            }
          } catch (profileErr) {
            console.warn("Could not fetch user profile immediately, fallback will retry:", profileErr);
          }

          if (isMounted) setStatus("success");

          setTimeout(() => {
            if (isMounted) navigate("/");
          }, 1000);
        } catch (err) {
          console.error("Error during OAuth callback processing:", err);
          if (isMounted) setStatus("error");
          setTimeout(() => navigate("/login"), 2000);
        }
      };

      handleOAuthFlow();

      return () => {
        isMounted = false;
      };
    }, [navigate, setAccessToken, setRefreshToken, setUserProfile]);

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 transition-all duration-300 relative overflow-hidden ${
        darkMode ? "bg-[#080808] text-white" : "bg-[#fafafa] text-black"
      }`}
    >
      {/* AMBIENT GLOW ORBS */}
      <div className="glass-orb w-[450px] h-[450px] -top-20 -right-20 opacity-30 dark:opacity-20 bg-gradient-to-br from-indigo-200/35 via-violet-200/25 to-emerald-200/25 blur-[120px]" />

      <div
        className={`w-full max-w-md p-8 rounded-3xl text-center border shadow-2xl transition-all duration-300 relative z-10 ${
          darkMode ? "glass-panel-dark" : "glass-panel-light"
        }`}
      >
        {status === "processing" && (
          <div className="py-6">
            <div
              className={`w-14 h-14 mx-auto mb-5 rounded-2xl flex items-center justify-center border-2 border-t-transparent animate-spin ${
                darkMode ? "border-white" : "border-black"
              }`}
            />
            <h2 className="text-xl font-semibold mb-2">Authenticating with Google...</h2>
            <p className={`text-xs ${darkMode ? "text-[#aaa]" : "text-[#666]"}`}>
              Finalizing your secure session with Comfort Footwear.
            </p>
          </div>
        )}

        {status === "success" && (
          <div className="py-6 animate-fade-in">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center text-3xl shadow-lg">
              ✓
            </div>
            <h2 className="text-2xl font-bold mb-2">Login Successful!</h2>
            <p className={`text-xs ${darkMode ? "text-[#aaa]" : "text-[#666]"}`}>
              Redirecting you to home step into comfort...
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="py-6 animate-fade-in">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-rose-500/10 text-rose-500 border border-rose-500/20 flex items-center justify-center text-3xl shadow-lg">
              ✕
            </div>
            <h2 className="text-2xl font-bold mb-2">Authentication Failed</h2>
            <p className={`text-xs ${darkMode ? "text-[#aaa]" : "text-[#666]"}`}>
              Could not complete Google login. Redirecting back to login screen...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default OAuth2Success;