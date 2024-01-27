import React from "react";
import Navbar from "../../Components/Navbar";
import Feed from "../Feed/Feed";
import { useEffect } from "react";
import {useState } from "react";
import axios from "axios";
import Card from "../../Components/Card";



const Profile = () =>{

     
    const[token ,setToken]= useState('')
    const [posts , setPosts] = useState([])
    const [user, setUser] = useState('')
    
useEffect(()=>{
    const getToken = localStorage.getItem('token')
    setToken(getToken)
    console.log(getToken)
    console.log(token)
    axios.get('http://localhost:8080/profile/posts', {
        headers :{
            Authorization : 'Bearer ' + getToken
        }
    }).then((res)=>{
        console.log(res)
        setUser(res.data.posts[0].creator.name)
        setPosts(res.data.posts)
        console.log('posts ahin bece', posts)
    }).catch(err=>{
        console.log(err)
    })

},[])

    return(<>
    <Navbar feed={true}/>
    <div className="heading mt-5 mb-8 flex justify-center text-2xl font-semibold  items-center">
        <h1 className=""><span>{user}'s</span> Profile </h1>
    </div>
    <div className="flex justify-around items-center flex-wrap">
        {posts.map((post) => (
          <div className="flex justify-around mb-10">
            <Card
              title={post.title}
              content={post.content}
              imageUrl={post.imageUrl}
              postId={post._id}
              token={token}
              posts = {posts}
              setPost = {setPosts}
              creator={post.creator.name}
              userId = {post.creator._id}
              profile = {true}
            />
          </div>
        ))}
      </div>
 

  </>)
}

export default Profile