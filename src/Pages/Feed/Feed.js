import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Card from "../../Components/Card";
import "react-toastify/dist/ReactToastify.css";
import Modal, { contextType } from "react-modal";
import { useState } from "react";
import axios from "axios";
import Footer from "../../Components/Footer";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import {io} from 'socket.io-client'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Feed = () => {
const navigate = useNavigate()
   
  const feed = true;

  let subtitle;
  const [token, setToken] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [Title, setTitle] = useState("");
  const [Image, setImage] = useState("");
  const [Content, setContent] = useState("");
  const [posts, setPosts] = useState([]);




  function openModal(event) {
    event.preventDefault();
    console.log('true')
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const title = (event) => {
    console.log(event.target.value);
    const value = event.target.value;
    setTitle(value);
  };
  const file = (event) => {
    const file = event.target.files[0];
    console.log('this is the file',file); // Access the first file in the array
    setImage(file);
    console.log('image wali file' )
  };
  const content = (event) => {
    console.log(event.target.value);
    const value = event.target.value;
    setContent(value);
  };

  const formData = new FormData();
  formData.append("title", Title);
  formData.append("image", Image);
  formData.append("content", Content);

  useEffect(() => {
    Modal.setAppElement("#modal");
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
   
    axios
      .get("http://localhost:8080/feed/posts", {
        headers: {
          Authorization: "bearer " + token,
        },
      })
      .then((res) => {
        console.log(res);
        console.log('getting this : ',res.data.posts[0].creator.name);
        const postss = res.data.posts;
        setPosts(postss);
     
      })
      .catch((err) => {
        console.log(err);
      });
 

  }, []);

  const submit = (event) => {
    event.preventDefault();

    if(Title.trim() === '' || Content.trim() === '' || Image === '' )
    {
      toast.error('Please Fill Feilds')
    }
    else if(Title.trim().length <=4 ){
      toast.error('Title must contain atleast 5 characters')
    }
    else if(Content.trim().length <=4){
      toast.error('Content must contain atleast 5 characters')
    }
    else{
    axios
      .post("http://localhost:8080/feed/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the content type
          Authorization: "bearer " + token,
        },
      })
      .then((response) => {
        console.log(response.data);
        closeModal();
    
        setPosts((posts) => [...posts, response.data.post]);
        console.log('this is the form data',formData);

        
      })
      .catch((error) => {
        console.error(error);
      });
    }
  };

  return (
    <>
      <Navbar feed={feed}  />
      <div className="post-button mt-2 flex justify-center">
        {/* <h1 id='modal'></h1> */}

        <div className="post-button mb-7 mt-3" id="modal">
          {!localStorage.getItem('token') ? (
              <p className="text-[#114B5F] mb-4 font-semibold">Login/Register Now! to create your feed!</p>
          ):
          (<>
           <button
            onClick={openModal}
            className="btn text-[#114B5F] border border-gray-400 hover:border-gray-500 pt-1 pb-1 rounded hover:text-[#114B5F] hover:bg-slate-100"
          >
            <a className="font-semibold pr-6 pl-6 " href="">
              Add Post
            </a>
          </button>
             
          </>
          )
          }
        </div>
        <Toaster/>
        {/* <ToastContainer autoClose={1000} /> */}

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 className="block text-gray-700 text-sm font-bold mb-2">
            Create Post
          </h2>
          <form method="POST" onSubmit={submit} enctype="multipart/form-data">
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Title:
              </label>
              <input
                onChange={title}
                type="text"
                id="title"
                name="title"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter title"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Choose Image:
              </label>

              <input onChange={file} type="file" id="image" name="image" />
            </div>

            <div className="mb-6">
              <label
                htmlFor="description"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Content:
              </label>
              <textarea
                onChange={content}
                id="content"
                name="content"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter description"
                rows="4"
              ></textarea>
            </div>

            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="btn text-[#114B5F] border border-gray-400 hover:border-gray-500 pt-1 pb-1 rounded hover:text-[#114B5F] hover:bg-slate-100 pr-3 pl-3"
              >
                Submit
              </button>
              <button
                className="btn text-[#114B5F] border border-gray-400 hover:border-gray-500 pt-1 pb-1 rounded hover:text-[#114B5F] hover:bg-slate-100 pr-3 pl-3"
                onClick={closeModal}
              >
                close
              </button>
            </div>
          </form>
        </Modal>
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
              oldImageFile = {Image}
              profile = {false}
             
            />
          </div>
        ))}
      </div>

      {/* <div className=" text-sm text-center bg-[#f5e8de]"> */}
      <div className=" signinLine text-center text-xs pt-10">
          <p>Developed by &copy; Abdullah Bin Arshad</p>
            
          </div>
      {/* </div> */}
    </>
  );
};

export default Feed;
