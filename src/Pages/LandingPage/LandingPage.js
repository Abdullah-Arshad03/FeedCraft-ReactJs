import React from "react";
import Navbar from "../../Components/Navbar";
import Button from "../../Components/Button";
import Footer from "../../Components/Footer";


const LandingPage = () =>{
    const link = '/signup'
    return(<>
<div>
  <Navbar/>
  <div
          className="main-page h-[90vh] sm:[50vh] flex flex-col justify-center items-center pl-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", 
          }}
        >
    <div className="main-heading flex">
    <h1 className=" text-[#2D3032] font-bold text-4xl" style={{fontFamily : 'Sawarabi Gothic'
}}>Share Your Stories With <span 
    className="text-[#114B5F]  cursor-pointer"    style={{
        fontFamily: "'Poiret One', sans-serif"
      }}> <a href="/signup"> FeedCraft! </a> </span></h1>
    </div>
    <div className="mt-7 text-center">
    <p className="text-lg mb-6 te text-center font-semibold text-[#2D3032]">Join Now! start sharing your thoughts, experiences, and expertise with the world. <br/> <br/> <span className="font-bold text-4xl "                 style={{
                  fontFamily: "'Poiret One', sans-serif"
                }}> Your story matters! </span></p>
        <Button  link={link}/>

    </div>
  </div>
  </div>

<div className="text-center bg-slate-200">
  <Footer/>
  </div>


  
    </>)
}
export default LandingPage