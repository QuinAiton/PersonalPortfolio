import React from 'react';
import NavStyles from '../styles/Nav.module.scss';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';
import Fade from 'react-reveal/Fade';
import Image from 'next/image';
const Nav = () => {
  return (
    <Fade top>
      <div className={NavStyles.container}>
        <div className={NavStyles.items}>
          <Image
            className={NavStyles.image}
            src='/logo.png'
            alt='logo'
            height={130}
            width={130}
          />
          <ul className={NavStyles.links}>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Skills</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
          </ul>
          <ul className={NavStyles.contact}>
            <li>
              <a>
                <VscGithub className={NavStyles.icon} />
              </a>
            </li>
            <li>
              <a>
                <FaLinkedin className={NavStyles.icon} />
              </a>
            </li>
            <li>
              <a>
                <FaEnvelope className={NavStyles.icon} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fade>
  );
};

export default Nav;
