import React, { createContext, useContext, useState } from "react";
import AuthCont from "./AuthCont";

const AuthProvider = ({ children }) => {
//   const [jwt, setJwt] = useState(''); // Initialize with a default value
  let jsonn
  return (<>
    <AuthCont.Provider value={ {jsonn} }>
      {children}
    </AuthCont.Provider>
    </>
  );
};


export default AuthProvider;