import React, { useState } from 'react';
import NavStyles from '../styles/Nav.module.scss';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';
import Fade from 'react-reveal/Fade';
import Image from 'next/image';
import Link from 'next/link';
import Media from 'react-med';
const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Fade top>
      {isOpen ? (
        <nav className={NavStyles.container}>
          <Image
            className={NavStyles.image}
            src='/logo.png'
            alt='logo'
            height={130}
            width={130}
          />
          <div className={NavStyles.items}>
            <ul className={NavStyles.links}>
              <li>
                <Link href='#about'>
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href='#projects'>
                  <a>Projects</a>
                </Link>
              </li>
            </ul>
          </div>
          <ul className={NavStyles.contact}>
            <li>
              <a href='https://github.com/quinaiton' target='_blank'>
                <VscGithub className={NavStyles.icon} />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/quinten-aiton'
                target='_blank'
              >
                <FaLinkedin className={NavStyles.icon} />
              </a>
            </li>
            <li>
              <a href='mailto:quinaiton@pm.me' target='_blank'>
                <FaEnvelope className={NavStyles.icon} />
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <VscGithub onClick={() => setOpen(true)} />
      )}
    </Fade>
  );
};

export default Nav;
