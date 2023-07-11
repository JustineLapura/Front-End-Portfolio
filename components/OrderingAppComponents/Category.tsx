"use client";
import { ThemeContext } from '@/context/OrderingAppContext/ThemeContext'
import { categories } from "@/data/OrderingAppData/data";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const Category = () => {
    const {mode, toggle} = useContext(ThemeContext)
//   console.log(categories);
  return (
    <div className="max-w-[1640px] px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/* Categories  */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((category) => (
          <div
            className="bg-gray-200 rounded-lg p-4 flex justify-between items-center"
            key={category.id}
          >
            <h2 className="font-bold sm:text-xl">{category.name}</h2>
            <Image
              className="w-20 "
              src={category.image}
              alt={category.name}
              width={200}
              height={100}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center py-5">
        <Link className={`${mode === "light" ? "border-black hover:border-white hover:bg-black hover:text-white" : "border-white text-white hover:text-black hover:border-black hover:bg-white"} border-2 rounded-full px-5 py-1 text-xl font-bold`} href="/property">Go Back</Link>
      </div>
    </div>
  );
};

export default Category;
