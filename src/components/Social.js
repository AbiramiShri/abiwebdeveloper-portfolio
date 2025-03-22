import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Social = () => {
  return (
    <nav className="social">
      <ul>
        <li>
          <a
            href="mailto:shriabi.shri@gmail.com"
            target="_blank"
            rel="noreferrer">
            Mail me <EmailIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/abirami-shri-5aab1478"
            rel="noreferrer"
            target="_blank">
            LinkedIn <LinkedInIcon />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/AbiramiShri/"
            target="_blank"
            rel="noreferrer">
            Github <GitHubIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Social;
