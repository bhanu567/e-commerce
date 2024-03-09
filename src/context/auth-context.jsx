import React from "react";
import { useState } from "react";
const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const isTokenInLocalStorage = localStorage.getItem("token");
  const [token, setToken] = useState(isTokenInLocalStorage);
  const isUserLoggedIn = !!token;
  const LoginHandler = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
    setTimeout(() => {
      localStorage.removeItem("token");
    }, 300000);
  };

  const LogoutHandler = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: isUserLoggedIn,
    login: LoginHandler,
    logout: LogoutHandler,
  };

  return (
    <AuthContext.Provider value={{ contextValue }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
