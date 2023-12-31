import React from "react";
import SignIn from "./Pages/Sign-in/SignIn";
import SignUp from "./Pages/Sign-up/SignUp";
import {  Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Feed from "./Pages/Feed/Feed";
const App =()=>{
  return(<>
  
<Routes>
  
  <Route path="/signin" element={<SignIn></SignIn>}/>
  <Route path="/signup" element={<SignUp></SignUp>}/>
  <Route path="/" element={<LandingPage/>}/>
  <Route path="/feed" element={<Feed></Feed>}/>
  



  </Routes>
  
  </>)
}

export default App