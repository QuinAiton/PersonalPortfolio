import React from 'react';
import Styles from '../styles/About.module.scss';
import { Bounce, Fade, Rotate } from 'react-reveal';
import Image from 'next/image';
const About = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.title}>
        <Fade>
          <h1>About</h1>
        </Fade>
        <Fade Right>
          <div className={Styles.underline}></div>
        </Fade>
      </div>

      <div className={Styles.content}>
        <div className={Styles.container1}>
          <Bounce left cascade>
            <div className={Styles.interestCard}>
              <Image
                src='/fast.png'
                alt='focus cards'
                height={100}
                width={100}
              />
              <div className={Styles.cardBody}>
                <h3>Fast Sites</h3>
                <p>body</p>
              </div>
            </div>
            <div className={Styles.interestCard}>
              <Image
                src='/intuitive.png'
                alt='focus cards'
                height={100}
                width={100}
              />
              <div className={Styles.cardBody}>
                <h3>Intuitive Design</h3>
                <p>body</p>
              </div>
            </div>
            <div className={Styles.interestCard}>
              <Image
                src='/responsive.png'
                alt='focus cards'
                height={100}
                width={100}
              />
              <div className={Styles.cardBody}>
                <h3>responsive Websites</h3>
                <p>body</p>
              </div>
            </div>
            <div className={Styles.interestCard}>
              <Image
                src='/dynamic.png'
                alt='focus cards'
                height={100}
                width={100}
              />
              <div className={Styles.cardBody}>
                <h3>Dynamic Content</h3>
                <p>body</p>
              </div>
            </div>
          </Bounce>
        </div>
        <div className={Styles.container2}>
          <div className={Styles.bio}>
            <Rotate top>
              <Image
                src='/AvatarMaker.png'
                alt='profile'
                height={250}
                width={250}
              />
            </Rotate>
            <Bounce left>
              <p>
                My name is Quinten Aiton and I am a full-stack web Developer and
                Software Developer, currently living in Victoria, BC. I have a
                Bachelor of Science from the University of Victoria where I
                specialized in Geomatics, and a diploma of full stack
                development from Lighthouse Labs. I love creating intuitive
                interactive application for the web and have a passion for green
                tech. I am both driven and self-motivated, and I am constantly
                experimenting with new technologies and techniques. I am very
                passionate about Web Development, and strive to better myself as
                a developer, and the development community as a whole.
              </p>
            </Bounce>
          </div>
          <div className={Styles.skills}>
            <p>HTML</p>
            <div className={Styles.bar}>
              <div className={`${Styles.percentage}, ${Styles.html}`}>90%</div>
            </div>

            <p>CSS</p>
            <div className={Styles.bar}>
              <div className={`${Styles.percentage}, ${Styles.css}`}>80%</div>
            </div>

            <p>JavaScript</p>
            <div className={Styles.bar}>
              <div className={`${Styles.percentage}, ${Styles.js}`}>65%</div>
            </div>

            <p>PHP</p>
            <div className={Styles.bar}>
              <div className={`${Styles.percentage}, ${Styles.php}`}>60%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
