import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { gsap } from 'gsap';
import Home from './pages/home/Home';
import About from './pages/about/About';
import {Protfolio} from './pages/portfolio/portfolio';
import {Blog} from './pages/blog/blog';
import {Contact} from './pages/contact/contact';
import Navbar from './component/navbar/header';
import './App.css';
import './css/main.css';

function App() {
  // useEffect(() => {
  //   // GSAP Page Transition Animation
  //   const handlePageTransition = () => {
  //     // Fade out previous page content
  //     gsap.to('.page', { opacity: 0, duration: 0.5 });

  //     // Wait for the transition to complete, then fade in the new page
  //     setTimeout(() => {
  //       gsap.to('.page', { opacity: 1, duration: 0.5 });
  //     }, 500);
  //   };

  //   handlePageTransition();
  // }, []);

  return (
    <Router>
      <Navbar /> {/* Your Navbar or Header Component */}

      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/protfolio" element={<Protfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
