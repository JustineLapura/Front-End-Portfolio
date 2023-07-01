import Image from 'next/image'
import React from 'react'

const Skills = () => {

  const skills = [
    {
      text: "HTML",
      img: "/html.png"
    },
    {
      text: "CSS",
      img: "/css.png"
    },
    {
      text: "JAVASCRIPT",
      img: "/javascript.png"
    },
    {
      text: "REACT",
      img: "/react.png"
    },
    {
      text: "NEXT.JS",
      img: "/nextjs.png"
    },
    {
      text: "TAILWIND CSS",
      img: "/tailwind.png"
    },
    {
      text: "TYPESCRIPT",
      img: "/typescript.png"
    },
    {
      text: "GITHUB",
      img: "/github1.png"
    }

  ]

  return (
    <div className='w-full lg:h-screen p-2'>
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
        <h2 className='py-4 text-xl font-bold'>What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {skills.map(skill => (
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={skill.img} width={64} height={64} alt={skill.text}/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>{skill.text}</h3>
              </div>
            </div>
          </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Skills
