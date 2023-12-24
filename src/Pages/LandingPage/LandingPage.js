import React from "react";
import Navbar from "../../Components/Navbar";
import Button from "../../Components/Button";


const LandingPage = () =>{
    const link = '/signup'
    return(<>
<div>
  <Navbar/>
  <div
          className="main-page h-[90vh] sm:[50vh] flex flex-col justify-center items-center pl-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", 
          }}
        >
    <div className="main-heading flex">
    <h1 className="font-bold text-4xl">Share Your Stories With <span 
    className="text-green-600 cursor-pointer"    style={{
        fontFamily: "'Poiret One', sans-serif"
      }}> <a href="/signup"> FeedCraft! </a> </span></h1>
    </div>
    <div className="mt-7 text-center">
    <p className="text-lg mb-6 te text-center font-semibold">Join Now! start sharing your thoughts, experiences, and expertise with the world. <br/> <br/> <span className="font-bold text-4xl "                 style={{
                  fontFamily: "'Poiret One', sans-serif"
                }}> Your story matters! </span></p>
        <Button  link={link}/>

    </div>
  </div>
  </div>

  
    </>)
}
export default LandingPage