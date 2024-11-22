import { Link } from "react-router-dom"
import React, { useEffect } from 'react'
import gsap from 'gsap';

export const Contact = () => {
    useEffect(() => {
        gsap.from('.contact-content', {
          opacity: 0,
          duration: 1,
          x: -100,
        });
      }, []);
 return(<> 
   <div id="contact">
      <div className="color-changer">
        <div className="color-panel">
          <img src="images/gear.png" alt="" />
        </div>
        <div className="color-selector">
          <div className="heading">Custom Colors</div>
          <div className="colors">
            <ul>
              <li>
                <Link to="#0" className="color-red " title="color-red" />
              </li>
              <li>
                <Link to="#0" className="color-purple" title="color-purple" />
              </li>
              <li>
                <Link to="#0" className="color-malt" title="color-malt" />
              </li>
              <li>
                <Link to="#0" className="color-green" title="color-green" />
              </li>
              <li>
                <Link to="#0" className="color-blue" title="color-blue" />
              </li>
              <li>
                <Link to="#0" className="color-orange" title="color-orange" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="contact-header">
        Contact <span className="color"> Me</span>
        <div className="contact-header-caption">
          {" "}
          <span className="color"> Get</span> In Touch.
        </div>
      </div>
      <div className="contact-content">
        {/*Contact form*/}
        <div className="contact-form">
          <div className="form-header">Message Me</div>
          <form id="myForm" action="#">
            <div className="input-line">
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="input-name"
              />
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="input-name"
              />
            </div>
            <input
              type="text"
              id="subject"
              placeholder="subject"
              className="input-subject"
            />
            <textarea
              id="body"
              className="input-textarea"
              placeholder="message"
              defaultValue={""}
            />
            <button type="button" id="submit" value="send">
              Submit
            </button>
          </form>
        </div>
        {/*Contact form*/}
        {/*Contact information*/}
        <div className="contact-info">
          <div className="contact-info-header">Contact Info</div>
          <div className="contact-info-content">
            <div className="contect-info-content-line">
              <img
                src="./images/icon-name.png"
                className="icon"
                alt="name-icon"
              />
              <div className="contact-info-icon-text">
                <h6>Name</h6>
                <p>Ahmed Yar Khan</p>
              </div>
            </div>
            <div className="contect-info-content-line">
              <img
                src="./images/icon-location.png"
                className="icon"
                alt="location-icon"
              />
              <div className="contact-info-icon-text">
                <h6>Location</h6>
                <p>Pakistan, Sindh, Karachi</p>
              </div>
            </div>
            <div className="contect-info-content-line">
              <img
                src="./images/icon-phone.png"
                className="icon"
                alt="phone-icon"
              />
              <div className="contact-info-icon-text">
                <h6>Call</h6>
                <p>
                  <Link to="tel:+923138294077">+92 3138294077</Link>
                </p>
              </div>
            </div>
            <div className="contect-info-content-line">
              <img
                src="./images/icon-email.png"
                className="icon"
                alt="email-icon"
              />
              <div className="contact-info-icon-text">
                <h6>Email</h6>
                <p>
                  <Link to="mailto:ahmeddehwar2@gmail.com">
                    ahmeddehwar2@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/*Contact information end*/}
        </div>
      </div>
      {/*copyright-section You Can Remove After Downloading*/}
      <div className="footer">
        <div className="footer-text">
          <img
            src="./images/copyright.png"
            alt="copyright-img"
            className="images"
            height="14px"
          />
          Ahmed Yar Khan
        </div>
      </div>
      {/*copyright-section*/}
    </div>
  
  </>)}