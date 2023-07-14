import Link from "next/link";
import React from "react";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { FiSettings } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="fixed top-[100px] w-20 lg:w-40 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center uppercase text-sm font-bold w-full">
          <Link href="#">
            <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2 my-1"></span>
          <Link href="/crypto/demo-1/admin">
            <div className="group w-full flex justify-between items-center gap-4 px-2 lg:mr-3 lg:hover:bg-gray-100 ">
              <div className="bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                <RxDashboard size={20} />
              </div>
              <h1 className="hidden lg:block mr-4">Admin</h1>
            </div>
          </Link>
          <Link href="/crypto/demo-1/admin/schedule">
            <div className="group w-full flex justify-between items-center gap-4 px-2 lg:hover:bg-gray-100">
              <div className="bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                <RxPerson size={20} />
              </div>
              <h1 className="hidden lg:block">Schedule</h1>
            </div>
          </Link>
          <Link href="/crypto/demo-1/admin/services">
            <div className="group w-full flex justify-between items-center gap-4 px-2 lg:hover:bg-gray-100">
              <div className="bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                <HiOutlineShoppingBag size={20} />
              </div>
              <h1 className="hidden lg:block">Services</h1>
            </div>
          </Link>
          <Link href="/">
            <div className="group w-full flex justify-between items-center gap-4 px-2 lg:hover:bg-gray-100">
              <div className="bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                <FiSettings size={20} />
              </div>
              <h1 className="hidden lg:block">Settings</h1>
            </div>
          </Link>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
