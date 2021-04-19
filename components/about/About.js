import React from 'react';
import Styles from '../../styles/About.module.scss';
import { Roll, Fade, Bounce } from 'react-reveal';
import FocusCard from './FocusCards';
const About = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.title}>
        <Roll left>
          <h1>About</h1>
        </Roll>
        <Fade Right>
          <div className={Styles.underline}></div>
        </Fade>
      </div>
      <div className={Styles.interests}>
        <Bounce left>
          <FocusCard
            image='/responsive.png'
            title='Responsive'
            body='Designs built for all screens from large to small'
          />
          <FocusCard
            image='/fast.png'
            title='Speed'
            body='Websites that are fast'
          />
          <FocusCard
            image='/intuitive.png'
            title='Intuitive'
            body='User friendly websites'
          />
          <FocusCard
            image='/dynamic.png'
            title='Dynamic'
            body='Websites that are tailored to each user'
          />
        </Bounce>
      </div>
    </div>
  );
};

export default About;
