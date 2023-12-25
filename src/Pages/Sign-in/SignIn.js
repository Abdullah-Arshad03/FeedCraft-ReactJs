import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import AuthCont from "./AuthCont";
import { useNavigate } from "react-router-dom";




const SignIn = () => {
  
 const navigate = useNavigate()
  const a = useContext(AuthCont)

  const [email , setEmail ] = useState('')
  const [password , setPassword] = useState('')
// const Token = token

  const data = {
    email : email,
    password : password
  }

  const onSubmit = (event) =>{
    event.preventDefault()
    console.log(data)
    axios.post('http://localhost:8080/auth/signin', data  ).then((res)=>{
      console.log(res)
      const Token = res.data.token
      console.log('just created token here!',Token)
      a.jsonn = Token
      navigate('/feed')

    }).catch(err=>{console.log(err)})
    
  }


  return (
    <>


      <div className="sign-in-page flex justify-center align-middle bg-gray-200 w-100 h-[100vh] items-center">
        <div className="whole-container flex flex-col sm:flex-row w-full max-w-screen-md h-auto sm:h-96 items-center justify-center drop-shadow-lg">
          <div className="right-container bg-black w-full sm:w-1/3 h-48 sm:h-96 flex justify-center items-center">
            <div className="flex flex-col text-center sm:text-left">
              <h2
                style={{
                  fontFamily: "'Poiret One', sans-serif",
                  fontWeight: "bolder",
                }}
                className="text-white"
              >
                READY TO CRAFT YOUR FEED?
              </h2>
              <br />
              <h2
                style={{
                  fontFamily: "'Poiret One', sans-serif",
                  fontWeight: "bolder",
                }}
                className="text-2xl text-white"
              >
                SIGN IN NOW!
              </h2>
            </div>
          </div>
          <div className="left-container bg-white border w-full sm:w-1/2 h-48 sm:h-96 flex justify-center items-center">
            <div className="information flex flex-col">
              <h1 className="heading text-2xl font-bold">Sign in</h1>
              <h4 className="sm:mt-auto">
                <span className=" font-semibold">Welcome back! </span> please
                enter your details!
              </h4>
              <form className="sign-in-form" onSubmit={onSubmit}>
                <div className="input-feilds flex flex-col">
                  <input
                    onChange={(event)=>{
                      const email = event.target.value
                      setEmail(email)
                    }}
                    className="mb-2 border-1px-black pl-3 pr-3 pt-2 pb-2 border border-gray-300"
                    type="email"
                    placeholder="Enter your email"
                  ></input>
                  <input
                    onChange={(event)=>{
                      const password = event.target.value
                      setPassword(password)
                    }}
                    className="mb-2 border-1px-black pl-3 pr-3 pt-2 pb-2 border border-gray-300"
                    type="password"
                    placeholder="Enter your Password"
                  ></input>
                </div>

                <div className="buttons flex flex-col">
                  <button
                    type="submit"
                    className="mb-2 border-1px-black pl-3 pr-3 pt-2 pb-2 border border-gray-300 bg-slate-300 text-black hover:bg-black hover:text-white"
                  >
                    sign in
                  </button>
                </div>
                <br />
                <br />
                <div className="flex justify-center items-center">
                  <h4 className="">
                    Don't have an account ?{" "}
                    <span className="underline text-blue-600">
                      {" "}
                      <Link to="/signup">sign up</Link>{""}
                    </span>
                  </h4>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
