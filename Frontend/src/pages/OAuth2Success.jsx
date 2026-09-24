import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";
import { AuthContext } from "../context/AuthContext.jsx";

function OAuth2Success() {
    const navigate = useNavigate();
    const { darkMode } = useTheme();
    const { setAccessToken, setRefreshToken } = useContext(AuthContext);

    useEffect(() => {
      const hash = window.location.hash;
      const accessToken = new URLSearchParams(hash.substring(1)).get("accessToken");
      const refreshToken = new URLSearchParams(hash.substring(1)).get("refreshToken");

      if (accessToken) {
        setAccessToken(accessToken);
        localStorage.setItem("accessToken", accessToken);
      }
      if (refreshToken) {
        setRefreshToken(refreshToken);
        localStorage.setItem("refreshToken", refreshToken);
      }

      const timer = setTimeout(() => {
        navigate("/");
      }, 800);

      return () => clearTimeout(timer);
    }, [navigate, setAccessToken, setRefreshToken]);

  return (
    <div
        className={`
            min-h-screen flex items-center justify-center 
        ${ 
            darkMode
                ? "bg-[#080808] text-white"
                : "bg-[#f5f5f5] text-black"
        }
      `}
    >
      <h1 className="text-2xl">
        Google Login Successful ✅
      </h1>
    </div>
  );
}

export default OAuth2Success;