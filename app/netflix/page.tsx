import Project from "@/components/Project";
import React from "react";
import netflixImg from "/public/netflix.jpg";

const page = () => {
  return (
    <>
      <Project
        projectImg={netflixImg}
        title="Netflix App"
        url="/netflix-demo-1"
        overview="A Netflix app is a software application that allows users to access and stream a vast library of movies, TV shows, documentaries, and other video content provided by Netflix, a popular subscription-based streaming service. The Netflix app offers a user-friendly interface for browsing, searching, and watching a wide range of entertainment content."
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

export default page;
