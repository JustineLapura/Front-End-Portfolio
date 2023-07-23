import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="w-full fixed h-20 z-[100] my-20">
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <Link href="/">
            <h1 className="text-2xl font-bold">Logo</h1>
          </Link>
          <div className="">
            <ul className="hidden md:flex gap-4 uppercase">
              <Link href="/challenges">
                <li className="hover:font-bold hover:scale-100 ease-in duration-300 hover:border-b border-gray-500">
                  Home
                </li>
              </Link>
              <Link href="/challenges">
                <li className="hover:font-bold hover:scale-100 ease-in duration-300 hover:border-b border-gray-500">
                  Something
                </li>
              </Link>
              <Link href="/challenges">
                <li className="hover:font-bold hover:scale-100 ease-in duration-300 hover:border-b border-gray-500">
                  Next Page
                </li>
              </Link>
              <Link href="/challenges">
                <li className="hover:font-bold hover:scale-100 ease-in duration-300 hover:border-b border-gray-500">
                  another page
                </li>
              </Link>
              <Link href="/challenges">
                <li className="hover:font-bold hover:scale-100 ease-in duration-300 hover:border-b border-gray-500">
                  Last Page
                </li>
              </Link>
            </ul>
          </div>
          <div className="px-4 hidden md:flex">
            <input
              className="border-2 border-gray-400 rounded-full p-2"
              type="text"
              placeholder="Search something here..."
            />
          </div>
          <div className="md:hidden">
            <AiOutlineMenu className="cursor-pointer" size={25} />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default layout;
