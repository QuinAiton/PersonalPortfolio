import React, { useEffect } from 'react';
import Styles from '../styles/Header.module.scss';
import Fade from 'react-reveal/Fade';

const Header = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.typing}>
        <p>Hello world!</p>
        <p>
          My Name is <span>Quinten Aiton.</span>
        </p>
        <p>
          I am a <span>Full-Stack Developer</span> from Victoria, BC.
        </p>
        <p>
          I <span>specialize</span> in creating <span>exceptional</span> digital
          <span> experiences</span> for the <span>web</span>.
        </p>
      </div>
      <Fade bottom>
        <div className={Styles.explore}>
          <p> Explore </p>
          <div className={Styles.arrow} />
        </div>
      </Fade>
    </div>
  );
};

export default Header;
