import React from 'react';
import Styles from '../../styles/About.module.scss';
import { Roll, Fade, Bounce } from 'react-reveal';
import FocusCard from './FocusCards';
import Image from 'next/image';
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

      <div className={Styles.content}>
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

        <div className={Styles.bio}>
          <Image src='/profile.jpg' alt='profile' height={300} width={300} />
          <p>
            My name is Quinten Aiton and I am a full-stack web Developer and
            Software Developer, currently living in Victoria, BC. I have a
            Bachelor of Science from the University of Victoria where I
            specialized in Geomatics, and a diploma of full stack development
            from Lighthouse Labs. I love creating intuitive interactive
            application for the web and have a passion for green tech. I am both
            driven and self-motivated, and I am constantly experimenting with
            new technologies and techniques. I am very passionate about Web
            Development, and strive to better myself as a developer, and the
            development community as a whole.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
