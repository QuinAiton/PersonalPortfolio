import React from 'react';
import NavStyles from '../styles/Nav.module.scss';
const Nav = () => {
  return (
    <div className={NavStyles.container}>
      <ul className={NavStyles.items}>
        <li>Logo</li>
        <div>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
        </div>
        <div>
          <li>Github</li>
          <li>Linkedin</li>
          <li>Contact Me</li>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
