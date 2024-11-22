import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import gsap from 'gsap';

const About = () => {

  useEffect(() => {
    gsap.from('.about-content', {
      opacity: 0,
      duration: 1,
      x: -100,
    });
  }, []);

  return (  <>
    {/*about*/}
    <div id="about">
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
      {/*about content*/}
      <div id="about-content">
        <div className="about-header">
          About <span className="color">Me</span>
          <span className="header-caption">
            Get to Know <span className="color"> me.</span>
          </span>
        </div>
        <div className="about-main">
          <div className="about-first-paragraph wow">
            {/*about description*/}
            <span className="about-first-line">
              I'm creative
              <span className="color">web developer</span>
              based in Pakistan, Sindh, Karachi{" "}
            </span>
            <br />
            <span className="about-second-line">
              {" "}
              With 20 years of experience as a professional Web developer, I
              have acquired the skills and knowledge necessary to make your
              project a success. I enjoy every step while working.
            </span>
            <div className="cv">
              <Link to="#">
                <button>
                  Download <span className="colors">CV</span>
                </button>
              </Link>
            </div>
          </div>
          {/*about */}
          <div className="about-img">
            <img src="images/about.jpg" alt="Your " />
          </div>
        </div>
      </div>
      {/*services start*/}
      <div id="services">
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
        {/*services header*/}
        <div className="services-heading wow">
          <span className="color">My</span> Services
        </div>
        {/*services header end*/}
        {/*services content*/}
        <div className="services-content">
          <div className="service-one service wow">
            <div className="service-img">
              <img src="images/coding.png" alt="service-one" />
            </div>
            <div className="service-description">
              <h2>Web Designing</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                quibusdam possimus
              </p>
            </div>
          </div>
          <div className="service-two service wow">
            <div className="service-img">
              <img src="images/instagram.png" alt="service-two" />
            </div>
            <div className="service-description">
              <h2>Social Media</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                quibusdam possimus
              </p>
            </div>
          </div>
          <div className="service-three service wow">
            <div className="service-img">
              <img src="images/bulb.png" alt="service-three" />
            </div>
            <div className="service-description">
              <h2>Creative Design</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                quibusdam possimus
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*services content end*/}
      {/*services end*/}
      <div id="skills">
        <div className="skills-header">
          My <span className="color"> Skills</span>
        </div>
        <div className="skills-content " style={{ textAlign: "center" }}>
          <div className="skill-html skill">
            <div className="skill-text">
              <div className="html">HTML/CSS</div>
            </div>
            <div className="html-prog wow prog">
              <div className="html-progress wow">95%</div>
            </div>
          </div>
          <div className="skill-html skill">
            <div className="skill-text">
              <div className="html">Javascript</div>
            </div>
            <div className="html-prog wow prog">
              <div className="js-progress wow">90%</div>
            </div>
          </div>
          <div className="skill-html skill">
            <div className="skill-text">
              <div className="html">Adobe Ps</div>
            </div>
            <div className="html-prog wow prog">
              <div className="adobe-progress wow">83%</div>
            </div>
          </div>
          <div className="skill-html skill">
            <div className="skill-text">
              <div className="html">PHP</div>
            </div>
            <div className="html-prog wow prog">
              <div className="php-progress wow">87%</div>
            </div>
          </div>
          <div className="skill-html skill">
            <div className="skill-text">
              <div className="html">JQuery</div>
            </div>
            <div className="html-prog wow prog">
              <div className="jquery-progress wow">94%</div>
            </div>
          </div>
          <div className="skill-html skill">
            <div className="skill-text">
              <div className="html">SEO</div>
            </div>
            <div className="html-prog wow prog">
              <div className="seo-progress wow">84%</div>
            </div>
          </div>
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
    {/*about end*/}
  </>
  )
}

export default About