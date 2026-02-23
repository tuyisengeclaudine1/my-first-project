import React from "react";
import Form from "./Form.jsx";

function Aboutus({ handleToggleBuyNow, showForm }) {
  return (
    


      <div className="h-130 bg-[url('/images/basket2.png')] bg-center bg-contain bg-no-repeat bg-stone-100 m-2 ">

    <div className="justify-center items-center flex flex-col text-center text-white min-h-screen  ">
        <p className="text-lg text-stone-100  w-[1000px] mt-20">Home About us</p>
    <h1 className="text-4xl w-[1000px] text-gray-100 font-bold ">About us</h1>
    
    <button className=" rounded-xl p-1 bg-green-700 "> View Details</button>
</div>

<div className=" items-center justify-center  gap-50 flex  ">
  <div className="">
  <img src="/images/images (1).jfif" 
  alt="the image"
  className="w-100 h-100" 
   />
   </div>
<div>
<div className="flex justify-center items-center">
        <div className="">
          <h2 className="font-bold text-4xl text-cyan-900 w-200">
            Welcome to FreshBasket an ecommerce Website
          </h2>

          <p className="text-gray-950 text-lg w-100">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quaerat praesentium, harum dolores, suscipit amet minus eligendi
            ducimus natus at quod sint impedit.
          </p>

</div>
</div>
</div>


</div>




      <div className="bg-gray-950 text-white flex justify-center items-center gap-40 p-10">
        <div>
          <h1 className="font-bold text-xl flex justify-center">FreshBasket</h1>
          <p className="text-center">Copyright 2025 FreshBasket ltd</p>
          <p className="text-center">All rights reserved</p>

          <div className="flex justify-center gap-3 mt-2  ">
            <img src="/images/ig.png" alt="instagram" />
            <img src="/images/tube.png" alt="youtube" />
            <img src="/images/twitter.png" alt="twitter" />
            <img src="/images/whatsapp.png" alt="whatsapp" />
          </div>
        </div>

        <div>
          <h2 className="font-bold text-xl">Company</h2>
          <p>About us</p>
          <p>Contact us</p>
          <p>Cart</p>
          <p>Fruits</p>
          <p>Home</p>
        </div>

        <div>
          <h2 className="font-bold text-xl">Support</h2>
          <p>Terms of service</p>
          <p>Legal</p>
          <p>Privacy Policy</p>
          <p>Status</p>
        </div>

        <div>
          <h2 className="font-bold text-xl text-center">Stay up To Date</h2>
          <div className="flex mt-2">
            <input
              type="text"
              placeholder="your email address"
              className="border rounded-md border-gray-700 px-2"
            />
            <img
              src="/images/Vector.png"
              alt="send"
              className="rounded-full p-1 bg-gray-800 ml-2"
            />
          </div>
        </div>
      </div>
      </div>
    
  );
}

export default Aboutus;