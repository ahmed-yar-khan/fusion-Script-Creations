import React, { useEffect, useRef } from 'react';
import '../../js/particles';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { gsap } from 'gsap';

const Header = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Loader Animation
    $(window).on('load', function () {
      gsap.to('#loader', 1, { y: '-100%' });
      gsap.to('#loader', 1, { opacity: 0 });
      gsap.to('#loader', 0, { display: 'none', delay: 1 });
      gsap.to('#header', 0, { display: 'block', delay: 1 });
      gsap.to('#navigation-content', 0, { display: 'none' });
      gsap.to('#navigation-content', 0, { display: 'flex', delay: 1 });
    });

    // Color Panel Toggle
    $('.color-panel').on('click', function (e) {
      e.preventDefault();
      $('.color-changer').toggleClass('color-changer-active');
    });

    $('.colors Link').on('click', function (e) {
      e.preventDefault();
      const attr = $(this).attr('title');
      $('head').append(`<link rel="stylesheet" href="css/${attr}.css">`);
    });

    // Menubar Animation
    $('.menubar').on('click', function () {
      gsap.to('#navigation-content', 0.6, { y: 0 });
    });

    $('.navigation-close').on('click', function () {
      gsap.to('#navigation-content', 0.6, { y: '-100%' });
    });

    // Cursor Movement
    const moveCursor = (e) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          stagger: 0.002,
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  const handleLinkClick = () => {
    // Close navigation content when a link is clicked
    gsap.to('#navigation-content', 0.6, { y: '-100%' });
  };

  return (
    <>
      <div id="loader">
        <span className="color">Ahmed Yar</span>Khan
      </div>

      <div id="navigation-content">
        <div className="logo">
          <img src="/images/logo.PNG" alt="logo" />
        </div>
        <div className="navigation-close" onClick={handleLinkClick}>
          <span className="close-first" />
          <span className="close-second" />
        </div>
        <div className="navigation-links">
          <Link to="/" data-text="HOME" onClick={handleLinkClick} id="home-link">
            Home
          </Link>
          <Link
            to="/about-us"
            data-text="ABOUT"
            onClick={handleLinkClick}
            id="about-link"
          >
            ABOUT
          </Link>
          <Link
            to="/blog"
            data-text="BLOG"
            onClick={handleLinkClick}
            id="blog-link"
          >
            Blog
          </Link>
          <Link
            to="/protfolio"
            data-text="PORTFOLIO"
            onClick={handleLinkClick}
            id="portfolio-link"
          >
            PORTFOLIO
          </Link>
          <Link
            to="/contact-us"
            data-text="CONTACT"
            onClick={handleLinkClick}
            id="contact-link"
          >
            CONTACT
          </Link>
        </div>
      </div>

      <div id="navigation-bar">
        <img src="/images/logo.PNG" alt="logo" />
        <div className="menubar">
          <span className="first-span"></span>
          <span className="second-span"></span>
          <span className="third-span"></span>
        </div>
      </div>

      {/* Cursor */}
      <div className="cursor" ref={cursorRef}></div>
    </>
  );
};

export default Header;
