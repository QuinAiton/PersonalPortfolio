import React from 'react';
import HeaderStyles from '../styles/Header.module.scss';
const Header = () => {
  return (
    <div className={HeaderStyles.container}>
      <p className={HeaderStyles.content}>
        Hello, my name is <span>Quinten Aiton.</span> <br />I am a full-stack
        developer with a passion for innovative design and green tech.
      </p>
      {}
    </div>
  );
};

export default Header;
