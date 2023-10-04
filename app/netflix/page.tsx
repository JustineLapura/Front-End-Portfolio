import Project from "@/components/Project";
import React from "react";
import netflixImg from "/public/netflix.jpg";

const Page = () => {
  return (
    <>
      <Project
        projectImg={netflixImg}
        title="Food Ordering App"
        demoUrl="/property/demo-1"
        codeUrl="https://github.com/JustineLapura/Just-Eats-Food-ordering-app"
        overview="A property finder app is a software application designed to help users search, discover, and explore real estate properties available for sale or rent. These apps aim to simplify the property search process by providing users with a comprehensive platform to find their ideal properties."
        technologies={[
          "Next Js",
          "Tailwind CSS",
          "Typescript",
          "Firebase",
          "Prisma",
        ]}
      />
    </>
  );
};

export default Page;
