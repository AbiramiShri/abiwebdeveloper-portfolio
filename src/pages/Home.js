import React from 'react';
import Social from '../components/Social';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

import '../assets/css/style.css';
import '../assets/css/responsive.css';

const Home = () => {
  return (
    <>
      <Social />

      <Hero />
      <Navbar />

      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
