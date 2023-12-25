import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Card from "../../Components/Card";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import { useState } from "react";



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
    return(<>
 <Navbar feed = {feed}/>
 <ToastContainer autoClose={5000}/>
 <div className="post-button mt-2 flex justify-center">
 {/* <h1 id='modal'></h1> */}

    <div className="post-button" id="modal">
    <button  onClick={openModal} className="btn text-[#114B5F] border border-gray-400 hover:border-gray-500 pt-1 pb-1 rounded hover:text-[#114B5F] hover:bg-slate-100"><a className="font-semibold pr-6 pl-6" href="">Create Post</a> </button> 
    </div>
    

    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Create Post</h2>
        <form method="POST">

          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
              Title:
            </label>
            <input
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
            <input type="file" id="image" name="image" />
          </div>

          <div className="mb-6">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter description"
              rows="4"
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="additionalInput" className="block text-gray-700 text-sm font-bold mb-2">
              Additional Input:
            </label>
            <input
              type="text"
              id="additionalInput"
              name="additionalInput"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter additional information"
            />
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
 <Card/>

      
    </>)
}

export default Feed