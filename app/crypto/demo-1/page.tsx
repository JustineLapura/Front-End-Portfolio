import Navbar from "@/components/DentalClinicComponents/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 h-full w-full justify-center items-center">
      {/* login buttons */}
      <Link href="/crypto/demo-1/appointments">
        <button className="py-3 px-6 text-xl rounded-xl duration-200 hover:scale-105 border-blue-900 bg-blue-900 font-bold text-white">
          Book Appointment
        </button>
      </Link>
      <button className="py-3 px-8 text-xl rounded-xl  bg-black font-bold text-white duration-200 hover:scale-105">
        Log in as Admin
      </button>
    </div>
  );
};

export default page;
