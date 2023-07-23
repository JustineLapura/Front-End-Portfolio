import Navbar from "@/components/DentalClinicComponents/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import dentist from "@/public/DentalClinicImgs/Dentist.gif";
import dentalChair from "@/public/DentalClinicImgs/dentalChair.gif";

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 h-full w-full justify-evenly items-center px-4">
      <div className="mt-8 md:mt-0 flex flex-col gap-4 text-sm md:text-md lg:text-xl">
        {/* login buttons */}
        <Link href="/crypto/demo-1/appointments">
          <button className="py-3 px-6 w-[200px] lg:w-[250px] rounded-xl duration-200 hover:scale-105 border-blue-900 bg-blue-900 font-bold text-white">
            Book Appointment
          </button>
        </Link>
        <Link href="/crypto/demo-1/admin">
          <button className="py-3 px-8 w-[200px] lg:w-[250px] rounded-xl  bg-black font-bold text-white duration-200 hover:scale-105">
            Log in as Admin
          </button>
        </Link>
      </div>
      <div className="flex">
        <Image className="w-[200px] sm:w-[250px] md:w-[300px]" src={dentist} width={300} height={300} alt="dentis"/>
        <Image className="w-[200px] sm:w-[250px] md:w-[300px]" src={dentalChair} width={300} height={300} alt="dentis"/>
      </div>
    </div>
  );
};

export default Page;
