import React, { useState } from 'react';
import Styles from '../styles/BigNav.module.scss';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';
import Fade from 'react-reveal/Fade';
import Image from 'next/image';
import Link from 'next/link';
const BigNav = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Fade top>
      <div className={Styles.container}>
        <Image
          className={Styles.image}
          src='/logo.png'
          alt='logo'
          height={130}
          width={130}
        />
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
          <ul className={Styles.contact}>
            <li>
              <a href='https://github.com/quinaiton' target='_blank'>
                <VscGithub className={Styles.icon} />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/quinten-aiton'
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
        </div>
      </div>
    </Fade>
  );
};

export default BigNav;
