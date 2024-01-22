import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

   
  const storeToken = (serverToken) => {

    const time = new Date()
    const getTime = time.getTime() // this is the time in mili seconds
    const expirationTime = getTime.toString()

    localStorage.setItem("token", serverToken);
    // localStorage.setItem('expiry' , expirationTime)

    setTimeout(()=>{
       localStorage.removeItem('token')
      //  localStorage.removeItem('expiry')
    }, 60*60*1000)

  };

  const removeToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem('expiry')

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
