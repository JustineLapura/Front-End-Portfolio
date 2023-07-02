"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])

  const handleNav = () => {
    setNav(prevNav =>  !prevNav)
  }
  return (
    <div className={shadow ? "fixed w-full h-20 shadow-xl z-[100]" : "fixed w-full h-20 z-[100]"}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src="/logo.png" width={70} height={40} alt="logo"/>
        </Link>
        <div className="">
          <ul className='hidden md:flex'>
            <Link href="/">
              <li className='ml-10 text-sm uppercase hover:border-b'>
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className='ml-10 text-sm uppercase hover:border-b'>
               about
              </li>
            </Link>
            <Link href="/#skills">
              <li className='ml-10 text-sm uppercase hover:border-b'>
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className='ml-10 text-sm uppercase hover:border-b'>
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className='ml-10 text-sm uppercase hover:border-b'>
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25}/>
          </div>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={
          nav 
            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500" 
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
            }
            >
          <div className="">
            <div className="flex w-full items-center justify-between">
              <Image src='/logo.png' width={87} height={35} alt='logo'/>
              <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className='text-sm sm:w-[85%] md:w-[90%] p-4'>Let's build something legendary together.</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className='uppercase'>
              <Link href="/">
                <li className='py-4 text-sm' onClick={handleNav}>Home</li>
              </Link>
              <Link href="/#about">
                <li className='py-4 text-sm' onClick={handleNav}>About</li>
              </Link>
              <Link href="/#skills">
                <li className='py-4 text-sm' onClick={handleNav}>skills</li>
              </Link>
              <Link href="/#projects">
                <li className='py-4 text-sm' onClick={handleNav}>Projects</li>
              </Link>
              <Link href="/#contact">
                <li className='py-4 text-sm' onClick={handleNav}>Contact</li>
              </Link>
            </ul>
            <div className="pt-20">
              <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <nav className="bg-white shadow">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="flex items-center justify-between h-16">
    //         <div className="flex-shrink-0">
    //           <span className="font-bold text-xl">Jahz 10 </span>
    //         </div>
    //         <div className="hidden md:block">
    //           <div className="ml-10 flex items-baseline space-x-4">
    //             <Link
    //               href="/"
    //               className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
    //             >
    //               Home
    //             </Link>
    //             <Link
    //               href="/about"
    //               className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
    //             >
    //               Projects
    //             </Link>
    //             <Link
    //               href="/contact"
    //               className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
    //             >
    //               Contact
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
  )
}
export default Navbar
