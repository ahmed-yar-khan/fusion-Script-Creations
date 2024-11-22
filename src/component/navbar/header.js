import React from 'react'
import '../../js/particles'
import { Link } from 'react-router-dom'
import { useEffect, useRef  } from 'react'
import $ from "jquery";
import { gsap } from "gsap";

const Header = () => {
  
  const cursorRef = useRef(null);
  useEffect(() => {
    // Loader Animation
    
    $(window).on("load", function () {
      gsap.to("#loader", 1, { y: "-100%" });
      gsap.to("#loader", 1, { opacity: 0 });
      gsap.to("#loader", 0, { display: "none", delay: 1 });
      gsap.to("#header", 0, { display: "block", delay: 1 });
      gsap.to("#navigation-content", 0, { display: "none" });
      gsap.to("#navigation-content", 0, { display: "flex", delay: 1 });
    });
    
    // Color Panel Toggle
    $(".color-panel").on("click", function (e) {
      e.preventDefault();
      $(".color-changer").toggleClass("color-changer-active");
    });

    $(".colors Link").on("click", function (e) {
      e.preventDefault();
      const attr = $(this).attr("title");
      $("head").append(`<link rel="stylesheet" href="css/${attr}.css">`);
    });

    // Menubar Animation
    $(".menubar").on("click", function () {
      gsap.to("#navigation-content", 0.6, { y: 0 });
    });

    $(".navigation-close").on("click", function () {
      gsap.to("#navigation-content", 0.6, { y: "-100%" });
    });

    // const enlargeCursor = () => {
    //   gsap.to(cursorRef.current, { scale: 1.5, opacity: 1, duration: 0.2 });
    // };
    // const shrinkCursor = () => {
    //   gsap.to(cursorRef.current, { scale: 1, opacity: 0.6, duration: 0.2 });
    // };

    // TxtRotate Initialization
    const TxtRotate = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = "";
      this.tick();
      this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function () {
      const i = this.loopNum % this.toRotate.length;
      const fullTxt = this.toRotate[i];

      this.txt = this.isDeleting
        ? fullTxt.substring(0, this.txt.length - 1)
        : fullTxt.substring(0, this.txt.length + 1);

      this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

      const delta = this.isDeleting
        ? (200 - Math.random() * 100) / 2
        : 200 - Math.random() * 100;

      if (!this.isDeleting && this.txt === fullTxt) {
        setTimeout(() => {
          this.isDeleting = true;
        }, this.period);
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
      }

      setTimeout(() => this.tick(), delta);
    };

    window.onload = function () {
      const elements = document.getElementsByClassName("txt-rotate");
      for (let i = 0; i < elements.length; i++) {
        const toRotate = elements[i].getAttribute("data-rotate");
        const period = elements[i].getAttribute("data-period");
        if (toRotate) new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    };

    // Cursor Animation
    // const body = document.querySelector("body");
    // const $cursor = document.querySelector(".cursor");

    const moveCursor = (e) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          stagger: 0.002,
        });
      }
    };

    // const cursorHover = () => {
    //   if ($cursor) {
    //     gsap.to($cursor, {
    //       scale: 1.4,
    //       opacity: 1,
    //       duration: 0.2,
    //     });
    //   }
    // };

    // const cursorOut = () => {
    //   if ($cursor) {
    //     gsap.to($cursor, {
    //       scale: 1,
    //       opacity: 0.6,
    //       duration: 0.2,
    //     });
    //   }
    // };
    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      
        <div id="loader">
            <span className="color">Ahmed Yar</span>Khan 
        </div>
   
 <div id="navigation-content">
        <div className="logo">
          <img src="/images/logo.PNG" alt="logo" />
        </div>
        <div className="navigation-close">
          <span className="close-first" />
          <span className="close-second" />
        </div>
        <div className="navigation-links">
            <Link to="/" data-text="HOME" id="home-link">Home</Link>
            <Link to="/about-us" data-text="ABOUT" id="home-link">ABOUT</Link>
            <Link to="/blog" data-text="BLOG" id="blog-link">Blog</Link>
            <Link to="/protfolio" data-text="PORTFOLIO"  id="portfolio-link">PORTFOLIO</Link>
            <Link to="/contact-us" data-text="CONTACT" id="contact-link">CONTACT</Link>
        </div>
      </div>

      <div id="navigation-bar">
        <img src="/images/logo.PNG" alt="logo"/>
        <div className="menubar">
            <span className="first-span"></span>
            <span className="second-span"></span>
            <span className="third-span"></span>
        </div>
    </div>

    
   {/* Cursor */}
   <div className="cursor" ref={cursorRef}></div>
    </>
  )
}

export default Header;