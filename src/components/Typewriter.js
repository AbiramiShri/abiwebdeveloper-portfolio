import React, {useEffect, useRef} from 'react';
import Typed from 'typed.js';

const Typewriter = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ['Full Stack Developer', 'UI/UX Designer', 'Scrum Master'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span
      ref={textRef}
      style={{color: '#00def3', fontSize: '24px', fontWeight: 'bold'}}
    />
  );
};

export default Typewriter;
