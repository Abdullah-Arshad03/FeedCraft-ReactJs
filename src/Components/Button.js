import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../Pages/Sign-in/AuthContext";

const Button = ({link , name , postId , Url , token })=>{
    const navigate = useNavigate()
const {removeToken} = useAuth()
const logout = ()=>{
    removeToken()
    navigate('/signin')
}

    const onClick =(event)=>{
        // event.preventDefault()
if(name === 'logout'){
    logout()
}
       if(Url)
       {
        console.log(Url)
          axios.delete( Url , {
            headers :{
                "Authorization" : 'bearer ' + token
            }
          }).then((res)=>{
            console.log('post deleted ', res)
             
          }).catch((err)=>{console.log(err)})
       }
  if (link=== '/signin' || link ==='/signup'){
    navigate(`${link}`)
  }

       

    }

    

    return(<>
      <button  onClick={onClick} className="btn text-[#114B5F] border border-gray-400 hover:border-gray-500 pt-1 pb-1 rounded hover:text-[#114B5F] hover:bg-slate-100"><a className="font-semibold pr-6 pl-6" href="">{name}</a> </button> </>)
}
export default Button