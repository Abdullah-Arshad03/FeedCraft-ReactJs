import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    name: name,
    email: email,
    password: password,
  };

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
                REGISTER NOW!
              </h2>
            </div>
          </div>
          <div className="left-container bg-white border w-full sm:w-1/2 h-48 sm:h-96 flex justify-center items-center">
            <div className="information flex flex-col">
              <h1 className="heading text-2xl font-bold">Sign up</h1>
              <h4>
                <span className="font-semibold">Welcome!</span> please enter
                your details !
              </h4>
              <form
                className="sign-in-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  console.log(data);
                   fetch('http://localhost:8080/auth/signup', {
                    method : 'POST',
                    body : JSON.stringify(data),
                    headers : {
                        "Content-Type" : 'application/json'
                }
                   }).then((res)=>{
                    return res.json()

                   }).then((result)=>{
                    const response = result
                        console.log(response)
                   }).catch((error)=>{
                    console.log(error)
                   })
                }}
              >
                <div className="input-feilds flex flex-col">
                  <input
                    onChange={(event) => {
                      const name = event.target.value;
                      setName(name);
                    }}
                    className="mb-2 border-1px-black pl-3 pr-3 pt-2 pb-2 border border-gray-300"
                    type="text"
                    placeholder="Enter your name"
                  ></input>

                  <input
                    onChange={(event) => {
                      const email = event.target.value;
                      setemail(email);
                    }}
                    className="mb-2 border-1px-black pl-3 pr-3 pt-2 pb-2 border border-gray-300"
                    type="email"
                    placeholder="Enter your email"
                  ></input>

                  <input
                    onChange={(event) => {
                      const password = event.target.value;
                      setPassword(password);
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
                    Register
                  </button>
                </div>
                <br />
                <div className="flex justify-center items-center">
                  <h4 className="">
                    Already have an account ?{" "}
                    <span className="underline text-blue-600">
                      {" "}
                      <Link to="/signin">sign in</Link>{" "}
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

export default SignUp;
