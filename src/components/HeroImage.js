import "./HeroImageStyles.css"

import React from 'react'
import programimg from "../assets/programimg.jpg"
import { Link } from "react-router-dom"

const HeroImage = () => {
  return (
    <div className= "hero">
        <div className="mask">
            <img className = "into-img"
            src={programimg} alt="programimg" />

        </div>
        <div className="content">
            <h1>Software Developer.</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImage
