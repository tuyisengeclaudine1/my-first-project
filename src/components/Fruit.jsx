import React, { useState } from "react";
 
export function Fruit() {
  const fruits = [
    { id: 1, name: "Strawberry", price: "$2", img: "/images/pink.png", description: "red and sweet" },
    { id: 2, name: "Apple", price: "$3", img: "/images/apple.png", description: "green and sweet" },
    { id: 3, name: "Banana", price: "$3", img: "/images/banana.png", description: "yellow and soft" },
    { id: 4, name: "Pine apple", price: "$3", img: "/images/pine apple.png", description: "yellow and sweet" },
    { id: 5, name: "Orange", price: "$3", img: "/images/orangeee (1).png", description: "so sweet" },
    { id: 6, name: "Tree Tomato", price: "$3", img: "/images/tree tomato.png", description: "red and sweet" },
    { id: 7, name: "Remon", price: "$3", img: "/images/remon.png", description: "greec and sweet" },
    { id: 8, name: "Water Melon", price: "$3", img: "/images/water melon.png", description: "red and sweet" },
    { id: 9, name: "Grapes", price: "$3", img: "/images/garpes.png", description: "red and sweet" },
    { id: 10, name: "Mango", price: "$3", img: "/images/mangoes.png", description: "yellow and sweet" },
    { id: 11, name: "Passion", price: "$3", img: "/images/passion.png", description: "so soft" },
    { id: 12, name: "Paw Paw", price: "$3", img: "/images/paw paw.png", description: "yellow and sweet" },
  ];

  const [selectedFruit, setSelectedFruit] = useState(null);

  return (

    <div className="p-4 w-full ">
      
<div className="h-[500px] p-2 bg-[url('/images/basket2.png')] bg-center bg-contain bg-no-repeat w-full ">

    <div className="justify-center items-center flex flex-col text-center text-white min-h-screen mt-[30px] gap-1">
         <h1 className="text-4xl w-[1000px] text-gray-100 font-bold">100% We Serve Fresh Fruits</h1>
    <p className="text-lg text-stone-100  ">We Deliver Organic Fruits</p>
    <button className=" rounded-xl p-1 bg-green-700 "> View Details</button>

</div>
      </div>
      <h2 className="text-center font-bold text-[#054C73] text-3xl">View Our Collection</h2>
      <p></p>

      <div className="absolute grid lg:grid-cols-3 gap-20 w-full justify-center items-center rounded-2xl p-20">
        {fruits.map((fruit) => (
          <img
            key={fruit.id}
            src={fruit.img}
            alt={fruit.name}
            className="cursor-pointer hover:scale-105 w-100 h-75 bg-stone-100 object-cover"
            onClick={() => setSelectedFruit(fruit)}
          />
        ))}  
</div>


    
      {selectedFruit && (
        <div className=" rounded-2xl shadow-xl absolute bg-stone-100 justify-center ">
          <button
            className="text-blue-500 font-bold text-xl w-full flex items-center justify-center rounded-full"
            onClick={() => setSelectedFruit(null)}
          >
            Close
          </button>

          <img
            src={selectedFruit.img}
            alt={selectedFruit.name}
            className=" w-90 h-70 object-cover bg-white "
          />

          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-blue-500 text-center font-bold ">{selectedFruit.name}</h2>
            <p className="text-gray-600 text-center font-bold text-xl">price: {selectedFruit.price}</p>
            <p className="text-gray-600 text-xl text-center font-bold">{selectedFruit.description}</p>

          </div>
        </div>

      )}

    </div>
    

  );
}

export default Fruit;


