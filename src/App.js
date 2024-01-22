import React from "react";
import SignIn from "./Pages/Sign-in/SignIn";
import SignUp from "./Pages/Sign-up/SignUp";
import {  Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Feed from "./Pages/Feed/Feed";
import Profile from "./Pages/Profile/Profile";
import { useNavigate } from "react-router-dom";

const App =()=>{
   const navigate = useNavigate()
  return(<>
  
<Routes>
  
  <Route path="/signin" element={<SignIn></SignIn>}/>
  <Route path="/signup" element={<SignUp></SignUp>}/>
  <Route path="/" element={<LandingPage/>}/>
  <Route path="/feed" element={<Feed></Feed>}/>
  {!localStorage.getItem('token') ? (<> <Route path="/profile" element={<SignIn></SignIn>}/></>) : (
  <Route path="/profile" element={<Profile></Profile>}/>
  )
  }

  



  </Routes>
  
  </>)
}

export default App