import { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [accessToken, setAccessToken] = useState(() => {
    return localStorage.getItem("accessToken") || "";
  });

  const [refreshToken, setRefreshToken] = useState(() => {
    return localStorage.getItem("refreshToken") || "";
  });

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setAccessToken("");
    setRefreshToken("");
  };

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken, refreshToken, setRefreshToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
