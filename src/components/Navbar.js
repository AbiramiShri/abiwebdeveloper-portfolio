import React, {useEffect, useRef, useState} from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef(null);

  // Scroll handler to highlight section link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollY = window.scrollY + 60;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.offsetHeight;

      const isBottom = scrollY + windowHeight >= fullHeight;
      let activeSection = '';

      // Remove active class from all nav links except Resume
      document.querySelectorAll('nav a').forEach((link) => {
        const href = link.getAttribute('href') || '';
        if (!href.includes('resume')) {
          link.classList.remove('active');
        }
      });

      if (isBottom) {
        activeSection = 'contact';
      } else {
        for (let i = 0; i < sections.length; i++) {
          const section = document.getElementById(sections[i]);
          if (section && scrollY >= section.offsetTop - 100) {
            activeSection = sections[i];
          }
        }
      }

      if (activeSection) {
        document
          .querySelector(`nav a[data-dest="${activeSection}"]`)
          ?.classList.add('active');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Collapse navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky-top">
      <Navbar
        expand="lg"
        className="navbar"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        ref={navRef}>
        <Container>
          <Navbar.Brand href="/#home">Abirami Shri</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="ms-auto">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <Nav.Link
                  key={section}
                  href={`/#${section}`}
                  data-dest={section}
                  onClick={() => setExpanded(false)}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Nav.Link>
              ))}
              <Nav.Link
                href="https://drive.google.com/file/d/1WzsuXbpiedQ8Hioju5MlCXH9PnkWN71s/view?usp=drive_link"
                target="_blank"
                onClick={() => setExpanded(false)}>
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navigation;
