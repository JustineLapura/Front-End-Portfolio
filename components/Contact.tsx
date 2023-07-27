import Image from "next/image";
import React from "react";
import profile from "/public/champion.jpg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-10 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4 font-bold text-2xl">Get in Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div className="">
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={profile}
                  alt="Profile"
                />
              </div>
              <div className="">
                <h2 className="py-4 font-bold text-2xl">Justine  Lapura</h2>
                <p>Front-End Developer</p>
                <p className="py-3">
                  I am available for freelance or full-time position. Contact me
                  and let&apos;s talk.
                </p>
              </div>
              <div className="">
                <p className="text-xl uppercase pt-8">Connect with me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full p-5 cursor-pointer hover:text-[#5651e5] hover:scale-110 ease-in duration-500">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full p-5 cursor-pointer hover:text-[#5651e5] hover:scale-110 ease-in duration-500">
                    <FaGithub />
                  </div>
                  <div className="rounded-full p-5 cursor-pointer hover:text-[#5651e5] hover:scale-110 ease-in duration-500">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full p-4 cursor-pointer hover:text-[#5651e5] hover:scale-110 ease-in duration-500">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-1">Name</label>
                    <input
                      className="border-2 rounded-lg p-2 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-1">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-2 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-1">
                  <label className="uppercase text-sm py-1">Email</label>
                  <input
                    className="border-2 rounded-lg p-2 flex border-gray-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-1">
                  <label className="uppercase text-sm py-1">Subject</label>
                  <input
                    className="border-2 rounded-lg p-2 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-1">
                  <label className="uppercase text-sm py-1">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-2 border-gray-300"
                    rows={8}
                  ></textarea>
                </div>
              </form>
              <button className="w-full p-4 text-gray-100 mt-4 bg-[#5651e5] rounded-full">
                Send Message
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-500">
            <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

             


// import Image from "next/image";
// import React from "react";
// import profile from "/public/champion.jpg";
// import { FaLinkedinIn, FaGithub } from "react-icons/fa";
// import { AiOutlineMail } from "react-icons/ai";
// import { BsFillPersonLinesFill } from "react-icons/bs";
// import Link from "next/link";
// import { HiOutlineChevronDoubleUp } from "react-icons/hi";
// const Contact = () => {
//   return (
//     <div id="contact" className="w-full lg:h-screen">
//       <div className="max-w-[1240px] m-auto px-2 py-10 w-full">
//         <p className="text-xl tracking-widest uppercase text-[#5651e5]">
//           Contact
//         </p>
//         <h2 className="py-4 font-bold text-2xl">Get in Touch</h2>
//         <div className="grid lg:grid-cols-5 gap-8">
//           {/* left */}
//           <div className="col-span-3 lg:col-span-2 w-full h-full rounded-xl p-4">
//             <div className="lg:p-4 h-full">
//               <div className="">
//                 <Image
//                   className="rounded-xl hover:scale-105 ease-in duration-300"
//                   src={profile}
//                   alt="Profile"
//                 />
//               </div>
//               <div className="">
//                 <h2 className="py-4 font-bold text-2xl">Justine  Lapura</h2>
//                 <p>Front-End Developer</p>
//                 <p className="py-3">
//                   I am available for freelance or full-time position. Contact me
//                   and let's talk.
//                 </p>
//               </div>
//               <div className="">
//                 <p className="text-xl uppercase pt-8">Connect with me</p>
//                 <div className="flex items-center justify-between py-4">
//                   <div className="rounded-full p-5 cursor-pointer hover:scale-110 ease-in duration-500">
//                     <FaLinkedinIn />
//                   </div>
//                   <div className="rounded-full p-5 cursor-pointer hover:scale-110 ease-in duration-500">
//                     <FaGithub />
//                   </div>
//                   <div className="rounded-full p-5 cursor-pointer hover:scale-110 ease-in duration-500">
//                     <AiOutlineMail />
//                   </div>
//                   <div className="rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-500">
//                     <BsFillPersonLinesFill />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* right */}
//           <div className="col-span-3 w-full h-auto rounded-xl lg:p-4">
//             <div className="p-4">
//               <form>
//                 <div className="grid md:grid-cols-2 gap-4 w-full py-2">
//                   <div className="flex flex-col">
//                     <label className="uppercase text-sm py-1">Name</label>
//                     <input
//                       className="border-2 rounded-lg p-2 flex border-gray-300"
//                       type="text"
//                     />
//                   </div>
//                   <div className="flex flex-col">
//                     <label className="uppercase text-sm py-1">
//                       Phone Number
//                     </label>
//                     <input
//                       className="border-2 rounded-lg p-2 flex border-gray-300"
//                       type="text"
//                     />
//                   </div>
//                 </div>
//                 <div className="flex flex-col py-1">
//                   <label className="uppercase text-sm py-1">Email</label>
//                   <input
//                     className="border-2 rounded-lg p-2 flex border-gray-300"
//                     type="email"
//                   />
//                 </div>
//                 <div className="flex flex-col py-1">
//                   <label className="uppercase text-sm py-1">Subject</label>
//                   <input
//                     className="border-2 rounded-lg p-2 flex border-gray-300"
//                     type="text"
//                   />
//                 </div>
//                 <div className="flex flex-col py-1">
//                   <label className="uppercase text-sm py-1">Message</label>
//                   <textarea
//                     className="border-2 rounded-lg p-2 border-gray-300"
//                     rows={8}
//                   ></textarea>
//                 </div>
//               </form>
//               <button className="w-full p-4 text-gray-100 mt-4 bg-[#5651e5] rounded-full">
//                 Send Message
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center py-12">
//           <Link href="/">
//             <div className="rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-500">
//               <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
