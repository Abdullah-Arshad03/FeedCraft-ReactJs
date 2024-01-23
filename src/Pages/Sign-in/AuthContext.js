import React, { createContext, useContext, useState } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

   
  const storeToken = (serverToken) => {

    const decodedToken = jwt_decode(serverToken)
    const jwtExpirationTime = decodedToken.exp * 1000 // multiplying with the 1000 to convert the seconds into the miliseconds
  

    localStorage.setItem("token", serverToken);
  };

  const removeToken = () => {
    localStorage.removeItem("token");


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
