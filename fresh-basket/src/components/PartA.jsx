import React from "react";
import Form from "./Form.jsx";

export function PartA({ handleToggleBuyNow, showForm })  {

  return (
    <div>

    <div>
    <section className="flex-row flex gap-50 bg-gradient-to-t from-green-600 to-orange-400 w-full h-full justify-center items-center p-15 m-2 ">
     <div className="w-100 h-100 rounded-full bg-[#DFE9F4] justify-center items-center flex">
    <div className="w-100 h-100 rounded-full  bg-gradient-to-l from-green-300 to-yellow-300  ml-[-100px] flex-col flex justify-center items-center">
    
      <img src="/images/basket1.png" class="w-full "/>
      </div>
        </div>
  
      <div className=" p-4 bg-[#DFE9F4] rounded-xl flex flex-col w-[400px]">
       
        <p className="text-[#333333] flex-col hover:text-gray-400"> Healthy</p>
        <h1 className="">
          <p className="text-4xl text-[#054C73]"><strong>Discover Our</strong></p>
          <p className="text-4xl text-[#054C73] hover:text-gray-400"><strong>New Collection</strong></p>
        </h1>
        <div className="mt-2 "> 
        <h6 className="text-[#333333] hover:text-gray-400">check out our fresh natural fruits</h6>
        <h6 className="text-[#333333] hover:text-gray-400">at very low prices and we offer delivery</h6>
        <button
          onClick={handleToggleBuyNow}
          className="text-white rounded-2xl bg-[#054C73] py-2 px-10   hover:bg-cyan-800 z-20" ><strong>Buy Now</strong></button>
        {showForm && (
              <div className="absolute top-0 left-full translate-x-[105%] z-30">
            <Form />
            </div>  
        )}
        </div>
      </div>

</section>
<div>
</div>
   
  
<div className="bg-gray-700 text-white flex justify-between p-10 m-2 w-full ">
  <div className="">
    <h1 className="font-bold text-xl justify-center  flex">FreshBasket</h1>
  <h2 className="  flex flex-col text-center">
    <p>Copyright ©2025 FreshBasket ltd</p>
    <p>All rights reserved</p>
    <span className="flex ml-12 gap-3">
      <p><button ><img src="/images/ig.png" alt="" /></button></p>
      <p><button><img src="/images/tube.png" alt=""/></button></p>
      <p><button><img src="/images/twitter.png" alt="" /></button></p>
      <p><button><img src="/images/What's App Icon _ Font Awesome.html" alt="" /></button></p>
      
    </span>
    </h2>
</div>

<div className="">
<h2 className="font-bold text-xl justify-center  flex">Company</h2>
<p><button>About us</button></p>
<p><button>Contact us</button></p>  
<p><button>Fruits</button></p>
<p><button>Home</button></p>
</div>

<div>
  <h2 className="font-bold text-xl flex">Support</h2>
  <p><button>Terms of service</button></p>
  <p><button>Legal</button></p>
  <p><button>Privacy Policy</button></p>
  <p><button>Status</button></p>

</div>

<div className="mb-23">
  <h1 className="items-center justify-center mr-7  flex font-bold ">Stay up To Date</h1>
  <span className="flex">
<input
 type="text"
  name="email"
   id="" 
   placeholder="your email address"
   className="border rounded-md border-stone-500  px-2"
   />

   <button><img src="/images/Vector.png"
    alt="the image"
    className=" rounded-full p-1 bg-gray-800"
    />
    </button> 
    </span> 


</div>
</div>






</div>

</div>

  );
}

export default PartA;