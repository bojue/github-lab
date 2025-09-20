import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default Home
