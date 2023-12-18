import React from "react";
import SignIn from "./Pages/Sign-in/SignIn";
import SignUp from "./Pages/Sign-up/SignUp";
import {  Route, Routes } from "react-router-dom";


const App =()=>{
  return(<>
<Routes>
  <Route path="/signin" element={<SignIn></SignIn>}/>
  <Route path="/signup" element={<SignUp></SignUp>}/>

  </Routes>
  </>)
}

export default App