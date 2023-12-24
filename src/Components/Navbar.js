import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = () =>{
    const link = '/signup'
    const color = '#FBFCFA';
    const navigate = useNavigate()
    return(<>
    <div className="navbar flex justify-between bg-[#f5e8de] h-14 drop-shadow-md" >
        <h1 onClick={()=> navigate('/')} className=" cursor-pointer hover:text-[#114B5F]  ml-4 mt-3 heading font-mono font-semibold text-2xl"    style={{
                  fontFamily: "'Poiret One', sans-serif"
                }}> FeedCraft</h1>
        <div className="nav-list mr-4 mt-3 ">
           <ul className=" flex justify-evenly w-auto ">
            {/* <li className="mr-40"><a className="hover:text-yellow-400 font-semibold" href="/feed">Feed</a></li> */}
            {/* <li><a href="/feed">Login</a></li> */}
            {/* <li><a href="/feed">Logout</a></li> */}
            <Button link= {link} color = {color}></Button>
           </ul>
        </div>
    </div>
    </>)
}

export default Navbar