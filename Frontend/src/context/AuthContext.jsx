import { createContext, useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(() => {
    return localStorage.getItem("accessToken") || "";
  });

  const [refreshToken, setRefreshToken] = useState(() => {
    return localStorage.getItem("refreshToken") || "";
  });

  const [userProfile, setUserProfile] = useState(() => {
    try {
      const cached = sessionStorage.getItem("user_profile");
      return cached ? JSON.parse(cached) : null;
    } catch {
      return null;
    }
  });

  // Pre-fetch user profile in AuthContext as soon as token is available
  useEffect(() => {
    if (!accessToken) {
      setUserProfile(null);
      sessionStorage.removeItem("user_profile");
      return;
    }

    let isMounted = true;
    const fetchUserProfile = async () => {
      try {
        const response = await axiosInstance.get("/api/user/profile");
        if (isMounted && response.data) {
          setUserProfile(response.data);
          sessionStorage.setItem("user_profile", JSON.stringify(response.data));
        }
      } catch (error) {
        console.error("Error fetching user profile in AuthContext:", error);
      }
    };

    fetchUserProfile();

    return () => {
      isMounted = false;
    };
  }, [accessToken]);

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    sessionStorage.removeItem("user_profile");
    setAccessToken("");
    setRefreshToken("");
    setUserProfile(null);
  };

  return (
    <AuthContext.Provider value={{
      accessToken,
      setAccessToken,
      refreshToken,
      setRefreshToken,
      userProfile,
      setUserProfile,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
