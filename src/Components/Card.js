import React from "react";
import Button from "./Button";
import { useAuth } from "../Pages/Sign-in/AuthContext";
import Modal, { contextType } from "react-modal";
import { useState } from "react";
import { useEffect } from "react";

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

const Card = ({
  title,
  content,
  imageUrl,
  postId,
  token,
  posts,
  setPost,
  creator,
  userId,
  oldImageFile
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editImage, setEditImage] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [editContent, setEditContent] = useState('')

  const EditImage = (event)=>{
        const editImageFile = event.target.file[0]
        console.log('new image file',editImageFile)
        setEditImage(editImageFile)
  }

  const EditTitle =(event)=>{
    const newTitle = event.target.value 
    console.log(newTitle)
    setEditTitle(newTitle)
  }

  const EditContent = (event)=>{
    const newContent = event.target.value
    console.log(newContent)
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
    console.log('old image hy ',oldImageFile)
  }, []);

  const image = "http://localhost:8080/" + imageUrl;
  const url = "http://localhost:8080/feed/post/" + postId;

  const user = localStorage.getItem("userId");

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
                onSubmit={(event) => {
                  event.preventDefault();
                  console.log("form is submitted!");
                }}
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
                    value={title}
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
                    onChange={(event) => {
                      console.log("event.target.value");
                    }}
                    value={content}
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
        </div>
      </div>
    </>
  );
};

export default Card;
