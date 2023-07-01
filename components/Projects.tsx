import Image from 'next/image'
import React from 'react'
import propertyImg from "/public/property.jpg"
import cryptoImg from "/public/crypto.jpg"
import twitchImg from "/public/twitch.jpg"
import netflixImg from "/public/netflix.jpg"
import Link from 'next/link'
import ProjectItem from './ProjectItem'

const projects = [
  {
    title: "Propety Finder",
    img: propertyImg,
    url: "/property"
  },
  {
    title: "Crypto App",
    img: cryptoImg,
    url: "/crypto"
  },
  {
    title: "Netflix App",
    img: netflixImg,
    url: "/netflix"
  },
  {
    title: "Twitch App",
    img: twitchImg,
    url: "/twitch"
  }
]

const Projects = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 className='text-2xl py-4 font-bold'>What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map(project => (
            <ProjectItem 
              title={project.title} 
              img={project.img} 
              url={project.url}
            />
          ))}


        </div>
      </div>
    </div>
  )
}

export default Projects
