import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import profilePic from '../assets/images/mine.png';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import SpeedIcon from '@mui/icons-material/Speed';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import bootstrap from '../assets/images/bootstrap.png';
import javascript from '../assets/images/js.png';
import react from '../assets/images/react.png';
import nextjs from '../assets/images/nextjs.png';
import express from '../assets/images/express.png';
import node from '../assets/images/node.png';
import mongodb from '../assets/images/mongo.png';
import git from '../assets/images/git.png';
import sass from '../assets/images/sass.png';

const About = () => {
  const skills = [
    {name: 'HTML', image: html},
    {name: 'CSS', image: css},
    {name: 'Bootstrap', image: bootstrap},
    {name: 'JavaScript', image: javascript},
    {name: 'React', image: react},
    {name: 'Next.js', image: nextjs},
    {name: 'Express.js', image: express},
    {name: 'Node.js', image: node},
    {name: 'MongoDB', image: mongodb},
    {name: 'Git', image: git},
    {name: 'SASS', image: sass},
  ];

  return (
    <section id="about" className="my-5 pt-5">
      <Container>
        {/* Section Title */}
        <Row className="text-center mb-5">
          <Col>
            <h3 className="section-title">About</h3>
          </Col>
        </Row>

        {/* Features Section */}
        <Row>
          <Col lg={3} md={6} className="text-center">
            <div className="hex-wrap">
              <div className="hexagon">
                <SpeedIcon fontSize="large" /> {/* Speedometer */}
                {/* Lightbulb Outline */}
              </div>
            </div>
            <h4>Fast</h4>
            <p>
              Fast load times and lag-free interaction, my highest priority.
            </p>
          </Col>

          <Col lg={3} md={6} className="text-center">
            <div className="hex-wrap">
              <div className="hexagon">
                <PhonelinkIcon fontSize="large" /> {/* Cellphone Link */}
              </div>
            </div>
            <h4>Responsive</h4>
            <p>My layouts will work on any device, big or small.</p>
          </Col>

          <Col lg={3} md={6} className="text-center">
            <div className="hex-wrap">
              <div className="hexagon">
                <LightbulbOutlinedIcon fontSize="large" />{' '}
              </div>
            </div>
            <h4>Intuitive</h4>
            <p>Strong preference for easy-to-use, intuitive UX/UI.</p>
          </Col>

          <Col lg={3} md={6} className="text-center">
            <div className="hex-wrap">
              <div className="hexagon">
                <RocketLaunchIcon fontSize="large" /> {/* Rocket */}
              </div>
            </div>
            <h4>Dynamic</h4>
            <p>
              Websites don't have to be static, I love making pages come to
              life.
            </p>
          </Col>
        </Row>

        {/* Profile & Skills Section */}
        <Row className="mt-5 align-items-center">
          <Col lg={4} className="text-center">
            <Image
              src={profilePic}
              className="img-fluid w-100 rounded-circle"
            />
            <p className="text-lg text-gray-300 mt-3">
              I'm a{' '}
              <span className="text-glowText font-bold">
                Full-Stack Developer
              </span>{' '}
              with expertise in modern web technologies. I have a serious
              passion for{' '}
              <span className="text-glowText font-bold">UI effects</span>,
              animations, and creating
              <span className="text-glowText font-bold">
                {' '}
                intuitive, dynamic user experiences
              </span>
              .
            </p>

            <p className="text-lg text-gray-300 mt-4">
              My tech stack includes{' '}
              <span className="text-glowText font-bold">React</span>,
              <span className="text-glowText font-bold"> Next.js</span>, and{' '}
              <span className="text-glowText font-bold">Tailwind CSS</span> for
              front-end development, while I build scalable back-end systems
              using <span className="text-glowText font-bold">Node.js</span>,
              <span className="text-glowText font-bold">Express</span>, and{' '}
              <span className="text-glowText font-bold">Spring Boot</span>.
            </p>

            <p className="text-lg text-gray-300 mt-4">
              I integrate databases like{' '}
              <span className="text-glowText font-bold">MongoDB</span>,
              <span className="text-glowText font-bold">PostgreSQL</span>, and{' '}
              <span className="text-glowText font-bold">MySQL</span>, ensuring
              seamless performance. My workflow includes tools like{' '}
              <span className="text-glowText font-bold">Docker</span>,
              <span className="text-glowText font-bold">AWS</span>, and{' '}
              <span className="text-glowText font-bold">Git</span> to optimize
              deployment and collaboration.
            </p>

            <p className="text-lg text-gray-300 mt-4">
              Driven by curiosity and a commitment to excellence, I am
              passionate about building impactful digital solutions and
              continuously improving my skills.
            </p>
          </Col>

          <Col lg={8}>
            <Row className="justify-content-center">
              {skills.slice(0, 4).map((skill, index) => (
                <Col
                  key={index}
                  md={3}
                  sm={6}
                  xs={6}
                  className="text-center mb-4">
                  <div className="skills__item">
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      className="skills__image"
                    />
                    <div className="skills__item-name">{skill.name}</div>
                  </div>
                </Col>
              ))}
            </Row>

            {/* Row 2 */}
            <Row className="justify-content-center">
              {skills.slice(4, 8).map((skill, index) => (
                <Col
                  key={index}
                  md={3}
                  sm={6}
                  xs={6}
                  className="text-center mb-4">
                  <div className="skills__item">
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      className="skills__image"
                    />
                    <div className="skills__item-name">{skill.name}</div>
                  </div>
                </Col>
              ))}
            </Row>

            {/* Row 3 */}
            <Row className="justify-content-center">
              {skills.slice(8, 12).map((skill, index) => (
                <Col
                  key={index}
                  md={3}
                  sm={6}
                  xs={6}
                  className="text-center mb-4">
                  <div className="skills__item">
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      className="skills__image"
                    />
                    <div className="skills__item-name">{skill.name}</div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
