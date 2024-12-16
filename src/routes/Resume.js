import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'

const Resume = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="MY RESUME." />
      <AboutContent />
      <Footer/>
    </div>
  )
}

export default Resume
