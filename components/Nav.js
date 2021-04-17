import React from 'react';
import NavStyles from '../styles/Nav.module.scss';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';
import Image from 'next/image';
const Nav = () => {
  return (
    <div className={NavStyles.container}>
      <ul className={NavStyles.items}>
        <Image src='/logo.png' alt='logo' height={150} width={150} />
        <div className={NavStyles.links}>
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
        <div className={NavStyles.contact}>
          <li>
            <a>
              <VscGithub />
            </a>
          </li>
          <li>
            <a>
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a>
              <FaEnvelope />
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
