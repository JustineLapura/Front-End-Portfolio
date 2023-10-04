"use client";
import React from "react";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import { delay, motion } from "framer-motion";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="">
          <motion.p
            className="uppercase text-sm tracking-widest text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5 }}
          >
            Let&apos;s build something together
          </motion.p>
          <motion.h1
            className="text-3xl py-4 text-gray-700 font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Hi, I&apos;m <span className="text-[#5651e5]">Justine</span>
          </motion.h1>
          <motion.h1
            className="text-3xl py-1 text-gray-700 font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            A Front-End Web Developer
          </motion.h1>
          <motion.p
            className="py-4 text-sm text-gray-600 max-w-[70%] mx-auto text-justify md:text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            I am an aspiring junior front-end developer with a passion for web
            development. I have a solid foundation in HTML, CSS, JavaScript,
            React js, Next.js, Tailwind CSS, and TypeScript. I enjoy creating
            user-friendly and visually appealing web interfaces. I believe in
            writing clean and maintainable code to deliver high-quality
            products.
          </motion.p>
          <div className="flex items-center justify-between text-gray-700 w-[70%] max-w-[330px] m-auto py-4">
            <Link href="https://www.linkedin.com/in/justinelapura/">
              <motion.div
                className="rounded-full text-xl cursor-pointer hover:text-[#5651e5] hover:scale-110 ease-in duration-200"
                initial={{ y: 500 }}
                animate={{ y: 0 }}
                transition={{ delay: 2 }}
              >
                <FaLinkedinIn />
              </motion.div>
            </Link>
            <Link href="https://github.com/JustineLapura?tab=repositories">
              <motion.div
                className="rounded-full text-xl cursor-pointer hover:text-[#5651e5] hover:scale-110 ease-in duration-200"
                initial={{ y: 500 }}
                animate={{ y: 0 }}
                transition={{ delay: 2.1 }}
              >
                <FaGithub />
              </motion.div>
            </Link>
            <Link href="mailto:justinelapura002@gmail.com">
              <motion.div
                className="rounded-full text-xl cursor-pointer hover:text-[#5651e5] hover:scale-110 ease-in duration-200"
                initial={{ y: 500 }}
                animate={{ y: 0 }}
                transition={{ delay: 2.2 }}
              >
                <AiOutlineMail />
              </motion.div>
            </Link>
            <Link href="https://www.facebook.com/justine.lapura.5">
              <motion.div
                className="rounded-full text-xl cursor-pointer hover:text-[#5651e5] hover:scale-110 ease-in duration-200"
                initial={{ y: 500 }}
                animate={{ y: 0 }}
                transition={{ delay: 2.3 }}
              >
                <FaFacebook />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
