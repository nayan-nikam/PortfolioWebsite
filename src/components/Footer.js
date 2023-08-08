import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "./FooterStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <h4>
                        <FaHome size={20} style={{color : "#fff", marginRight: "2rem"}} />
                        Ahmedabad, Gujarat. 
                    </h4>
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color : "#fff", marginRight: "2rem"}} />  
                    +91 7984000169
                    </h4>
                </div>

                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{color : "#fff", marginRight: "2rem"}} />  
                    nayannikam4@gmail.com
                    </h4>
                </div>
            </div>

            <div className="right">
                <div className="social">
                    <Link to="https://instagram.com/nayan_nikam04?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
                        <FaInstagram size={30} style={{color : "#fff", marginRight: "1rem"}} />
                    </Link>
                    <Link to="https://twitter.com/_Meme_Boy">
                        <FaTwitter size={30} style={{color : "#fff", marginRight: "1rem"}} />
                    </Link>
                    <Link to="https://www.linkedin.com/in/nayan-nikam-3302ab231/">
                        <FaLinkedin size={30} style={{color : "#fff", marginRight: "1rem"}} />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer