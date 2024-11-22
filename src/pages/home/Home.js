import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

const Home = () => {

  useEffect(() => {
    const TxtRotate = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = "";
      this.isDeleting = false;
      this.tick();
    };

    TxtRotate.prototype.tick = function () {
      const i = this.loopNum % this.toRotate.length;
      const fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

      const that = this;

      // Adjust speeds and delays for smooth animation
      let delta = this.isDeleting ? 100 : 200; // Typing speed
      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period; // Pause before deleting
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500; // Pause before typing the next text
      }

      setTimeout(() => {
        that.tick();
      }, delta);
    };

    const elements = document.getElementsByClassName("txt-rotate");
    for (let i = 0; i < elements.length; i++) {
      const toRotate = elements[i].getAttribute("data-rotate");
      const period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }

    const style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = `
      .txt-rotate > .wrap { 
        border-right: 0.08em solid #666; 
        transition: all 0.3s ease-in-out; /* Smooth transitions */
      }
    `;
    document.body.appendChild(style);
  }, []);
  
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