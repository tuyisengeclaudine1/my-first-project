import React from "react";
import Form from "./Form.jsx";

export function PartA({ handleToggleBuyNow, showForm })  {

  return (
    <div>
    <section className=" flex gap-50 bg-gradient-to-t from-green-600 to-orange-400 w-full h-full justify-center items-center p-15 m-2">
     <div className="w-full h-full rounded-full bg-[#DFE9F4] justify-center items-center ">
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
  <h2></h2>
</div>
</div>



  );
}

export default PartA;

