import React from "react"
export function Form() {
  return (
    <section className="flex flex-col h-[100%] w-[40%] p-4 gap-3 rounded-md   absolute top-[-40px] left-0 z-30  mt-20 ">
      
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
          placeholder="address" 
          name="address" 
          required
        />


        <input  
          className="border-2 text-[#054C73] rounded-md hover:text-gray-500 p-2"
          type="" 
          placeholder="" 
          name="strawberry" 
          required
        />

        <input  
          className="border-2 text-[#054C73] rounded-md hover:text-gray-500 p-2"
          type="" 
          placeholder="" 
          name="strawberry" 
          required
        />

        <input  
          className="border-2 text-[#054C73] rounded-md hover:text-gray-500 p-2"
          type="" 
          placeholder="" 
          name="strawberry" 
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
  )
}

export default Form;
