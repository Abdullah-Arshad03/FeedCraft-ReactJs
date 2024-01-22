import React from "react";
import Button from "./Button";
import { useAuth } from "../Pages/Sign-in/AuthContext";




const Card = ({title , content , imageUrl , postId , token , posts , setPost , creator , userId}) => {


  const image = 'http://localhost:8080/'+ imageUrl
  const url = 'http://localhost:8080/feed/post/'+postId

  const user = localStorage.getItem('userId')
  return (
    <>
      <div className="container">
  <div className="bg-white p-6 rounded-lg shadow-lg" style={{ width: "18rem" }}>
    <div className="">
    </div>
    <div className="creator text-[#114B5F] flex justify-centerd mb-2" style={{fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}><p> <span className="font-semibold">Post by: </span> </p><span className="ml-2">{creator}</span></div>
    <img src={image} className="w-full h-48 object-cover rounded-t-lg" alt="Card Image" />
    <div className="p-4">
      <h5 className="text-xl font-semibold mb-2">{title}</h5>
      <p className="text-gray-600 mb-4">
       {content}
      </p>
     {!localStorage.getItem('token')  || user!== userId? <></> : <Button color='#FBFCFA' name='Delete' Url={url} token = {token} posts={posts}  setPost = {setPost} postId = {postId}/>}
    </div>
   
  </div>
</div>

    </>
  );
};

export default Card;
