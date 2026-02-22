import React, { useState, useEffect } from "react";
  function Helo() {
  const images = [
    "/images/water melon.png",
    "/images/appleee.png",
    "/images/paw paw.png",
    "/images/pink.png",
    "/images/mango.png",
    "/images/remon.png.png",
    "/images/pine apple.png",
    "/images/passion.png",
    "/images/orangeee (1).png",
    "/images/garpes.png",
    "/images/tree tomato.png",
    "/images/tree tomato.png",



  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return ( 
    <div className="m-5 border justify-center flex-col items-center text-center"> 
    <section className=" flex gap-30 text-center items-center mt-5 ">
    <div className="h-100 w-100 relative rounded-md bg-[#DFE9F4] justify-center items-center ml-30 flex ">
    <div className="h-90 w-90 relative rounded-full bg-white object-cover mt-20 justify-center items-center flex  ">
      <img
        src={images[index]}
        className="  items-center justify-center flex h-full w-100 h-50 "
        alt="slide"
      />
    </div>
    </div>

        
      <div className="flex justify-center items-center text-center  gap-30">
        <div className="w-120">
          <h2 className="font-bold text-4xl text-cyan-900">
            Welcome to FreshBasket an ecommerce Website
          </h2>

          <p className="text-gray-950 mt-3 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quaerat praesentium, harum dolores, suscipit amet minus eligendi
            ducimus natus at quod sint impedit.
          </p>

          

</div>
</div>

  </section>

<div className="m-5">
    <span className="">
     <h3 className="text-3xl text-green-900 justify-center text-center items-center p-6"><strong>view our collection</strong></h3>
     
    </span>
    <section className=" grid lg:grid-cols-4 gap-20 flex">
     
<div className="border border-blue-200  w-50 h-60 justify-center">
  <div className=" ">
     
  <img 
    src="/images/apple.png" 
    className="w-50 h-30 ml-[-7] object-cover transition "/>
    <span className="">
    <h2 className="text-4xl text-gray-600 text-center">Apple</h2>
    <p className="text-gray-400 text-lg text-center mt-2">S1 <strong className="text-black text-gray-900">$1</strong></p>
    <button className="border bg-blue-400 text-white p-1 px-3 ml-10 ">¥ Add to cart</button>
  <p className=" inset-0 flex items-center justify-center text-green-400 font-bold text-xl  mt-53"></p>
  </span>
</div>
</div>


    
<div className="border border-blue-200  w-50 h-60 justify-center">
  <div className="">
    
  <img 
    src="/images/banana.png" 
    className="w-50 h-30 ml-[-7] object-cover transition-all"  />
    <span className="gap-5">
    <h2 className="text-4xl  text-gray-600 text-center">Apple</h2>
    <p className="text-gray-400 text-lg text-center mt-2">S1 <strong className="text-black text-gray-900">$1</strong></p>
    <button className="border bg-blue-400 text-white p-1 px-3 ml-10 ">¥ Add to cart</button>
  <p className=" inset-0 flex items-center justify-center text-green-400 font-bold text-xl  mt-53"></p>
  </span>
</div>
</div>


<div className="border border-blue-200  w-50 h-60 justify-center">
  <div className=" ">
    
  <img 
    src="/images/garpes.png" 
    className="w-50 h-30 ml-[-7] object-cover transition-all"/>
    <span className="gap-5">
    <h2 className="text-4xl text-gray-600 text-center">Apple</h2>
    <p className="text-gray-400 text-lg text-center mt-2">S1 <strong className="text-black text-gray-900">$1</strong></p>
    <button className="border bg-blue-400 text-white p-1 px-3 ml-10 mt-">¥ Add to cart</button>
  <p className=" inset-0 flex items-center justify-center text-green-400 font-bold text-xl  mt-53"></p>
  </span>
</div>
</div>



    
<div className="border border-blue-200 w-50 h-60 justify-center">
  <div className=" ">
    
  <img 
    src="/images/orangeee (1).png" 
    className="w-50 h-30 ml-[-7] object-cover transition-all"/>
    <span className="gap-5">
    <h2 className="text-4xl text-gray-600 text-center">Apple</h2>
    <p className="text-gray-400 text-lg text-center mt-2">S1 <strong className="text-black text-gray-900">$1</strong></p>
    <button className="border bg-blue-400 text-white p-1 px-3 ml-10 mt-">¥ Add to cart</button>
  <p className=" inset-0 flex items-center justify-center text-green-400 font-bold text-xl  mt-53"></p>
  </span>
</div>
</div>




    
<div className="border border-blue-200  w-50 h-60 justify-center">
  <div className=" ">
    
  <img 
    src="/images/passion.png" 
    className="w-50 h-30 ml-[-7] object-cover"  />
    <span className="gap-5">
    <h2 className="text-4xl text-gray-600 text-center">Apple</h2>
    <p className="text-gray-400 text-lg text-center mt-2">S1 <strong className="text-black text-gray-900">$1</strong></p>
    <button className="border bg-blue-400 text-white p-1 px-3 ml-10 mt-">¥ Add to cart</button>
  <p className=" inset-0 flex items-center justify-center text-green-400 font-bold text-xl mt-53"></p>
  </span>
</div>
</div>





    
<div className="border border-blue-200 w-50 h-60 justify-center">
  <div className=" ">
    
  <img 
    src="/images/paw paw.png" 
    className="w-50 h-30 ml-[-7] object-cover" />
    <span className="gap-5">
    <h2 className="text-4xl  text-gray-600 text-center">Apple</h2>
    <p className="text-gray-400 text-lg text-center mt-2">S1 <strong className="text-black text-gray-900">$1</strong></p>
    <button className="border bg-blue-400 text-white p-1 px-3 ml-10 mt-">¥ Add to cart</button>
  <p className=" inset-0 flex items-center justify-center text-green-400 font-bold text-xl  mt-53"></p>
  </span>
</div>
</div>




    
<div className="border border-blue-200  w-50 h-60 justify-center">
  <div className=" ">
    
  <img 
    src="/images/pine apple.png" 
    className="w-50 h-30 ml-[-7] object-cover"  />
    <span className="gap-5">
    <h2 className="text-4xl  text-gray-600 text-center">Apple</h2>
    <p className="text-gray-400 text-lg text-center mt-2">S1<strong className="text-black text-gray-900">$1</strong></p>
    <button className="border bg-blue-400 text-white p-1 px-3 ml-10 mt-">¥ Add to cart</button>
  <p className=" inset-0 flex items-center justify-center text-green-400 font-bold text-xl  mt-53"></p>
  </span>
</div>
</div>





    
<div className="border border-blue-200  w-50 h-60 justify-center">
  <div className=" ">
    
  <img 
    src="/images/pink.png" 
    className="w-50 h-30 ml-[-7] object-cover "  />
    <span className="gap-5">
    <h2 className="text-4xl  text-gray-600 text-center">Apple</h2>
    <p className="text-gray-400 text-lg text-center mt-2">S1 <strong className="text-black text-gray-900">$1</strong></p>
    <button className="border bg-blue-400 text-white p-1 px-3 ml-10 mt-">¥ Add to cart</button>
  <p className=" inset-0 flex items-center justify-center text-green-400 font-bold text-xl  mt-53"></p>
  </span>
</div>
</div>


    
<div className="border border-blue-200  w-50 h-60 justify-center">
  <div className=" ">
    
  <img 
    src="/images/remon.png" 
    className="w-50 h-30 ml-[-7] object-cover "  />
    <span className="gap-5">
    <h2 className="text-4xl  text-gray-600 text-center">Apple</h2>
    <p className="text-gray-400 text-lg text-center mt-2">S1 <strong className="text-black text-gray-900">$1</strong></p>
    <button className="border bg-blue-400 text-white p-1 px-3 ml-10 mt-">¥ Add to cart</button>
  <p className=" inset-0 flex items-center justify-center text-green-400 font-bold text-xl  mt-53"></p>
  </span>
</div>
</div>



    
<div className="border border-blue-200  w-50 h-60 justify-center">
  <div className=" ">
    
  <img 
    src="/images/tree tomato.png" 
    className="w-50 h-30 ml-[-7] object-cover "  />
    <span className="gap-5">
    <h2 className="text-4xl  text-gray-600 text-center">Apple</h2>
    <p className="text-gray-400 text-lg text-center mt-2">S1 <strong className="text-black text-gray-900">$1</strong></p>
    <button className="border bg-blue-400 text-white p-1 px-3 ml-10 mt-">¥ Add to cart</button>
  <p className=" inset-0 flex items-center justify-center text-green-400 font-bold text-xl  mt-53"></p>
  </span>
</div>
</div>




    
<div className="border border-blue-200  w-50 h-60 justify-center">
  <div className=" ">
    
  <img 
    src="/images/water melon.png" 
    className="w-50 h-30  ml-[-7] object-cover "  />
    <span className="gap-5">
    <h2 className="text-4xl  text-gray-600 text-center">Apple</h2>
    <p className="text-gray-400 text-lg text-center mt-2">S1 <strong className="text-black text-gray-900">$1</strong></p>
    <button className="border bg-blue-400 text-white p-1 px-3 ml-10 mt-">¥ Add to cart</button>
  <p className=" inset-0 flex items-center justify-center text-green-400 font-bold text-xl  mt-53"></p>
  </span>
</div>
</div>



    
<div className="border border-blue-200  w-50 h-60 justify-center">
  <div className=" ">
    
  <img 
    src="/images/appleee.png" 
    className="w-50 h-30   ml-[-7] object-cover "  />
    <span className="gap-5">
    <h2 className="text-4xl  text-gray-600 text-center">Apple</h2>
    <p className="text-gray-400 text-lg text-center mt-2">S1 <strong className="text-black text-gray-900">$1</strong></p>
    <button className="border bg-blue-400 text-white p-1 px-3 ml-10 mt-">¥ Add to cart</button>
  <p className=" inset-0 flex items-center justify-center text-green-400 font-bold text-xl  mt-53"></p>
  </span>
</div>
</div>

 
</section>
</div>

<div>
 <div className="bg-gray-950 text-white flex justify-center items-center gap-40 p-10 ">
      
        <div>
          <h1 className="font-bold text-xl flex justify-center">FreshBasket</h1>
          <p className="text-center">Copyright 2025 FreshBasket ltd</p>
          <p className="text-center">All rights reserved</p>

          <div className="flex justify-center gap-3 mt-2">
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
</div>

  );
}

export default Helo;






