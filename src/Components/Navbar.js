import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = () =>{
    const link = '/signup'
    const navigate = useNavigate()
    return(<>
    <div className="navbar flex justify-between bg-slate-200 h-14 drop-shadow-md" >
        <h1 onClick={()=> navigate('/')} className=" cursor-pointer hover:text-green-600 ml-4 mt-3 heading font-mono font-semibold text-2xl"    style={{
                  fontFamily: "'Poiret One', sans-serif"
                }}> FeedCraft</h1>
        <div className="nav-list mr-4 mt-3 ">
           <ul className=" flex justify-evenly w-auto ">
            {/* <li className="mr-40"><a className="hover:text-yellow-400 font-semibold" href="/feed">Feed</a></li> */}
            {/* <li><a href="/feed">Login</a></li> */}
            {/* <li><a href="/feed">Logout</a></li> */}
            <Button link= {link}></Button>
           </ul>
        </div>
    </div>
    </>)
}

export default Navbar