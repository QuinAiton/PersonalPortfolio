import React from 'react';
import NavStyles from '../styles/Nav.module.scss';
const Nav = () => {
  return (
    <div className={NavStyles.container}>
      <ul className={NavStyles.items}>
        <li>Logo</li>
        <div>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Skills</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
        </div>
        <div>
          <li>
            <a>Github</a>
          </li>
          <li>
            <a>Linkedin</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
