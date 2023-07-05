import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-4 items-center max-w-[800px] md:flex-row p-4 w-[80%] h-[60%] md:h-[30%] rounded-lg border-2 border-gray-400 shadow-lg shadow-gray-400 hover:scale-105 duration-300 ease-in cursor-pointer">
        <Image
          className="rounded-full"
          src="/profile.jpg"
          width={100}
          height={100}
          alt="profile"
        />
        <div className="flex flex-col items-center gap-2 p-4 md:items-start">
          <h1 className="text-2xl font-bold">Justine Lapura</h1>
          <p className="text-sm text-justify">
            Justine Lapura, a name that resonates both on the table tennis court
            and in the world of web development. As a talented table tennis
            athlete, Justine possesses exceptional skills, demonstrating
            agility, precision, and a fierce competitive spirit. With every
            match, Justine's dedication and determination shine through, always
            striving for greatness and embracing the thrill of victory.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
