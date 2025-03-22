import React from 'react';
import Particles from 'react-tsparticles';
import {loadSlim} from 'tsparticles-slim'; // Ensure this module is installed

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine); // Correct function to initialize
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {color: '#000'},
        fullScreen: {enable: false},
        particles: {
          number: {value: 100, density: {enable: true, area: 800}},
          color: {value: '#ffffff'},
          shape: {type: 'circle'},
          opacity: {value: 0.5},
          size: {value: 3, random: true},
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            outModes: {default: 'out'},
          },
          links: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: {enable: true, mode: 'grab'},
            onClick: {enable: true, mode: 'push'},
          },
          modes: {
            grab: {distance: 200},
            push: {quantity: 4},
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
