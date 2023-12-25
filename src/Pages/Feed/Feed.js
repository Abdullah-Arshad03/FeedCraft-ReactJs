import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Card from "../../Components/Card";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal, { contextType } from 'react-modal';
import { useState } from "react";
import axios from "axios";
import Footer from "../../Components/Footer";



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };




const Feed = ()=>{

    

    const notify = ()=>{
        toast('Wow soo easy!')
    }
    const feed = true


  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [ Title, setTitle] = useState('')
  const [ Image, setImage] = useState('')
  const [ Content, setContent] = useState('')
  const [posts , setPosts] = useState([])


  useEffect(()=>{
    Modal.setAppElement('#modal');
  }, [])
   

  function openModal(event) {
    event.preventDefault()
    
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const title = (event)=>{
    console.log(event.target.value)
    const value = event.target.value
    setTitle(value)
  }
  const file = (event)=>{
    const file = event.target.files[0];
    console.log(file) // Access the first file in the array
    setImage(file);

  }
  const content = (event)=>{
    console.log(event.target.value)
    const value = event.target.value
    setContent(value)

  }

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QzQGdtYWlsLmNvbSIsInVzZXJJZCI6IjY1ODZlMDc0YzAzMGVjZjBlZGZiMzQyNiIsImlhdCI6MTcwMzUzMDI2NiwiZXhwIjoxNzAzNTMzODY2fQ.8WnJ5kI_7wuSEkbBF0yxlxx7FUTr2J9saq7Yv27bRHs'

  const formData = new FormData()
  formData.append('title' , Title)
  formData.append('image' , Image)
  formData.append('content' , Content)

  useEffect(()=>{

    axios.get('http://localhost:8080/feed/posts' , {
        headers : {
            'Authorization': 'bearer ' + token
        }
    }).then((res)=>{
        console.log(res)
        console.log(res.data.posts)
        const postss = res.data.posts

        setPosts(postss)
       
        
    }).catch(err=>{
        console.log(err)
    })

  }, [])

  


 

  const submit = (event)=>{
    event.preventDefault()
    console.log(formData)
    axios.post('http://localhost:8080/feed/post', formData, {
    headers: {
      'Content-Type': 'multipart/form-data', // Set the content type
      'Authorization': 'bearer ' + token,
    },
  })
  .then((response) => {
    console.log(response.data);
    closeModal()
    setPosts((posts)=> [...posts, response.data.post])
  })
  .catch((error) => {
    console.error(error);
  });

    
  }


 
    return(<>
 <Navbar feed = {feed} />
 <ToastContainer autoClose={5000}/>
 <div className="post-button mt-2 flex justify-center">
 {/* <h1 id='modal'></h1> */}

    <div className="post-button" id="modal">
    <button  onClick={openModal} className="btn text-[#114B5F] border border-gray-400 hover:border-gray-500 pt-1 pb-1 rounded hover:text-[#114B5F] hover:bg-slate-100"><a className="font-semibold pr-6 pl-6 " href="">+</a> </button> 
    </div>
    

    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="block text-gray-700 text-sm font-bold mb-2">Create Post</h2>
        <form method="POST" onSubmit={submit} enctype="multipart/form-data">

          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
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
            <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
              Choose Image:
            </label>

            <input onChange={file} type="file" id="image" name="image" />
          </div>

          <div className="mb-6">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
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
            <button   className="btn text-[#114B5F] border border-gray-400 hover:border-gray-500 pt-1 pb-1 rounded hover:text-[#114B5F] hover:bg-slate-100 pr-3 pl-3" onClick={closeModal}>close</button>
          </div>
        </form>
      
      </Modal>

 </div>

     <div className="flex justify-around items-center ">
        {posts.map((post) => (
            <div className="flex justify-around">
          <Card title={post.title} content = {post.content} imageUrl = {post.imageUrl} postId = {post._id}   />
          </div>
        ))}
      </div>

      <div className=" text-sm text-center bg-[#f5e8de]">
        <Footer />
      </div>

      
    </>)
}

export default Feed
