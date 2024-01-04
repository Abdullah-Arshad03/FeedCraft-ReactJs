import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const loggedIn = (token)=>{
    let logIn ;
    if(!token){
      logIn = false
    }
    logIn = true
  }
   
  const storeToken = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  const removeToken = () => {
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ storeToken , removeToken , loggedIn }}>
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
