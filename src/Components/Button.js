import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({link , color})=>{


    const buttonStyle = {
        backgroundColor: color,
    }
    const navigate = useNavigate()
    return(<>
      <button onClick={()=> navigate(`${link}`)} className="btn text-[#114B5F] border border-gray-400 hover:border-gray-500 pt-1 pb-1 rounded hover:text-[#114B5F] hover:bg-white" style={buttonStyle}><a className="font-semibold pr-6 pl-6" href="">Register Now!</a> </button> </>)
}
export default Button