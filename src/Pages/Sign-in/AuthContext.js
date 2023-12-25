import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const storeToken = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  const removeToken = () => {
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ storeToken , removeToken }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const authContext = useContext(AuthContext);
  if(!authContext){
    throw new Error(' there now context')
  }
  return authContext;
};

export { useAuth, AuthProvider };
