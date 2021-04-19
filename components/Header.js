import React, { useEffect } from 'react';
import HeaderStyles from '../styles/Header.module.scss';
const Header = () => {
  return (
    <div className={HeaderStyles.container}>
      <div className={HeaderStyles.typing}>
        <p>
          Hi, My Name is <span>Quinten Aiton.</span>
        </p>
        <p>I am a full stack developer.</p>
        <p>I Like Creating things for the Web and green tech.</p>
      </div>
      <p className={HeaderStyles.explore}> Explore </p>
      <div className={HeaderStyles.arrow} />
    </div>
  );
};

export default Header;
