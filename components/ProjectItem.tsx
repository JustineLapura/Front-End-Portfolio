import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

type ProjectType = {
    title: string;
    img: StaticImageData;
    url: string;
}

const ProjectItem = ({title, img, url}: ProjectType ) => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden h-[400px] w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image className='round-lg group-hover:opacity-10 h-full w-full rounded-lg' src={img} alt="property"/>
            <div className="hidden group-hover:block absolute top-[50-%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className='text-2xl text-white tracking-wider text-center font-bold'>{title}</h3>
              <p className='text-xl pb-4 pt-2 text-white text-center'>React JS</p>
              <Link href={url}>
                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
              </Link>
            </div>
          </div>
  )
}

export default ProjectItem
