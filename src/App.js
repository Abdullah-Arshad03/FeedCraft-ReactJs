import React from "react";
import SignIn from "./Pages/Sign-in/SignIn";
import SignUp from "./Pages/Sign-up/SignUp";
import {  Route, Routes } from "react-router-dom";
import AuthProvider from "./Pages/Sign-in/AuthProvider";
import LandingPage from "./Pages/LandingPage/LandingPage";

const App =()=>{
  return(<>
  
<Routes>
  <Route path="/signin" element={<SignIn></SignIn>}/>
  <Route path="/signup" element={<SignUp></SignUp>}/>
  <Route path="/" element={<LandingPage/>}/>

  </Routes>
  
  </>)
}

export default App