import React, { createContext, useContext, useState } from "react";
import {jwtDecode} from "jwt-decode";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

   
  const storeToken = (serverToken) => {

    localStorage.setItem("token", serverToken);

    const decodedToken = jwtDecode(serverToken)
    const jwtExpirationTime = decodedToken.exp * 1000 // multiplying with the 1000 to convert the seconds into the miliseconds

    const time = new Date()
    const getTime = time.getTime()

    const timeUntilExpiration =  jwtExpirationTime - getTime

    setTimeout(()=>{
      localStorage.removeItem('token')
      localStorage.removeItem('userId')

    }, timeUntilExpiration)
  };

  const removeToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem('userId')
  };

  return (
    <AuthContext.Provider value={{ storeToken , removeToken  }}>
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
