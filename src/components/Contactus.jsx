import React, {useState} from "react";

export function Contactus({ showContactus, onHomeClick, onFruitsClick, onCartClick,onAboutusClick,onContactusClick }) {

const [selectedContactus, setselectedContactus] = useState(false)
const handleToggleContactus = () => {
    setShowContactus(!showContactus);
}

  return (
<div className="bg-stone-50 m-2 ">
<div className="h-[500px]  bg-[url('/images/basket2.png')] bg-center bg-contain bg-no-repeat w-full ">

    <div className="justify-center items-center flex flex-col text-center text-white min-h-screen gap-1">
    <p className="text-lg text-stone-100  w-[1000px]">Home Contact us</p>
    <h1 className="text-4xl w-[1000px] text-gray-100 font-bold ">Contact us</h1>
    <button className=" rounded-xl p-1 bg-green-700 "> View Detailsaaa</button>
</div>

</div>

<div className=" bg-stone-100 flex justify-center gap-5 text-center p-10">
  <p className=" w-[300px] h-[150px] bg-white font-bold text-lg text-gray-700 flex items-center justify-center"><span className="text-gray-400">Phone:</span> +250782137657</p>
  <p className=" w-[300px] h-[150px] bg-white font-bold text-lg text-gray-700 flex items-center justify-center "> <span className="text-gray-400">Email:</span> clausenge24@gmail.com</p>
  <p className=" w-[300px] h-[150px] bg-white font-bold text-lg text-gray-700 flex items-center justify-center"><span className="text-gray-400">Website: </span> Fresh-Basket</p>

</div>
<div className=" bg-stone-100 justify-center items-center flex">
  <section className="flex flex-col h-[100%] w-[40%] p-4 gap-3 rounded-md -">
      
      <form action="" method="" className="flex flex-col gap-3 rounded-xl p-10 bg-gray-200 hover:text-gray-500">

        
      
        <input  
          className="border-2 text-[#054C73] rounded-md hover:text-gray-500 p-2"
          type="text" 
          placeholder="Enter your Full Names" 
          name="Names" 
          required
        />
        
    
      
        <input  
          className="border-2 text-[#054C73] rounded-md hover:text-gray-500 p-2"
          type="tel" 
          placeholder="Enter your phone number" 
          name="phone" 
          required
        />

        <input  
          className="border-2 text-[#054C73] rounded-md hover:text-gray-500 p-2"
          type="text" 
          placeholder="Enter Your Email" 
          name="address" 
          required
        />


        <input  
          className="border-2 text-[#054C73] rounded-md hover:text-gray-500 p-2"
          type="" 
          placeholder="Enter your address" 
          name="strawberry" 
          required
        />

        <input  
          className="border-2 text-[#054C73] rounded-md hover:text-gray-500 p-2"
          type="" 
          placeholder="Enter your products" 
          name="strawberry" 
          required
        />

        <input  
          className="border-2 text-[#054C73] rounded-md hover:text-gray-500 p-2"
          type="" 
          placeholder="Enter your Quantity" 
          name="" 
          required
        />
      

        <button    
          type="submit"  
          className="border-2 text-[#054C73] rounded-md hover:text-gray-500 p-2 bg-blue-200 hover:bg-blue-300"
        >
          Submit
        </button>
      </form>
    </section>
    </div>

<div className="bg-gray-700 text-white flex justify-center items-center gap-40 p-10 ">
  <div className="mb-9">
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

  );
}
export default Contactus;