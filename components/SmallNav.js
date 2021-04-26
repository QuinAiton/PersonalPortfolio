import React, { useState } from 'react';
import Styles from '../styles/SmallNav.module.scss';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';
import Fade from 'react-reveal/Fade';
import Image from 'next/image';
import Link from 'next/link';
const SmallNav = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Fade top>
      {isOpen ? (
        <Fade top>
          <nav className={Styles.container}>
            <div className={Styles.exit} onClick={() => setOpen(false)}>
              <span>+</span>
            </div>
            <div className={Styles.items}>
              <ul className={Styles.links}>
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
            <ul className={Styles.contact}>
              <li>
                <a href='https://github.com/quinaiton' target='_blank'>
                  <VscGithub className={Styles.icon} />
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/quinten-aiton/'
                  target='_blank'
                >
                  <FaLinkedin className={Styles.icon} />
                </a>
              </li>
              <li>
                <a href='mailto:quinaiton@pm.me' target='_blank'>
                  <FaEnvelope className={Styles.icon} />
                </a>
              </li>
            </ul>
          </nav>
        </Fade>
      ) : (
        <div className={Styles.menu}>
          <div className={Styles.hamburger} onClick={() => setOpen(true)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Image
            className={Styles.image}
            src='/logo.png'
            alt='logo'
            height={100}
            width={100}
          />
        </div>
      )}
    </Fade>
  );
};

export default SmallNav;
