import { Link } from "react-router-dom"
import "./NavbarStyles.css"
import {FaBars, FaTimes} from "react-icons/fa";

import React, { useState } from 'react'

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setcolor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100) {
            setcolor(true);
        }
        else{
            setcolor(false);
        }
    } 

    window.addEventListener("scroll", changeColor);

  return (
    <div className= {color ? "header header-bg" : "header"}>
        <Link to="/" ><h1>Portfolio </h1> </Link>
        <ul className= {click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/resume">Resume</Link>
            </li>
            {/* <li>
                <Link to="/contact">Contact</Link>
            </li> */}
        </ul>
        <div className= "hamburger" onClick= {handleClick}>
            {click ? (
                
                <FaTimes size={20} style={{ color: " #f0f8ff"}} />
            ) : (
                <FaBars size={20} style={{ color: " #f0f8ff"}} />
            ) }
            
            
        </div>
      
    </div>
  )
}

export default Navbar
