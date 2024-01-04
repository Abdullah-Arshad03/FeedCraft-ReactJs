import React from "react";
import Button from "./Button";
import { useAuth } from "../Pages/Sign-in/AuthContext";




const Card = ({title , content , imageUrl , postId , token }) => {


  const image = 'http://localhost:8080/'+ imageUrl
  const url = 'http://localhost:8080/feed/post/'+postId
  return (
    <>
      <div className="container">
  <div className="bg-white p-6 rounded-lg shadow-lg" style={{ width: "18rem" }}>
    <img src={image} className="w-full h-48 object-cover rounded-t-lg" alt="Card Image" />
    <div className="p-4">
      <h5 className="text-xl font-semibold mb-2">{title}</h5>
      <p className="text-gray-600 mb-4">
       {content}
      </p>

     {!localStorage.getItem('token') ? <></> : <Button color='#FBFCFA' name='Delete' Url={url} token = {token} />}
    </div>
  </div>
</div>

    </>
  );
};

export default Card;
