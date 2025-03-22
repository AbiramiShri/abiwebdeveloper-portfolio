import React from 'react';
import ParticlesBackground from './ParticlesBackground';
import Typewriter from './Typewriter';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import logo from '../assets/images/hero.png'; // Update with actual logo path
import {Col, Container, Row} from 'react-bootstrap';

const Hero = () => {
  // Scroll handler function
  const handleScroll = (e) => {
    const anchor = e.currentTarget.getAttribute('data-dest');
    const section = document.getElementById(anchor);
    const headerHeight = document.querySelector('header').offsetHeight + 5;

    if (section) {
      const offsetTop = section.offsetTop - headerHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });

      // Highlight active nav
      document.querySelectorAll('nav a').forEach((link) => {
        link.classList.remove('active');
      });
      document
        .querySelector(`nav a[data-dest="${anchor}"]`)
        ?.classList.add('active');
    }
  };

  return (
    <section id="home" className="hero flex">
      {/* Full-screen Particles Background */}
      <div className="heroBg">
        <ParticlesBackground />
      </div>
      <Container>
        {/* Content Layer */}
        <Row className="heroSection justify-content-center align-items-center flex-row-reverse flex-sm-row">
          <Col md={5} xs={12}>
            <h1>Hello, I'm Abi</h1>
            <p>
              <Typewriter />
            </p>

            <div
              className="button page-link page-link-click"
              data-dest="projects"
              onClick={handleScroll}>
              View my work <ArrowDownwardIcon />
            </div>
          </Col>
          <Col md={7} xs={12}>
            <img
              src={logo}
              alt="Logo"
              className="img-fluid mx-auto w-50 d-flex"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
