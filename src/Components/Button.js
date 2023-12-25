import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Button = ({link , color , name , postId , Url})=>{

     const pId = postId

    const onClick =(event)=>{
        event.preventDefault()
       if(Url)
       {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QzQGdtYWlsLmNvbSIsInVzZXJJZCI6IjY1ODZlMDc0YzAzMGVjZjBlZGZiMzQyNiIsImlhdCI6MTcwMzUzMDI2NiwiZXhwIjoxNzAzNTMzODY2fQ.8WnJ5kI_7wuSEkbBF0yxlxx7FUTr2J9saq7Yv27bRHs"
        console.log(Url)
          axios.delete( Url , {
            headers :{
                "Authorization" : 'bearer ' + token
            }
          }).then((res)=>{
            console.log('post deleted ', res)
             
          }).catch((err)=>{console.log(err)})
       }
   if(link){

    navigate(`${link}`)

   }

    }

    
    const navigate = useNavigate()
    return(<>
      <button  onClick={onClick} className="btn text-[#114B5F] border border-gray-400 hover:border-gray-500 pt-1 pb-1 rounded hover:text-[#114B5F] hover:bg-slate-100"><a className="font-semibold pr-6 pl-6" href="">{name}</a> </button> </>)
}
export default Button