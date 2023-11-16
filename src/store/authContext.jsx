import React, { createContext, useState } from "react";
import { redirect } from "react-router-dom";

export const AuthContext = createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
});

function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function onLogout() {
    setIsLoggedIn(false);
    return redirect("/")
  }

  function onLogin() {
    setIsLoggedIn(true);
    return redirect("/")
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, onLogin, onLogout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
