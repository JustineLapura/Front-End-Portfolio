import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type ProjectType = {
  title: string;
  img: StaticImageData;
  url: string;
};

const ProjectItem = ({ title, img, url }: ProjectType) => {
  return (
    <div className="group relative h-[400px] w-full transform overflow-hidden rounded-xl border p-4 shadow-xl duration-300 hover:bg-black/60">
      <Image
        className="h-full w-full rounded-xl group-hover:scale-110 duration-300 border object-cover object-center group-hover:mix-blend-overlay"
        src={img}
        alt="property"
      />
      <div className="absolute inset-0 hidden flex-col items-center justify-center gap-4 group-hover:flex">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <p className="font-semibold text-white">Next.Js</p>
        <Link href={url}>
          <p className="text-center py-3 px-10 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;

//  Card 1
{
  /* <div className="relative flex items-center justify-center overflow-hidden h-[400px] w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
<Image className='round-lg group-hover:opacity-10 h-full w-full rounded-lg' src={img} alt="property"/>
<div className="hidden group-hover:block absolute top-[50-%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
  <h3 className='text-2xl text-white tracking-wider text-center font-bold'>{title}</h3>
  <p className='text-xl pb-4 pt-2 text-white text-center'>React JS</p>
  <Link href={url}>
    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
  </Link>
</div>
</div> */
}
