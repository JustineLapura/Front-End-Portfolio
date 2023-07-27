import Image from "next/image";
import React from "react";
import orderingImg from "/public/ordering.jpg";
import Project from "@/components/Project";
import { URL } from "url";

const Page = () => {
  return (
    <>
      <Project
        projectImg={orderingImg}
        title="Food Ordering App"
        demoUrl="/property/demo-1"
        codeUrl="https://github.com/JustineLapura/Just-Eats-Food-ordering-app"
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
