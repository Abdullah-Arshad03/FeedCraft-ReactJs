import React from "react";
import Button from "./Button";
import { useAuth } from "../Pages/Sign-in/AuthContext";
import Modal, { contextType } from "react-modal";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";


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

const Card = ({ title,content,imageUrl,postId,token,posts,setPost,creator, userId, oldImageFile}) => {

  const [isEdit , setIsEdit] = useState(false)
  const [updatedUrl , setUpdatedUrl] = useState('')

  const [modalIsOpen, setIsOpen] = useState(false);
  const [editImage, setEditImage] = useState('')
  const [editTitle, setEditTitle] = useState(`${title}`)
  const [editContent, setEditContent] = useState(`${content}`)


  const editData = new FormData();


  const EditImage =(event)=>{

    console.log(event.target.files)
    const newfile = event.target.files[0]
    setEditImage(newfile)

  }

  const EditTitle =(event)=>{
   const newTitle = event.target.value;
   setEditTitle(newTitle)
  }

  const EditContent = (event)=>{
   const newContent = event.target.value;
   setEditContent(newContent)
  }

  function openModal(event) {
    event.preventDefault();

    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
   
    setIsOpen(false);
  }


  useEffect(() => {
    Modal.setAppElement("#modal");

 
  },[]);

  const user = localStorage.getItem("userId");

  const onUpdate = (event)=>{
    event.preventDefault()


    if(editTitle.trim() === '' || editContent.trim() === ''  )
    {
      toast.error('Title and Content must be filled')
    }
    else if(editTitle.trim().length <=4 ){
      toast.error('Title must contain atleast 5 characters')
    }
    else if(editContent.trim().length <=4){
      toast.error('Content must contain atleast 5 characters')
    }
    else{

    editData.append('title' , editTitle)
    editData.append('content', editContent)
    if(editImage !== ''){
      setIsEdit(true)
      editData.append('image', editImage)
    }
    editData.append('image', imageUrl)

   
    console.log('these are the form Data Entries : ',[...editData.entries()] );


    axios.put('http://localhost:8080/feed/post/'+ postId, editData , {
      headers : {
      Authorization : 'Bearer ' + token
    }
    }).then((res)=>{
      console.log(res)
      const UpdatedUrl = res.data.post.imageUrl
      console.log(UpdatedUrl)
      setUpdatedUrl(UpdatedUrl)


    

    }).catch((err)=>{
      console.log(err)
    })
  
    setPost((prevPosts)=>{
      const updatedPosts = prevPosts.map((post)=>{
        if(post._id === postId){
        return {
          ...post,
          title : editTitle ,
          content : editContent,
        }
      }
      console.log('this is the updated post : ',post)
      return post

      })
      console.log('this is the updated post : ',updatedPosts)

      return updatedPosts
    })

    
    closeModal();
  }

  }


  const image = `http://localhost:8080/${isEdit? updatedUrl : imageUrl}`;
  const url = "http://localhost:8080/feed/post/" + postId;

  return (
    <>
      <div className="container">
        <div
          className="bg-white p-6 rounded-lg shadow-lg"
          style={{ width: "18rem" }}
        >
          <div className=""></div>
          <div
            className="creator text-[#114B5F] flex justify-centerd mb-2"
            style={{
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            }}
          >
            <p>
            
              <span className="font-semibold text-sm"> <Link to='/profile'>  {creator} </Link></span>{" "}
            </p>
            <span className="mt-1 ml-2 text-sm">posted this</span>
          </div>
          <img
            src={image}
            className="w-full h-48 object-cover rounded-t-lg"
            alt="Card Image"
          />
          <div className="p-4">
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            <p className="text-gray-600 mb-4">{content}</p>
            {!localStorage.getItem("token") || user !== userId ? (
              <></>
            ) : (<>
              <Button
                color="#FBFCFA"
                name="Delete"
                Url={url}
                token={token}
                posts={posts}
                setPost={setPost}
                postId={postId}
              />

              <button onClick={openModal} id="modal" className="btn ml-4 w-20 text-[#114B5F] border border-gray-400 hover:border-gray-500 pt-1 pb-1 rounded hover:text-[#114B5F] hover:bg-slate-100">
              Edit
            </button>
            </>
            )}

           <Toaster/>
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
              <form
                method="POST"
                onSubmit={onUpdate}
                enctype="multipart/form-data"
              >
                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Title:
                  </label>
                  <input
                    onChange={EditTitle}
                    value={editTitle}
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

                  <input
                    onChange={EditImage}
                    type="file"
                    id="image"
                    name="image"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="description"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Content:
                  </label>
                  <textarea
                    onChange={EditContent}
                    value={editContent}
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
                    Update
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
        </div>
      </div>
    </>
  );
};

export default Card;
