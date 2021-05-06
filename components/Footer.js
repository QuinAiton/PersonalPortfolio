import React from 'react';
import Styles from '../styles/Footer.module.scss';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';
import { FaRegCopyright } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.footer}>
        <h3>Thanks For Stopping By!</h3>
        <ul className={Styles.contact}>
          <li>
            <a href='https://github.com/quinaiton' target='_blank'>
              <VscGithub className={Styles.icon} />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/quinten-aiton' target='_blank'>
              <FaLinkedin className={Styles.icon} />
            </a>
          </li>
          <li>
            <a href='mailto:quinaiton@pm.me' target='_blank'>
              <FaEnvelope className={Styles.icon} />
            </a>
          </li>
        </ul>
        <p>
          A10-Development <FaRegCopyright className={Styles.copy} /> 2021
        </p>
        <img className={Styles.squiggle} src='/squiggle.svg' height='250px' />
        <p className={Styles.hire}>Hire Me!</p>
      </div>
    </div>
  );
};

export default Footer;
