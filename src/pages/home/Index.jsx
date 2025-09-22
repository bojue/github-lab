import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <TechStack/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default Home
