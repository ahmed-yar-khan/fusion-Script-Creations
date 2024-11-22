import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  
  return (
<div id="header">
        <div id="particles"></div>
          {/* Social Media Links */}
        <div className="social-media-links">
           <Link to="#"><img src="/images\instagram logo.png" className="social-media" alt="instagram-logo"/></Link>
            <Link to="#"><img src="images/facebook logo.png" className="social-media" alt="facebook-logo"/></Link>
            <Link to="#"><img src="images/linkedin logo.png" className="social-media" alt="linkedin-logo"/></Link>
            <Link to="#"><img src="images/twitter logo.png" className="social-media" alt="twitter-logo"/></Link>

        </div>
        {/* Social Media Links end */}
        <div className="header-content">
            <div className="header-content-box">
            <div className="firstline"><span className="color">Ahmed Yar </span>Khan</div>
            <div className="secondline">
            I'm a
        <span className="txt-rotate color" data-period="1200"data-rotate='[ " MERN Stack Developer.", " Back-End Developer."," Front-End Developer.", " Freelancer." ]'></span>
        <span className="slash">|</span>
    </div>
                <div className="contact">
            <Link to="Mailto:#"><img src="images/mail.png" alt="email-pic" className="contactpic"/></Link>
            <Link to="Tel:#"><img src="images/call.png" alt="phone-pic" className="contactpic"/></Link>
                </div>    
        </div>
        </div>
        
        <div className="header-image">
        <img src="images/man.jpg" alt="logo"/>
        </div>
        
    </div>
  )
}

export default Home