import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({link})=>{
    const navigate = useNavigate()
    return(<>
      <button onClick={()=> navigate(`${link}`)} className="btn bg-green-400 border hover:border-gray-500 pt-1 pb-1 rounded hover:text-green-500 hover:bg-white"><a className="font-semibold pr-6 pl-6" href="">Register Now!</a> </button> </>)
}
export default Button