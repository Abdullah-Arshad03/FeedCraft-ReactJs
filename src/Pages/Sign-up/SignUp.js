import React from "react";
import { Link , useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../../Components/Footer";
import toast, {Toaster} from "react-hot-toast";
import '../Sign-in/SignIn.css'

const SignUp = () => {

 

    const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    name: name,
    email: email,
    password: password,
  };

  const onSubmit = (event) =>{

      event.preventDefault(); 

      if(name.trim() ==='' || email.trim()==='' || password.trim() === '')
      {
        toast.error('Please fill all feilds !',
        {
          position:'top-right'
        })
      }
      else if(email.split(".")[1] !== 'com' ){
        toast.error('Email is not valid !',{
          position : 'top-right'
        })
      }
      else if(password.trim().length <= 4){
        toast.error('Password must contain atleast 5 characters!' ,{
          position : 'top-right'
        })
      }
      else{
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
              console.log('response on successful signup ',response)
              navigate('/signin')
         }).catch((error)=>{
          console.log(error)
         })
        }
      
  }

  return (
    <>
    
    <div className="sign-in-page flex justify-around align-middle bg-gray-200 w-100 h-[100vh] items-center">
      <div className="signin-left flex flex-col"> 
        <p className="main-head text-7xl" style={{fontFamily : "'Poiret One', sans-serif"}}>FEED <br/> CRAFT</p>
        <p className="rights text-xs"> &copy; Abdullah Bin Arshad</p>
        </div>
        <div className="signin-right whole-container flex flex-col sm:flex-row w-full max-w-screen-md h-auto sm:h-96 items-center justify-center drop-shadow-lg">
          <div className="right-container bg-[#f5e8de] w-full sm:w-1/3 h-48 sm:h-96 flex justify-center items-center">
            <div className="flex flex-col text-center sm:text-left">
              <h2
                style={{
                  fontFamily: "'Poiret One', sans-serif",
                  fontWeight: "bolder",
                }}
                className="text-black"
              >
                READY TO CRAFT YOUR FEED?
              </h2>
              <br />
              <h2
                style={{
                  fontFamily: "'Poiret One', sans-serif",
                  fontWeight: "bolder",
                }}
                className="text-2xl text-black"
              >
                SIGN IN NOW!
              </h2>
            </div>
          </div>
          <div className="left-container bg-white border w-full sm:w-1/2 h-48 sm:h-96 flex justify-center items-center">



            <div className="information flex flex-col">
             
              <h4 className="heading-text-below sm:mt-auto">
                <span className=" font-semibold">Welcome! Register </span> please,
                enter your details!
              </h4>
              <form className="sign-in-form" onSubmit={onSubmit}>
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
                    onChange={(event)=>{
                      const email = event.target.value
                     
                      setemail(email)
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
                    className="mb-2 border-1px-black pl-3 pr-3 pt-2 pb-2 bg-slate-300 text-black hover:bg-[#f5e8de] hover:text-black"
                  >
                    sign up
                  </button>
                </div>
                <br />
                <br />
                <div className="flex justify-center items-center">
                  <h4 className="">
                    If you have already an account {" "}
                    <span className="underline text-blue-600">
                      {" "}
                      <Link to="/signin">sign in</Link>{""}
                      <Toaster/>
                    </span>
                  </h4>
                </div>
              </form>
            </div>
          </div>
          
        </div>
      
      </div>
      <div className=" text-sm text-center bg-[#f5e8de]">
        <Footer />
      </div>    </>
  );
};

export default SignUp;
