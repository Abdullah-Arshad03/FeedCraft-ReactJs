import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({link , color , name , func , type})=>{


    const onClick =()=>{
       if(!link){
        func()
       }
       navigate(`${link}`)
    }

    
    const navigate = useNavigate()
    return(<>
      <button type = {`${type}`} onClick={onClick} className="btn text-[#114B5F] border border-gray-400 hover:border-gray-500 pt-1 pb-1 rounded hover:text-[#114B5F] hover:bg-slate-100"><a className="font-semibold pr-6 pl-6" href="">{name}</a> </button> </>)
}
export default Button