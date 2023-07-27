import About from '@/components/About'
import Main from '@/components/Main'
import Skills from '@/components/Skills'
import Projects from '../components/Projects'
import { Metadata } from 'next'
import Contact from '@/components/Contact'
 
export const metadata: Metadata = {
  title: 'Justine Lapura | Front-End Developer',
  description: '...',
}

export default function Home() {
  return (
    <main className="bg-gray-100">
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
