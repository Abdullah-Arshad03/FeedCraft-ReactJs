import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Button from "../../Components/Button";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const signup = "/signup";
  const signIn = '/signin'
  const name1 = 'Register Now'
  const name2 = 'Sign in'
  const feed = false
 
  return (
    <>
      <div>
        <Navbar feed = {feed} />
        <div
          className="main-page h-[90vh] sm:[50vh] flex flex-col justify-center items-center pl-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="main-heading flex">
            <h1
              className=" text-[#2D3032] font-bold text-4xl"
              style={{ fontFamily: "Sawarabi Gothic" }}
            >
              Share Your Stories With{" "}
              <span
                className="text-[#114B5F]  cursor-pointer"
                style={{
                  fontFamily: "'Poiret One', sans-serif",
                }}
              >
                {" "}
                <a href="/feed"> FeedCraft ! </a>{" "}
              </span>
            </h1>
          </div>

          <div className="mt-7 flex justify-center flex-col">
            <p className="text-lg mb-6 flex flex-col  font-semibold text-[#2D3032]">
              Join Now! start sharing your thoughts, experiences, and expertise
              with the world. 
             
            </p>
            <div
                className="font-bold text-4xl flex justify-center "
                style={{
                  fontFamily: "'Poiret One', sans-serif",
                }}
              >
                {" "}
                Your story matters!{" "}
              </div>

            <div className="button flex justify-center  mt-5">

            <Button link={signup} name ={name1}/>
            <p className="mr-1 ml-1 mt-1 font-semibold">or</p>
            <Button link={signIn} name = {name2} />

            </div>
          </div>
         
          <div className=" signinLine text-xs pt-10">
          <p>Developed by &copy; Abdullah Bin Arshad</p>
            
          </div>
        </div>
      </div>

      <div className=" text-sm text-center bg-[#f5e8de]">
        <Footer />
      </div>
    </>
  );
};
export default LandingPage;
