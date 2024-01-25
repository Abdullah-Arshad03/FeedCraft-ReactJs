import React from "react";
import Button from "./Button";
import { useAuth } from "../Pages/Sign-in/AuthContext";
import Modal, { contextType } from "react-modal";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

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


  const [isEdit, setIsEdit] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editImage, setEditImage] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [editContent, setEditContent] = useState('')


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
    setIsEdit(true)
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsEdit(false)
    setIsOpen(false);
  }


  useEffect(() => {
    Modal.setAppElement("#modal");

 
  },[]);

  const image = "http://localhost:8080/" + imageUrl;
  const url = "http://localhost:8080/feed/post/" + postId;
  

  const user = localStorage.getItem("userId");

  const onUpdate = (event)=>{

    event.preventDefault()
    editData.append('title' , editTitle)
    editData.append('content', editContent)
    if(editImage !== ''){
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
    

    }).catch((err)=>{
      console.log(err)
    })


  }


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
              {" "}
              <span className="font-semibold text-sm">{creator}</span>{" "}
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
            ) : (
              <Button
                color="#FBFCFA"
                name="Delete"
                Url={url}
                token={token}
                posts={posts}
                setPost={setPost}
                postId={postId}
              />
            )}

            <button onClick={openModal} id="modal">
              Edit
            </button>
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
                    // value={title}
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
                    // value={content}
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
