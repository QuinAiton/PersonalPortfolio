import React from 'react';
import Styles from '../styles/About.module.scss';
import { Roll, Fade } from 'react-reveal';
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
      <div className={Styles.interests}>
        <div className={Styles.hex}>
          <Image
            src='/responsive.png'
            alt='responsive'
            height={100}
            width={100}
          />
        </div>
        <div className={Styles.hex}>
          <Image src='/fast.png' alt='fast' height={100} width={100} />
        </div>
        <div className={Styles.hex}>
          <Image
            src='/intuitive.png'
            alt='intuitive'
            height={100}
            width={100}
          />
        </div>
        <div className={Styles.hex}>
          <Image src='/dynamic.png' alt='dynamic' height={100} width={100} />
        </div>
      </div>
    </div>
  );
};

export default About;
