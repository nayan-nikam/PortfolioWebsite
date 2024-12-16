import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'
import Work from '../components/work'
import ScrollingAnimation from '../components/Scrollinganimation'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage />
      <Work />
      <Footer />
    </div>
  )
}

export default Home
