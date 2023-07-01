import About from '@/components/About'
import Main from '@/components/Main'
import Skills from '@/components/Skills'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-gray-100">
      <Main />
      <About />
      <Skills />
    </main>
  )
}
