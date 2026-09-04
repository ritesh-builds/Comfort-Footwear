import { useEffect } from "react";
import {useTheme} from "../context/ThemeContext.jsx";

function OAuth2Success() {
    const { darkMode } = useTheme();
  useEffect(() => {
    console.log("Google OAuth Login Successful");
  }, []);

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