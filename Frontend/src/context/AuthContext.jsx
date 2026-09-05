import { createContext, useState } from 'react'

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [accessToken, setAccessToken] = useState(() => {
    return localStorage.getItem("accessToken") || "";
  })

  const [refreshToken, setRefreshToken] = useState(() => {
    return localStorage.getItem("refreshToken") || "";
  })

  // const accessToken = "Hello";

  return (
    <AuthContext.Provider value={{accessToken, setAccessToken, refreshToken, setRefreshToken}}>
      {children}
    </AuthContext.Provider>
  )

}

export { AuthContext, AuthProvider };
