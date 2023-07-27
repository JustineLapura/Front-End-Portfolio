import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type ProjectType = {
  title: string;
  img: StaticImageData;
  url: string;
  framework: string;
};

const ProjectItem = ({ title, img, url, framework }: ProjectType) => {

  return (
    <Link href={url}>
      <div className="group relative w-full max-w-[550px] transform transition overflow-hidden rounded-2xl duration-300">
        <Image
          className="h-full w-full rounded-3xl object-contain object-center"
          src={img}
          alt="property"
        />
        <div className="absolute pb-4 bottom-0 h-1/2 bg-gradient-to-t from-black w-full hidden items-end justify-center transition-all duration-300 gap-4 group-hover:flex group-hover:">
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          <p className=" text-white">{framework}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;

