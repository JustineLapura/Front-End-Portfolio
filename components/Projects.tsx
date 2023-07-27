import Image from "next/image";
import React from "react";
import orderingImg from "/public/ordering.jpg";
import cryptoImg from "/public/crypto.jpg";
import twitchImg from "/public/twitch.jpg";
import netflixImg from "/public/netflix.jpg";
import dentalImg from "/public/DentalClinic.jpg";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    title: "Food Ordering App",
    img: orderingImg,
    url: "/property",
    framework: 'Next js'
  },
  {
    title: "Dental Clinic App",
    img: dentalImg,
    url: "/crypto",
    framework: 'React js'
  },
  {
    title: "Netflix App",
    img: netflixImg,
    url: "/netflix",
    framework: 'Next js'
  },
  {
    title: "Twitch App",
    img: twitchImg,
    url: "/twitch",
    framework: 'Next js'
  },
];

const Projects = () => {
  return (
    <div id="projects" className="w-full px-4">
      <div className="max-w-[1240px] mx-auto py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="text-2xl py-4 font-bold">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectItem
              key={project.title}
              title={project.title}
              img={project.img}
              url={project.url}
              framework={project.framework}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

// import Image from 'next/image';
// import React from 'react';
// import orderingImg from '/public/ordering.jpg';
// import cryptoImg from '/public/crypto.jpg';
// import twitchImg from '/public/twitch.jpg';
// import netflixImg from '/public/netflix.jpg';
// import dentalImg from '/public/DentalClinic.jpg';
// import Link from 'next/link';
// import ProjectItem from './ProjectItem';

// const projects = [
//   {
//     title: 'Food Ordering App',
//     img: orderingImg,
//     url: '/property',
//   },
//   {
//     title: 'Dental Clinic',
//     img: dentalImg,
//     url: '/crypto',
//   },
//   {
//     title: 'Netflix App',
//     img: netflixImg,
//     url: '/netflix',
//   },
//   {
//     title: 'Twitch App',
//     img: twitchImg,
//     url: '/twitch',
//   },
// ];

// const Projects = () => {
//   return (
//     <div id='projects' className='w-full px-4'>
//       <div className='max-w-[1240px] mx-auto py-16'>
//         <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
//           Projects
//         </p>
//         <h2 className='text-2xl py-4 font-bold'>What I've Built</h2>
//         <div className='grid md:grid-cols-2 gap-8'>
//           {projects.map((project) => (
//             <ProjectItem
//               key={project.title}
//               title={project.title}
//               img={project.img}
//               url={project.url}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;
