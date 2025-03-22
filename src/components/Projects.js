import React, {useState} from 'react';
import ProjectModal from './Modal';
import sbi from '../assets/images/sbi.png';
import domeshoppingzone from '../assets/images/domeshoppingzone.png';
import {Container, Row, Col, Image} from 'react-bootstrap';
import t2scareers from '../assets/images/t2scareers.png';
import touch2success from '../assets/images/touch2success.png';
import foodhub from '../assets/images/foodhub.png';
import releases from '../assets/images/releases.png';
import arista from '../assets/images/arista.png';
import payoda from '../assets/images/payoda.png';
import cliffwater from '../assets/images/cliffwater.png';
import localize from '../assets/images/localize.png';
import habitat from '../assets/images/habitat28.mov';

const projects = [
  {
    id: 1,
    img: habitat,
    title: 'Habitat28',
    techStack:
      'HTML, CSS, JavaScript, Bootstrap, React, Node, Express, MongoDB, PHP',
    description:
      'An internal website used to publish new software releases and features for different teams within the company.',
    link: 'https://habitat28.com/',
    roles: 'Full Stack Developer',
    responsibility: [
      'Designed and developed a responsive UI using React.js and Bootstrap.',
      'Built and integrated backend APIs using Node.js and Express.',
      'Implemented MongoDB for data storage and retrieval.',
      'Optimized performance for better loading speeds and responsiveness.',
      'Maintained cross-browser compatibility and mobile responsiveness.',
    ],
  },
  {
    id: 2,
    img: arista,
    title: 'Arista',
    techStack: 'HTML, CSS, JavaScript, Bootstrap, Angular',
    description:
      "Arista's CloudVision CUE solutions distributed control plane allows seamless and limitless scaling, removes any single points of failure and ensures amazing Network.",
    link: 'https://arista.com/',
    roles: 'Frontend Developer',
    responsibility: [
      'Developed and maintained UI components using Angular and Bootstrap.',
      'Collaborated with backend developers to integrate APIs efficiently.',
      'Improved UI accessibility and performance using best coding practices.',
      'Ensured a seamless user experience through responsive design.',
      'Conducted bug fixes and UI enhancements based on client feedback.',
    ],
  },
  {
    id: 3,
    img: localize,
    title: 'Localize',
    techStack: 'HTML, CSS, JavaScript, React, MongoDB, Express, Node.js',
    description:
      'Localize offers a no-code translation solution, transforming web apps, websites, and documents with AI-driven localization for a smooth global user translation.',
    link: 'https://localizejs.com/',
    roles: 'Full Stack Developer',
    responsibility: [
      'Built a no-code AI-driven translation platform with React and Node.js.',
      'Integrated MongoDB for storing translations and optimizing query performance.',
      'Designed a user-friendly UI/UX to enhance global accessibility.',
      'Worked on real-time content translation and localization.',
      'Ensured security measures for international content delivery.',
    ],
  },
  {
    id: 4,
    img: cliffwater,
    title: 'Cliffwater',
    techStack: 'HTML, CSS, JavaScript, Bootstrap, Angular, .Net',
    description:
      'Cliffwater has become regarded as a leader in alternatives advisory services and asset management.',
    link: 'https://cliffwater.com/',
    roles: 'UI Developer',
    responsibility: [
      'Developed interactive UI components using Angular and Bootstrap.',
      'Ensured compatibility with .NET backend services.',
      'Worked closely with designers to implement visually appealing layouts.',
      'Enhanced website performance and SEO optimization.',
      'Maintained and updated UI components for scalability.',
    ],
  },
  {
    id: 5,
    img: payoda,
    title: 'Payoda',
    techStack: 'HTML, CSS, JavaScript, PHP, Wordpress',
    description:
      'Payoda constantly disrupting and innovating to bring out the best use of technology for our clientele.',
    link: 'https://payoda.com/',
    roles: 'Frontend Developer',
    responsibility: [
      'Developed and maintained the corporate website using PHP, WordPress, and JavaScript.',
      'Enhanced UI with animations and dynamic components.',
      'Managed site performance optimization and SEO best practices.',
      'Integrated content management system for easy updates.',
      'Provided technical support and maintenance.',
    ],
  },
  {
    id: 6,
    img: releases,
    title: 'Internal Release Portal',
    techStack: 'HTML, CSS, JavaScript, Bootstrap',
    description:
      'An internal website used to publish new software releases and features for different teams within the company.',
    link: 'https://releases.touch2success.com/',
    roles: 'UI/UX Developer',
    responsibility: [
      'Designed and built an internal portal for tracking software releases.',
      'Used Bootstrap for a clean, responsive UI.',
      'Ensured secure access control and role-based authentication.',
      'Integrated real-time updates and notifications for team members.',
      'Conducted usability testing and feedback iterations.',
    ],
  },
  {
    id: 7,
    img: foodhub,
    title: 'Foodhub',
    techStack:
      'React.js, Redux, HTML5, CSS3, JavaScript, jQuery, Bootstrap 4, Photoshop',
    description:
      'An online food ordering platform that connects customers with local restaurants, providing zero commission services.',
    link: 'https://foodhub.co.uk/',
    roles: 'Frontend Engineer',
    responsibility: [
      'Developed and optimized the online food ordering platform.',
      'Built UI components using React.js, Redux, and Bootstrap.',
      'Integrated third-party payment gateways and user authentication.',
      'Ensured high performance and responsiveness across devices.',
      'Worked with designers to enhance UX and accessibility.',
    ],
  },
  {
    id: 8,
    img: touch2success,
    title: 'Foodhub Website',
    techStack: 'HTML, CSS, JavaScript, Bootstrap 3, PHP, Photoshop, Sketch',
    description:
      'A professional website providing digital solutions for restaurants, including online ordering and bookings.',
    link: 'https://www.touch2success.com/',
    roles: 'Web Developer',
    responsibility: [
      'Created and maintained the official website for Foodhub.',
      'Developed frontend components using Bootstrap and JavaScript.',
      'Designed landing pages and promotional banners using Photoshop & Sketch.',
      'Worked with PHP developers for seamless backend integration.',
      'Performed debugging and quality assurance testing.',
    ],
  },
  {
    id: 9,
    img: t2scareers,
    title: 'Foodhub Careers Website',
    techStack: 'HTML, CSS, JavaScript, Bootstrap',
    description:
      'A careers website for Foodhub Software Solutions, designed to provide job listings and company details.',
    link: 'https://t2scareers.com/',
    roles: 'Web Developer',
    responsibility: [
      'Designed a job portal for Foodhub Software Solutions.',
      'Developed frontend UI using Bootstrap and JavaScript.',
      'Integrated job listings and application submission features.',
      'Ensured security compliance for candidate data.',
      'Conducted usability testing to improve applicant experience.',
    ],
  },
  {
    id: 10,
    img: domeshoppingzone,
    title: 'Dome Shopping Zone',
    techStack: 'HTML, CSS, JavaScript, jQuery, Angular JS',
    description: 'A Japanese e-commerce platform with multiple domain stores.',
    link: 'https://www.underarmour.co.jp/ja-jp/',
    roles: 'UI Developer',
    responsibility: [
      'Developed a Japanese e-commerce platform using Angular JS and jQuery.',
      'Implemented dynamic product listing and shopping cart features.',
      'Integrated multi-language support for international users.',
      'Optimized UI for fast loading speeds and smooth interactions.',
      'Worked with payment gateway providers for secure transactions.',
    ],
  },
  {
    id: 11,
    img: sbi,
    title: 'SBI Mandates',
    techStack: 'HTML5, CSS3, JavaScript, Bootstrap, AngularJS 1.5, JSON',
    description:
      'SBI allows corporate and retail customers to operate their accounts remotely.',
    link: 'https://www.onlinesbi.com/',
    roles: 'UI Developer',
    responsibility: [
      'Developed and maintained UI components for SBI’s online banking services.',
      'Ensured seamless user experience for corporate and retail customers.',
      'Built interactive forms and dashboards using AngularJS and Bootstrap.',
      'Maintained security compliance for banking transactions.',
      'Conducted performance optimizations and bug fixes.',
    ],
  },
];
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects pt-3">
      <Container>
        <h3 className="text-center mb-4">Projects</h3>
        <Row className="justify-content-center">
          {projects.map((project) => (
            <Col
              key={project.id}
              md={4}
              sm={6}
              xs={12}
              className="text-center mb-4">
              <div
                className="project-card"
                onClick={() => setSelectedProject(project)}>
                {project.img.endsWith('.mov') ? (
                  <video
                    src={project.img}
                    className="img-fluid rounded shadow-sm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{maxWidth: '100%', borderRadius: '10px'}}
                  />
                ) : (
                  <Image
                    src={project.img}
                    alt={project.title}
                    className="img-fluid rounded shadow-sm"
                  />
                )}
                <p className="mt-2 font-weight-bold">{project.title}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Modal */}
        {selectedProject && (
          <ProjectModal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            title={selectedProject.title}
            description={selectedProject.description}
            techStack={selectedProject.techStack}
            link={selectedProject.link}
            roles={selectedProject.roles}
            responsibility={selectedProject.responsibility}
          />
        )}
      </Container>
    </section>
  );
};

export default Projects;
