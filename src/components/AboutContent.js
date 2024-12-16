import { Link, NavLink } from "react-router-dom"
import "./AboutContentStyles.css"
import resume from "../assets/resume1.jpg"


import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="imager">
            <img src={resume} alt=""/>
        </div>
        
        <div className="rbutton">
           <NavLink to={"https://drive.google.com/file/d/1EAYnXqnS4MPdAUP5yLFJMOjsxaWQCWcy/view?usp=drive_link"}><button className="btn">Download</button></NavLink> 
        </div>
    </div>
  )
}

export default AboutContent