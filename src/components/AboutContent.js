import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import React1 from "../assets/temp1.png"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>My name is Nayan Nikam. I am a Fresher Software Developer </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stock top">
                    <img src={React1} className="img" alt="true " />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent