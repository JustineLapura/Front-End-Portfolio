import About from '@/components/About'
import Main from '@/components/Main'
import Skills from '@/components/Skills'
import Image from 'next/image'
import Projects from '../components/Projects'
import { Metadata } from 'next'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
 
export const metadata: Metadata = {
  title: 'Jahz10 | Front-End Developer',
  description: '...',
}

export default function Home() {
  return (
    <main className="bg-gray-100">
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
