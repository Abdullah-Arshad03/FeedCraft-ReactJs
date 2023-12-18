import React from "react";
import { Link } from "react-router-dom";




const Form = () => {
    return(<>
        
        <div className="whole-container flex w-[800px] h-96 items-center justify-center drop-shadow-lg">
        <div className="right-container bg-black w-[300px] h-96 flex justify-center items-center">
            <div className="flex flex-col">
        {/* <h2 className=" font-bold text-2xl text-white" >WELCOME BACK!</h2> */}

        <h2 style={{fontFamily: "'Poiret One', sans-serif" , fontWeight:'bolder'}} className="text-white" >READY TO CRAFT YOUR FEED?</h2>
        <br/>

             <h2 style={{fontFamily: "'Poiret One', sans-serif" , fontWeight:'bolder'}} className=" text-2xl text-white" >SIGN IN NOW!</h2>
             </div>

        </div>
        <div className="left-container  bg-white border w-[500px] h-96 flex justify-center items-center ">
           <div className="information flex flex-col">
         <h1 className="heading text-2xl font-bold ">Sign in</h1>
         <h4 className=" "> <span className=" font-semibold">Welcome back! </span>  please enter your details!</h4>
     <form className="sign-in-form">
        <div className="input-feilds  flex flex-col">
         <input className="mb-2 border-1px-black pl-3 pr-3 pt-2 pb-2 border border-gray-300" type="email" placeholder="Enter your email"></input>
         <input className="mb-2 border-1px-black pl-3 pr-3 pt-2 pb-2 border border-gray-300" type="password" placeholder="Enter your Password"></input>
         </div>

         <div className="buttons flex flex-col">
            <button type="submit" className="mb-2 border-1px-black pl-3 pr-3 pt-2 pb-2 border border-gray-300 bg-slate-300 text-black hover:bg-black hover:text-white">sign in</button>
         </div>
         <br/>
         <br/>
         <div className="flex justify-center items-center"> 
         <h4 className="">Don't have an account ? <span className="underline text-blue-600">  <Link to='/signup'>sign up</Link> </span></h4>
         </div>
    
         </form>
         </div>


        </div>
     </div>


    </>)

}

export default Form