import React from "react";
export function Header({ onHomeClick, onFruitsClick, onCartClick,onAboutusClick,onContactusClick }) {
  return (
    <header className="flex p-5 items-center justify-between bg-gray-100 m-2">
      <h1>
        <strong className="text-2xl text-[#054C73] hover:text-gray-400">
          Fresh-basket
        </strong>
      </h1>

      <div className="relative items-center justify-center flex ml-40 hover hover:green-900">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
          🔍
        </div>

        <input
          type="text"
          placeholder="Search here..."
          className="w-full p-2 pl-10 pr-12 border border-gray-300 rounded-2xl 
          focus:outline-none focus:ring-2 focus:ring-blue-900"
        />

        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-cyan-800 text-white 
          px-3 py-1 rounded-xl hover:bg-blue-950"
        >
          Search
        </button>
      </div>

      <nav>
        <ul className="flex gap-5 text-[#333333]">
          <li
            className="hover:text-gray-400 cursor-pointer"
               onClick={onHomeClick}
          >
            <a href="#Home">Home</a>
          </li>

          <li
            className="hover:text-gray-400 cursor-pointer"
            onClick={onFruitsClick}
          >
            <a href="#Helo">Fruits</a>
          </li>

          <li
            className="hover:text-gray-400 cursor-pointer"
            onClick={onCartClick}
          >
            Cart
          </li>

          <li className="hover:text-gray-400 cursor-pointer"onClick={onAboutusClick}>
            <a href="#About us">About us</a>
          </li>

          <li className="hover:text-gray-400 cursor-pointer"onClick={onContactusClick}>
            <a href="#Contact us">Contact us</a>
          </li>
        </ul>
      </nav>
    </header>

  );
}

export default Header;
