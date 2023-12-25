import React from "react";
import Button from "./Button";


const Card = () => {
  return (
    <>
      <div className="container">
  <div className="bg-white p-6 rounded-lg shadow-lg" style={{ width: "18rem" }}>
    <img src="https://plus.unsplash.com/premium_photo-1673254928968-b6513f32d43b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D" className="w-full h-48 object-cover rounded-t-lg" alt="Card Image" />
    <div className="p-4">
      <h5 className="text-xl font-semibold mb-2">Card title</h5>
      <p className="text-gray-600 mb-4">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
      
      <Button color='#FBFCFA' name='view'/>
     
    </div>
  </div>
</div>

    </>
  );
};

export default Card;
