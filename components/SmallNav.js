import React, { useState } from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { BsBriefcaseFill } from 'react-icons/bs';
import Link from 'next/link';
import Styles from '../styles/SmallNav.module.scss';
const SmallNav = () => {
  return (
    <nav className={Styles.container} role='navigation'>
      <div className={Styles.menuToggle}>
        <input type='checkbox' />
        <span></span>
        <span></span>
        <span></span>
        <ul className={Styles.menu}>
          <li>
            <Link href='#about'>
              <a>
                <IoPersonCircleOutline className={Styles.icon} /> About
              </a>
            </Link>
          </li>
          <li>
            <Link href='#projects'>
              <a>
                <BsBriefcaseFill className={Styles.icon} />
                Projects
              </a>
            </Link>
          </li>
          <li>
            <a href='https://github.com/quinaiton' target='_blank'>
              <VscGithub className={Styles.icon} /> Github
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/quinten-aiton' target='_blank'>
              <FaLinkedin className={Styles.icon} /> linkedin
            </a>
          </li>
          <li>
            <a href='mailto:quinaiton@pm.me' target='_blank'>
              <FaEnvelope className={Styles.icon} />
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SmallNav;
