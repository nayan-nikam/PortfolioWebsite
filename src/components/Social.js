
import {
    FontAwesomeIcon,
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

 import React from 'react'
 
 const Social = () => {
   return (
    <div class="social-container">
    <h3>Social Follow</h3>
    <a href="https://www.youtube.com/c/jamesqquick"
      className="youtube social">
      <FontAwesomeIcon icon={faYoutube} size="2x" />
    </a>
</div>
   )
 }
 
 export default Social



