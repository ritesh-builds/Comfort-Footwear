import { useEffect } from "react";
import {useTheme} from "../context/ThemeContext.jsx";
import { AuthContext } from "../context/AuthContext.jsx";
import { useContext } from "react";

function OAuth2Success() {
  
    const { darkMode } = useTheme();
    const {setAccessToken, setRefreshToken} = useContext(AuthContext);

    useEffect(() => {
      const hash = window.location.hash;
      const accessToken = new URLSearchParams(hash.substring(1)).get("accessToken");
      const refreshToken = new URLSearchParams(hash.substring(1)).get("refreshToken");

      setAccessToken(accessToken)
      setRefreshToken(refreshToken)

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      console.log("JWT Token:", accessToken); 
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