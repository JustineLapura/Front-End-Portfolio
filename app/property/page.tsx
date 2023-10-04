import Image from "next/image";
import React from "react";
import auxillaryImg from "/public/auxillary.jpg";
import Project from "@/components/Project";
import { URL } from "url";

const Page = () => {
  return (
    <>
      <Project
        projectImg={auxillaryImg}
        title="Auxillaryy Services System"
        demoUrl="https://ssu-auxillary-system.vercel.app/"
        codeUrl="https://github.com/JustineLapura/Auxilliary-project"
        overview="A property finder app is a software application designed to help users search, discover, and explore real estate properties available for sale or rent. These apps aim to simplify the property search process by providing users with a comprehensive platform to find their ideal properties."
        technologies={[
          "React",
          "Next Js",
          "Tailwind CSS",
          "Typescript",
        ]}
      />
    </>
  );
};

export default Page;
