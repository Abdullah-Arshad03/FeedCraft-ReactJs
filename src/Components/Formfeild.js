import React from "react";

const Formfeild = () =>{
    return (<>

<form method="POST">
          {/* Input field for the title */}
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

          {/* Input field for the image file */}
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
              Choose Image:
            </label>
            <input type="file" id="image" name="image" />
          </div>

          {/* Textarea for user input */}
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

          {/* Additional input field */}
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

          {/* Submit button */}
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
    </>)
}

export default Formfeild