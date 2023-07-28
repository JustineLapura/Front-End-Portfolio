import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="">
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let&apos;s build something together
          </p>
          <h1 className="text-3xl py-4 text-gray-700 font-bold">
            Hi, I&apos;m <span className="text-[#5651e5]">Justine</span>
          </h1>
          <h1 className="text-3xl py-1 text-gray-700 font-bold">
            A Front-End Web Developer
          </h1>
          <p className="py-4 text-sm text-gray-600 max-w-[70%] mx-auto text-justify md:text-center">
            I am an aspiring junior front-end developer with a passion for web
            development. I have a solid foundation in HTML, CSS, JavaScript,
            React js, Next.js, Tailwind CSS, and TypeScript. I enjoy creating
            user-friendly and visually appealing web interfaces. I believe in
            writing clean and maintainable code to deliver high-quality
            products.
          </p>
          <div className="flex items-center justify-between text-gray-700 w-[70%] max-w-[330px] m-auto py-4">
            <div className="rounded-full text-xl cursor-pointer hover:text-[#5651e5] hover:scale-110 ease-in duration-200">
              <FaLinkedinIn />
            </div>
            <Link href="https://github.com/JustineLapura?tab=repositories">
              <div className="rounded-full text-xl cursor-pointer hover:text-[#5651e5] hover:scale-110 ease-in duration-200">
                <FaGithub />
              </div>
            </Link>
            <div className="rounded-full text-xl cursor-pointer hover:text-[#5651e5] hover:scale-110 ease-in duration-200">
              <AiOutlineMail />
            </div>
            <div className="rounded-full text-xl cursor-pointer hover:text-[#5651e5] hover:scale-110 ease-in duration-200">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
