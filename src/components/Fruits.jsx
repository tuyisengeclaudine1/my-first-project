import React, { useState } from "react";


export function Fruits() {
  
  const [selectedFruits, setSelectedFruits] = useState(null);
    
  return (
    <section className="  relative grid lg:grid-cols-4 gap-14  p-5  bg-gradient-to-r from-red-200  to-yellow-200  items-center text-center flex items-center  rounded-md w-full m-2  ">
  <div className=" w-70 h-60 border rounded-xl overflow-hidden">
  <img 
    src="/images/apple.png" 
    className="w-full h-full object-cover transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-[#054C73]" />
  <p className=" inset-0 flex items-center justify-center text-green-400 font-bold text-xl  mt-53">Orange</p>
</div>

      <div className=" w-70 h-60  rounded-xl overflow-hidden">
  <img 
    src="/images/banana.png" 
    className="w-full h-full object-cover transition-all duration-300 hover:shadow-2xl hover:scale-105 rounded-xl bg-[#054C73]" />
  <p className=" inset-0 flex items-center justify-center text-green-400 font-bold text-xl  mt-53">Banana</p>
</div>
  <div className=" w-70 h-60 rounded-xl overflow-hidden">
  <img 
    src="/images/garpes.png" 
    className="w-full h-full object-cover transition-all duration-300 hover:shadow-2xl hover:scale-105 rounded-xl bg-[#054C73]" />
  <p className=" inset-0 flex items-center justify-center text-green-400 font-bold text-xl  mt-53">Grapes</p>
</div>
  <div className=" w-70 h-60 rounded-xl overflow-hidden">
  <img 
    src="/images/water melon.png" 
    className="w-full h-full object-cover transition-all duration-300 hover:shadow-2xl hover:scale-105 rounded-xl bg-[#054C73] " />
  <p className=" inset-0 flex items-center justify-center text-green-400 font-bold text-xl mt-53">Water Melon</p>
</div>
  <div className=" w-70 h-60 rounded-xl overflow-hidden">
  <img 
    src="/images/mangoes.png" 
    className="w-full h-full object-cover transition-all duration-300 hover:shadow-2xl hover:scale-105 rounded-xl bg-[#054C73] " />
  <p className="inset-0 flex items-center justify-center text-green-400 font-bold text-xl  mt-53">Mango</p>
</div>
  <div className=" w-70 h-60 rounded-xl overflow-hidden">
  <img 
    src="/images/pine apple.png" 
    className="w-full h-full object-cover rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-[#054C73]  hover:shadow-2xl   border" />
  <p className=" inset-0 flex items-center justify-center text-green-400 font-bold text-xl mt-53"> Pine Apple</p>
</div>
  <div className=" w-70 h-60 rounded-xl overflow-hidden">
  <img 
    src="/images/pink.png" 
    className="w-full h-full object-cover transition-all duration-300 hover:shadow-2xl hover:scale-105 rounded-xl bg-[#054C73] " />
  <p className=" inset-0 flex items-center justify-center text-green-400 font-bold text-xl mt-53">Strawberry</p>
</div>
  <div className=" w-70 h-60 rounded-xl overflow-hidden">
  <img 
    src="/images/paw paw.png" 
    className="w-full h-full object-cover transition-all duration-300 hover:shadow-2xl hover:scale-105 rounded-xl bg-[#054C73] " />
  <p className=" inset-0 flex items-center justify-center text-green-400 font-bold text-xl mt-53">Paw Paw</p>
</div>
  <div className=" w-70 h-60 rounded-xl overflow-hidden">
  <img 
    src="/images/passion.png" 
    className="w-full h-full object-cover transition-all duration-300 hover:shadow-2xl hover:scale-105 rounded-xl bg-[#054C73] " />
  <p className=" inset-0 flex items-center justify-center text-green-400 font-bold text-xl mt-53">Passion</p>
</div>
  <div className=" w-70 h-60 rounded-xl overflow-hidden">
  <img 
    src="/images/orangeee (1).png" 
    className="w-full h-full object-cover transition-all duration-300 hover:shadow-2xl hover:scale-105 rounded-xl bg-[#054C73] " />
  <p className=" inset-0 flex items-center justify-center text-green-400 font-bold text-xl  mt-53"> Orange</p>
</div>
  <div className=" w-70 h-60 rounded-xl overflow-hidden">
  <img 
    src="/images/remon.png" 
    className="w-full h-full object-cover transition-all duration-300 hover:shadow-2xl hover:scale-105 rounded-xl bg-[#054C73] " />
  <p className=" inset-0 flex items-center justify-center text-green-400 font-bold text-xl mt-53">Remon</p>
</div>
  <div className=" w-70 h-60 rounded-xl overflow-hidden">
  <img 
    src="/images/tree tomato.png" 
    className="w-full h-full object-cover transition-all duration-300 hover:shadow-2xl hover:scale-105 rounded-xl bg-[#054C73] " />
  <p className=" inset-0 flex items-center justify-center text-green-400 font-bold text-xl  mt-53">Tree tomato</p>
</div>

    </section>
  );
}
export default Fruits;