import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";

type ProjectProps = {
  projectImg: StaticImageData;
  title: string;
  technologies: string[];
  overview: string;
  url: string;
};

const Project = ({
  projectImg,
  title,
  technologies,
  overview,
  url
}: ProjectProps) => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={projectImg}
          alt=""
        />
        <div className="absolute text-white z-10 p-2 top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="py-2 text-2xl font-bold">{title}</h2>
          <h3 className="text-sm font-bold">
            React Js / Tailwind CSS / Typescript
          </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="text-2xl font-bold">Overview</h2>
          <p>{overview}</p>
          <Link href={url}>
          <button className="bg-[#6561e5] rounded-lg mt-2 text-white px-6 py-1 mr-6">
            DEMO
          </button>
          </Link>
          <button className="bg-[#6561e5] rounded-lg mt-2 text-white px-6 py-1">
            CODE
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid  grid-cols-3 md:grid-cols-1">
              {technologies.map((tech, index) => (
                <p key={index} className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> {tech}
                </p>
              ))}
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline font-bold cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Project;
