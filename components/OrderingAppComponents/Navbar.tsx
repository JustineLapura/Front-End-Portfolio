"use client";

import React, { useContext, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch 
} from "react-icons/ai";
import { BsFillCartFill} from "react-icons/bs";
import Link from "next/link";
import { OrderContext } from "@/context/OrderingAppContext/OrderContext";

const Navbar = () => {
  const { cartCount, setCartCount } = useContext(OrderContext);

  return (
    <div
      className={`w-full mx-auto flex justify-between shadow items-center p-4 fixed z-10 duration-300 `}
    >
      {/* left side */}
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-xl sm:text-2xl lg:text-3xl px-2">
            <span className="font-bold">Just Eat</span>
          </h1>
        </Link>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className={`p-2 duration-300 `}>Pickup</p>
        </div>
      </div>

      {/* search input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          className="bg-transparent p-2 focus:outline-none w-full"
          type="text"
          placeholder="Search foods"
        />
      </div>

      {/* Cart button */}
      <Link href="/cart" onClick={() => setCartCount(0)}>
        <button className={` flex items-center rounded-full py-2 relative border border-black px-5`}>
          <BsFillCartFill size={20} className="mr-2" />
          Cart
          {cartCount > 0 && (
            <div className="absolute w-5 h-5 top-0 left-1 bg-red-600 text-white rounded-full text-xs">
              +{cartCount}
            </div>
          )}
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
