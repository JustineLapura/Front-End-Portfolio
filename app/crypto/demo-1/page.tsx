import Navbar from "@/components/DentalClinicComponents/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import dentist from "@/public/DentalClinicImgs/Dentist.gif";
import dentalChair from "@/public/DentalClinicImgs/dentalChair.gif";

const page = () => {
  return (
    <div className="flex gap-4 h-full w-full justify-evenly items-center">
      <div className="flex flex-col gap-4">
        {/* login buttons */}
        <Link href="/crypto/demo-1/appointments">
          <button className="py-3 px-6 text-xl rounded-xl duration-200 hover:scale-105 border-blue-900 bg-blue-900 font-bold text-white">
            Book Appointment
          </button>
        </Link>
        <Link href="/crypto/demo-1/admin">
          <button className="py-3 px-8 text-xl rounded-xl  bg-black font-bold text-white duration-200 hover:scale-105">
            Log in as Admin
          </button>
        </Link>
      </div>
      <div className="flex">
        <Image src={dentist} width={300} height={300} alt="dentis"/>
        <Image src={dentalChair} width={300} height={300} alt="dentis"/>
      </div>
    </div>
  );
};

export default page;
