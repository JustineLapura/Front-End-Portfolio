import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex justify-center items-center px-4 py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="text-3xl font-bold py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Hey there! I&apos;m Justine, a passionate web developer with a
            Bachelor of Science in Information Technology. I love crafting
            user-friendly websites using HTML, CSS, and JavaScript. I&apos;ve also
            mastered popular frameworks like React.js and Next.js to create
            dynamic web applications.
          </p>
          <p className="py-2 text-gray-600">
            Check out some of my latest projects below, and let&apos;s build the
            future of the web together! Feel free to get in touch—I&apos;m always
            excited to collaborate on new opportunities.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 cursor-pointer underline ">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto rounded-xl flex justify-center items-center p-4 hover:scale-105 ease-in duration-300 cursor-pointer">
          <Link href="https://www.facebook.com/justine.lapura.5">
            <Image
              className="rounded-xl"
              src="/profile.jpg"
              width={500}
              height={400}
              alt="about picture"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
