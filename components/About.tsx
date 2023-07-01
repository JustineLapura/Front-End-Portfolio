import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex justify-center items-center py-16'>
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">

            <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
            <h2 className='text-3xl font-bold py-4'>Who I Am</h2>
            <p className='py-2 text-gray-600'>
                As a Bachelor of Science in Information Technology graduate with a passion for web development and a background in programming languages such as C language, VB.NET, and Python, I have developed a strong foundation in software development. However, my true love lies in web development, where I have honed my skills and expertise.
            </p>
            <p className='py-2 text-gray-600'>
            I have dedicated my time and efforts to mastering various web technologies, frameworks, and languages to create exceptional user experiences and functional web applications. Through my projects, I have gained experience in HTML, CSS, JavaScript, and popular frameworks such as React.js and Next.js. I am proficient in building responsive and visually appealing websites that prioritize user-friendly interfaces and intuitive navigation.
            </p>
            <p className='py-2 text-gray-600 cursor-pointer underline '>Check out some of my latest projects.</p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-grady-400 rounded-xl flex justify-center items-center p-4 hover:scale-105 ease-in duration-300 cursor-pointer">
            <Image className='rounded-xl' src="/profile.jpg" width={500} height={400} alt='about picture'/>
        </div>
      </div>
    </div>
  )
}

export default About
